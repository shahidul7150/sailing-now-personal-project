import React, { useEffect, useState } from 'react';
import Carousel from '../Carusel/Carousel';
import Footer from '../Footer/Footer';
import Event from './Event';
import './Events.css'
const Events = () => {
  const [events, setEvents] = useState([]);
  useEffect(() => {
    fetch('http://localhost:5000/event')
      .then((res) => res.json())
      .then((data) => setEvents(data));
  }, []);
  return (
    <div>
      <div>
        <Carousel />
      </div>
      <p className="text-center py-5 mt-3 text-xl font-bold ">Our Events </p>
      {/* <div className=" grid sm:grid-cols-1 lg:grid-cols-2 gap-3 my-5 mx-12">
        <div className="relative">
          <img
            src="https://www.chi.ac.uk/app/uploads/2021/09/Sailing-1024x576.jpg"
            alt=""
          />
          <div className="absolute bottom-0 right-0">
            <h2 className="text-3xl text-white px-4">Coming up next</h2>
            <p className=" text-base bg-[#01206a60] text-white px-2 py-2 text-center mt-1">
              {' '}
              <button className="tbn-ghost">BOOK NOW</button>
            </p>
          </div>
        </div>
        <div className="relative">
          <img
            src="https://resources.stuff.co.nz/content/dam/images/4/y/t/z/i/o/image.related.StuffLandscapeSixteenByNine.1420x800.22z12e.png/1627639428248.jpg"
            alt=""
          />
          <div className="absolute bottom-0 right-0">
            <h2 className="text-3xl text-white px-4">This Sunday</h2>
            <p className=" text-base bg-[#01206a60] text-white px-2 py-2 text-center mt-1">
              <button className="tbn-ghost">BOOK NOW</button>
            </p>
          </div>
        </div>
      </div> */}

      <div className="grid lg:grid-cols-4 gap-5 mx-12 box-container">
        {events.map((event) => (
          <Event key={event._id} event={event}></Event>
        ))}
      </div>

      <div className="my-36">
        <h2 className="sm:text-xl text-2xl text-center font-semibold">
          Your Email For daily Event Update
        </h2>

        <div className="text-center input-group justify-center mt-4 w-full ">
          <input
            type="text"
            placeholder="Type here"
            class="input input-bordered  "
          />
          <button className="btn btn-primary">SUBMIT</button>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Events;
