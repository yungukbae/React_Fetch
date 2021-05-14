import Logout from './Logout'
import { useHistory } from 'react-router-dom';
import { useState, useEffect} from 'react';
import Loginform from './Loginform';


const Navbar = (props) => {
    const history = useHistory()
    const isToken = localStorage.getItem('accessToken')
    const [Logstate, setLogstate] = useState('LOGIN')
    //Logstate , login = true, logout = false
    const btn = <button onClick={() => Navbar()}>{Logstate}</button>
    // const logoutbtn = <button onClick={() => Logout(history)}>LOG OUT</button>
    // const loginbtn = <button onClick={() => history.push('/login')}>LOG IN</button>
        
        useEffect(() => {
            
            if(!isToken){
                history.push('/login')
            }else{
                Logout(history)
                setLogstate('LOGIN')
                props = false;
            }
            if(props === true){
                setLogstate('LOGOUT')
            }

        }, [])
        
    
    
        
        
        return(
        <div>
            {btn}
        </div>
        )
}




export default Navbar;