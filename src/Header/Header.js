import React, {useState} from 'react'
import MenuIcon from '@material-ui/icons/Menu';
import CloseIcon from '@material-ui/icons/Close';
import './Header.scss';
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link
  } from "react-router-dom";

function Header() {
    const [close, setClose] = useState(false)

    let icon = (
        <MenuIcon 
        style={{fontSize:30,cursor:"pointer"}} 
        className= "navIcon"
        onClick={() => setClose(!close)}  />
    )

    if(close){
        icon = (
            <CloseIcon 
            className = "navIcon"
            onClick={() => setClose(!close)}
            />
        )
    }
    return (
        <div>
            <div className="payHeader">
                <div className="headerLogo">
                    <a href="#">CHITHI</a>
                </div>
                    <div className="pages">
                    {icon}
                    </div>
                    <div className={`navClose ${close && "navOpen"}`}>
                    <div className="navContent">
                        <div className="routePage">
                        
                            <Link 
                            to="/"
                            onClick={() => setClose(!close)}
                            
                            ><p>Home</p></Link>
                        </div>
                        <div className="routePage">
                            <Link 
                            to="/pay"
                            onClick={() => setClose(!close)}
                            ><p>Pay</p></Link>
                        </div>
                        <div className="routePage">
                        <Link 
                            to="/schedule"
                            onClick={() => setClose(!close)}
                            
                            ><p>Schedule</p></Link>
                            
                        </div>
                        
                        </div>
                    </div>
                 
            </div>
        </div>
    )
}

export default Header
