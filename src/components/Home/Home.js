import React from 'react';
import landing from '../../images/landing.jpg'
const Home = () => {
  return (
    <div class="hero min-h-screen bg-base-100">
      <div class="hero-content flex-col lg:flex-row-reverse">
        <img
          src={landing}
          class="max-w-lg"
         alt=''/>
        <div>
          <h1 class="text-5xl font-bold">JUST SAILING <span className='text-[#0C6B7F]'>WITH ENJOY</span></h1>
          <h1 class="text-3xl font-light">FEEL YOUR SURVIVE</h1>
          <p class="py-6 font-medium">
            Olympic champions Hannah Mills and Eilidh McIntyre are named female
            Rolex World Sailor of the Year 2021, multi-discipline champion Tom
            Slingsby is named male Rolex World Sailor of the Year 2021 and Sail
            Africa wins World Sailing 11th Hour Racing Sustainability Award.
          </p>
          <button class="btn btn-primary">Join Now</button>
        </div>
      </div>
    </div>
  );
};

export default Home;
