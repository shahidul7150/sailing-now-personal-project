import React from 'react';

const Event = ({ photo }) => {
  return (
    <div class="card bg-base-100 shadow-xl">
     
      <figure>
        <img width="100%"
          src={photo.img}
          alt="Shoes"
        />
      </figure>
    </div>
  );
};

export default Event;
