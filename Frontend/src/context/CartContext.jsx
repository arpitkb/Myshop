import { createContext } from "react";
import React from "react";

export const CartContext = createContext([]);
export const CartUpdater = createContext();
export const CartRemover = createContext();
export const CartCleaner = createContext();
export function CartProvider({children}) {
  // Add the cart to local storage or cookie

    const [cart, setCart] = React.useState(JSON.parse(localStorage.getItem("cartItems")) || []);

    const addToCart = (product) => {
      let includes = false;
      let idx = 0;
      cart.forEach((item, i) => {
        if (item.id === product.id) {
          includes = true;
          idx = i;
        }
      });
      let newCart = [...cart];
      if(includes) {
        newCart[idx] = { ...newCart[idx], quantity: newCart[idx].quantity + 1 };
          setCart(newCart);
      }
      else {
        newCart.push({ ...product, quantity: 1 });
      }

        localStorage.setItem(
          "cartItems",
          JSON.stringify(newCart)
        );
        setCart(newCart);
    }
    const removeFromCart = (product) => {
      let newCart = cart.filter(p => { return p.id !== product.id} );
      localStorage.setItem("cartItems", JSON.stringify(newCart));
      setCart(newCart);
        
    }
    const clearCart = () => {
      setCart([]);
    }
  return (
    <CartContext.Provider value={cart}>
        <CartUpdater.Provider value={addToCart}>
            <CartRemover.Provider value={removeFromCart}>
              <CartCleaner.Provider value={clearCart}>
                  {children}
              </CartCleaner.Provider>
            </CartRemover.Provider>
        </CartUpdater.Provider>
    </CartContext.Provider>
  )
}
