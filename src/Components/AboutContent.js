import "./AboutContentStyles.css"

import React from 'react'
import { Link } from "react-router-dom";
import React1 from "../assets/photo-1614741118887-7a4ee193a5fa.avif"
import React2 from "../assets/photo-1638482856830-16b0e15fcf2c.avif"

const AboutContent = () => {
  return (
    <div className="about">
        <div className="left">
            <h1>Who am I</h1>
            <p> Freelance Web Developer
            </p>
            <Link to="/contact">
                <button className="btn">Contact</button>
            </Link>
        </div>
        <div className="right">
            <div className="img-container">
                <div className="img-stack top">
                    <img src={React2}
                    className="img"
                    alt="true" ></img> 
                     </div>
                 <div className="img-stack bottom">
                    <img src={React1}
                    className="img"
                    alt="true" ></img> 


                    
                </div>
            </div>
        </div>
    </div>
  )
}

export default AboutContent;