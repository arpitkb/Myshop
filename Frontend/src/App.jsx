import "./styles/App.css";
import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Login from "./routes/Login";
import Header from "./partials/Header";
import Checkout from "./routes/Checkout";
import Cart from "./routes/Cart";
import Home from "./routes/Home";
import "./lux.css";
import ProductRoute from "./routes/ProductRoute";
import { CartProvider } from "./context/CartContext";
function App() {
  return (
    <CartProvider>
      <div className='App'>
        <Router>
          <Header />
          <Switch>
            <Route path='/login'>
              <Login />
            </Route>
            <Route path='/checkout'>
              <Checkout />
            </Route>
            <Route path='/cart'>
              <Cart />
            </Route>
            <Route path='/product'>
              <ProductRoute />
            </Route>
            <Route path='/'>
              <Home />
            </Route>
          </Switch>
        </Router>
      </div>
    </CartProvider>
  );
}

export default App;
