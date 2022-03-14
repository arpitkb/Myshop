import { createContext } from "react";
import React from "react";

export const CartContext = createContext([]);
export const CartUpdater = createContext();
export function CartProvider({children}) { 
    const [cart, setCart] = React.useState([]);
    const addToCart = (product) => {
        if(cart.includes(product)) {
            setCart(cart.map(p => p.id === product.id ? {...product, quantity: product.quantity + 1} : p));
        }
        else setCart([...cart, product]);
    }
  return (
    <CartContext.Provider value={cart}>
        <CartUpdater.Provider value={addToCart}>
        {children}
        </CartUpdater.Provider>
    </CartContext.Provider>
  )
}
