import React from 'react'
import NavBar from '../Components/NavBar';
import Footerbar from "../Components/Footer";
import Heroimg2 from '../Components/Heroimg2';
import Form from "../Components/Form"

const Contact = () => {
  return  <div>
    <NavBar/>
    <Heroimg2 heading="CONTACT." text="Hit me up for a chat"/>
    <Form />
    <Footerbar />
  </div>;
};

export default Contact;