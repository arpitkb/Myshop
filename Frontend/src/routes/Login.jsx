import data from "../data";
import React from "react";
import { LoginContext, UserContext } from "../context/UserContext";
function Login(){
    const login = React.useContext(LoginContext);
    const user = React.useContext(UserContext);
    const getUser = (username, password) => {
        const searchUser = data.users.filter(usr => (usr.username === username && usr.password === password))[0];
        if(!searchUser) return null;
        console.log(searchUser);
        return searchUser;
    }
    const handleSubmit = (event) => {
        event.preventDefault();
        console.log(event);
        const usr = getUser(event.target[0].value, event.target[1].value);
        if(!usr){
            console.log("Login Failed!!, invalid username or password!!");
        }
        login(usr);
        console.log(user);
    }
    return (
        <div>
            <form onSubmit={handleSubmit}>
                <label htmlFor="username">Username</label>
                <input type="text" name="username" id="username" placeholder="Enter your username" required />
                <br />
                <label htmlFor="password">Password</label>
                <input type="password" name="password" id="password" placeholder="Enter your password" required />
                <button type="submit">Login</button>
            </form>
        </div>
    );
}
export default Login;