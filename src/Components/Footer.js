import "./FooterStyles.css"

import React from 'react';
import { FaHome, FaPhone, FaMailBulk, FaFacebook, FaTwitter, FaLinkedin } from "react-icons/fa";

const Footerbar = () => {
  return (
    <div className="footer">
        <div className="footer-container">
            <div className="left">
                <div className="location">
                <h4><FaHome size={20} style={{color: "#fff", marginRight: "2rem"}} />Dublin</h4>
                    <div>
                        
                </div>
                <div className="phone">
                    <h4><FaPhone size={20} style={{color: "#fff", marginRight: "2rem" }} /> 086-781-3148</h4>
                </div>
                <div className="email">
                    <h4><FaMailBulk size={20} style={{color: "#fff", marginRight: "2rem" }} />jackkennedy190@gmail.com</h4>
                </div>
            </div>
            </div>
                <div className="right">
                    <h4>About Me</h4>
                    <p>
                        Best Developer in the game
                    </p>
                    <div className="social">
                        <FaFacebook size={30} style = {{ color: '#fff', marginRight: "1rem"}} />
                        
                        <FaTwitter size={30} style = {{ color: '#fff', marginRight: "1rem"}} />
                    
                        <FaLinkedin size={30} style = {{ color: '#fff', marginRight: "1rem"}} />
                    </div>
                    </div>
                    </div>
                    </div>
                    
                
                
        
  )
}

export default Footerbar