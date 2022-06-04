import React from 'react';
import './Events.css'
const Event = ({ event }) => {
  console.log(event);
  return (

// ---------------------
    
    
<div class="box">
      <img src={ event.img}alt=""/>
<div class="content">
        <h3>{ event.title}</h3>
        <p className='mb-2 text-xl font-light'>{ event.subTitle}</p>
   <a href="#" class="btn">Booking Now</a>
</div>
</div>
    
    // -----------------------


    // <div class="card bg-base-100 shadow-xl">
     
    //   <figure>
    //     <img width="100%"
    //       src={photo.img}
    //       alt="Shoes"
    //     />
    //   </figure>
    // </div>
  );
};

export default Event;
