import React from 'react';
import './News.css';
const SingleNews = ({ news }) => {
  const { img, semiTitle, heading, article } = news;
  return (
    <div className="bg-white shadow-md ">
      <div className='relative'>
              <img width="385px" className="img-badge" src={img} alt="" />
              <div className='absolute top-0 right-0 bg-[#0C6B7F]
              px-2 py-1 font-medium text-white'>
                  <p>7 April 2022</p>
              </div>
      </div>

      <div className="p-2">
        <h2 className='text-xl'>{semiTitle}</h2>
        <h2 className='text-3xl font-bold' >{heading}</h2>
        <p>{article}</p>
      </div>
    </div>
  );
};

export default SingleNews;
