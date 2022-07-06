import "./HeroimgStyles.css";

import React from 'react';
import IntroImg from "../assets/30f3ba97f5c698f6fd88bb9b3c33aa64.jpeg";
import { Link } from "react-router-dom";
const Heroimg = () => {
  return (
    <div className="hero">
        <div className="mask">
            <img className="into-img" src={IntroImg}/>
        </div>
        <div className="content">
            <p>HI, I'M JACK.</p>
            <h1>FREELANCE DEVELOPER</h1>
            <div>
                <Link to='./project' className="btn">Projects</Link>
                <Link to='./contact' className="btn btn-light">Contact</Link>
            </div>
        </div>
    </div>
  )
}

export default Heroimg