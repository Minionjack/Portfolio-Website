import React from 'react'
import NavBar from '../Components/NavBar';
import Footerbar from "../Components/Footer";
import Heroimg2 from '../Components/Heroimg2';
import AboutContent from '../Components/AboutContent';

const About = () => {
  return <div>
    <NavBar/>
    <Heroimg2 heading="ABOUT." text="Making things"/>
    <AboutContent />
    <Footerbar />
  </div>
};

export default About;