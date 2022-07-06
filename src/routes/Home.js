import React from 'react'
import NavBar from '../Components/NavBar';
import Heroimg from "../Components/Heroimg";
import Footerbar from "../Components/Footer";
import Work from "../Components/Work";

const Home = () => {
  return <div>
    <NavBar/>
    <Heroimg/>
    <Work />
    <Footerbar/>
  </div>;
};

export default Home;