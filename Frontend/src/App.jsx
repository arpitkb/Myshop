import "./styles/App.css";
import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Login from "./routes/Login";
import Header from "./partials/Header";
import Checkout from "./routes/Checkout";
import Cart from "./routes/Cart";
function App() {
  return (
    <div className="App">
      
      <Router>
        <Header/>
        <Switch>
          <Route path="/login">
            <Login />
          </Route>
          <Route path="/checkout">
            <Checkout />
          </Route>
          <Route path="/cart">
            <Cart />
          </Route>
          <Route path="/">
            <h1>Home page</h1>
          </Route>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
