import React from "react";
import { useState, createContext } from "react";
import { CartCleaner } from "../context/CartContext";
import data from "../data";

export const UserContext = createContext();
export const LoginContext = createContext();
export const LogoutContext = createContext();
export function UserProvider({children}) {
    let cookieUserID = document.cookie.split("; ").find(row => row.startsWith("id="))?.split("=")[1].split(".")[0].slice(4)
    const [user, setUser] = useState({id : cookieUserID || 1});
    const clearCart = React.useContext(CartCleaner);

    const login = (loginUser) => {
        if(!loginUser) return;
        let DBuser = data.users.filter(x => x.id === loginUser.id)[0];
        if(!DBuser) return false;
        setUser({id : DBuser.id});
    }
    const logout = () => {
        setUser(null);
        localStorage.clear();
        clearCart();
    }
    return (
        <LogoutContext.Provider value={logout}>
            <LoginContext.Provider value={login}>
                <UserContext.Provider value={user}>
                    {children}
                </UserContext.Provider>
            </LoginContext.Provider>
        </LogoutContext.Provider>
    )
}