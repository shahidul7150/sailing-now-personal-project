import React from "react";
import './Home.css'
import landing from '../../images/landing.jpg'; 
import { useNavigate } from "react-router-dom";
require('typeface-poppins')

const Home = () => {
  const navigate=useNavigate()
  return (
    <div className="home-components">
      <div className="content">
        <h2>JUST SAILING <span>WITH ENJOY</span></h2>
        <h4>FEEL YOUR SURVIVE</h4>
        <p >
          Olympic champions Hannah Mills and Eilidh McIntyre are named female
          Rolex World Sailor of the Year 2021, multi-discipline champion Tom
          Slingsby is named male Rolex World Sailor of the Year 2021 and Sail
          Africa wins World Sailing 11th Hour Racing Sustainability Award.
              </p>
              <button onClick={()=>navigate('/register')} >Join Now</button>
      </div>
          <div className="landing-pic">
              <img src={landing} alt="" />
      </div>
    </div>
  );
};

export default Home;
