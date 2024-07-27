import React, {useState, useEffect} from 'react'
import { Link } from 'react-router-dom'
import { Button } from './Button';
import './Navbar.css';


function Navbar() {
    const [click, setClick] = useState(false);
    const [button, setButton] = useState(true);
    
    const handleclick = () => setClick(!click);
    const closeMobileMenu = () => setClick(false);
    
    
    const showButton = () => {
        if(window.innerWidth <= 960){
            setButton(false);
        } 
        else {
            setButton(true);
        }
    };


    useEffect(() => {
        showButton();
    }, []);

    window.addEventListener('resize', showButton);

    return (
    <>
        <nav className="navbar">
            <div className="navbar-container">
                <Link to="/" className="navbar-logo" onClick={closeMobileMenu}>
                    ReTicketer<i className="fa-solid fa-ticket" />
                </Link>
                <div className="menu-icon" onClick={handleclick}>
                    <i className={click ? "fas fa-times" : "fas fa-bars"} />    
                </div>
                <ul className={click ? "nav-menu active" : "nav-menu"}>
                    <li className="nav-item">
                        <Link to="/home" className="nav-links" onClick={closeMobileMenu}>
                            Home
                        </Link>
                    </li>
                    <li className="nav-item">
                        <Link to="/temp2" className="nav-links" onClick={closeMobileMenu}>
                            Temp2 //don't forget to change
                        </Link>
                    </li>
                    <li className="nav-item">
                        <Link to="/temp3" className="nav-links" onClick={closeMobileMenu}>
                            Temp3 //don't forget to change
                        </Link>
                    </li>
                    <li className="nav-item">
                        <Link to="/sign-up" className="nav-links-mobile" onClick={closeMobileMenu}>
                            Sign up
                        </Link>
                    </li>
                </ul>
                {button &&<Button butonStyle='btn--outline'>Sign Up</Button>}
            </div>
        </nav>
    </>
  )
}

export default Navbar
