import "./NavBarStyles.css"
import React, {useState} from 'react'; 
import { Link } from "react-router-dom"

import { FaBars, FaTimes } from "react-icons/fa";

 

const NavBar = () => {
    const[click, setClick] = useState(false);
    const handleClick = () => setClick(!click); 

    const [color, setColor] = useState(false);
    const changeColor = () => {
        if(window.scrollY >=100){
            setColor(true);
        }else {
            setColor(false);
        }
    };

window.addEventListener("scroll", changeColor);

  return (
      <>
    <div className={color ? "header header-bg" : "header"}>
    <Link to= '/'>
        <h1>Portfolio</h1>
    </Link>
    <ul className={click ? "nav-menu active" : "nav-menu" }>
        <li className="menu-items">
            <Link to='/' className="menu-link" data-content="Home">Home</Link>
        </li>
        <li className="menu-items">
            <Link to='/About' className="menu-link"  data-content="About">About</Link>
        </li>
        <li className="menu-items">
            <Link to='/Project' className="menu-link"  data-content="Project">Project</Link>
        </li>
        <li className="menu-items">
            <Link to='/Contact' className="menu-link"  data-content="Contact">Contact</Link>
        </li>
    </ul>
    <div className="hamburger" onClick={handleClick}>
        {click ? (<FaTimes size={20} style={{color: "#fff"}} />) : (<FaBars size={20} style={{color: "#fff"}} />)}
        
    </div>
    </div>
    </>

  )
}

export default NavBar