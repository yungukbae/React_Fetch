import { useState } from "react";
import { useHistory } from "react-router-dom";
import Logout from "./Logout";


const Navbar = ({ token, setToken }) =>{
    const history = useHistory()
        
    const loghandler = () =>{
        if(token){
            Logout(history)
            setToken(null)
        } else {
            history.push('/login')
        }
    }

    return(
        <div>
            NavBar
            <button onClick={loghandler}>{ token ? "LOGOUT" : "LOGIN" }</button>        
        </div>
    )
}




export default Navbar;