import React from 'react';

const SingleNews = () => {
  return (
    <div class="indicator">
      {/* <div class="indicator">
  <span class="indicator-item indicator-center indicator-middle badge badge-secondary">Uploading Image...</span> 
  <img src="https://api.lorem.space/image/house?w=300&h=150" />
            </div> */}

      <div class="card w-96 bg-base-100 shadow-xl">
        <figure>
          <span class="indicator-item indicator-end indicator-top  bg-[#0c6c7f60] mt-3 mr-12 px-4 py-2 ">
            7 April 2022
          </span>
          <img
            width="100%"
            src="https://api.lorem.space/image/shoes?w=400&h=225"
            alt="Shoes"
          />
        </figure>
        <div class="card-body">
          <h2 class="card-title">Shoes!</h2>
          <p>If a dog chews shoes whose shoes does he choose?</p>
          <div class="card-actions justify-end">
            <button class="btn btn-primary">Buy Now</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SingleNews;
