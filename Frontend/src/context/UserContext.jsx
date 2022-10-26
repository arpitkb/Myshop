import { useState, createContext } from "react";
import data from "../data";

export const UserContext = createContext();
export const Login = createContext();
export const Logout = createContext();
export function UserProvider({children}) {
    let cookieUserID = document.cookie.split("; ").find(row => row.startsWith("id="))?.split("=")[1].split(".")[0].slice(4)
    const [user, setUser] = useState({id : cookieUserID || 1});


    const login = (loginUser) => {
        let DBuser = data.users.filter(x => x.id === loginUser.id);
        if(!DBuser) return false;
        setUser({id : DBuser.id});
    }
    const logout = () => {
        setUser(null);
    }
    return (
        <Logout.Provider value={logout}>
            <Login.Provider value={login}>
                <UserContext.Provider value={user}>
                    {children}
                </UserContext.Provider>
            </Login.Provider>
        </Logout.Provider>
    )
}