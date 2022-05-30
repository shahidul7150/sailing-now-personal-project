import React, { useEffect, useState } from 'react';
import Footer from '../Footer/Footer';
import Album from './Album';

const PhotoAlbums = () => {
  const [photos, setPhotos] = useState([]);
  useEffect(() => {
    fetch('albums.json')
      .then((res) => res.json())
      .then((data) => setPhotos(data));
  }, []);
  return (
    <div >
      <h2 className='text-center mt-12 font-bold text-xl'>PhotoAlbums</h2>
          <div className=' grid sm:grid-cols-1 lg:grid-cols-2 gap-3 my-5 mx-12'>
              
              <div className='relative'>
                  <img src="https://www.chi.ac.uk/app/uploads/2021/09/Sailing-1024x576.jpg" alt="" />
                  <div className='absolute bottom-0 right-0'>
                      <h2 className='text-3xl text-white px-4'>Coming up next</h2>
                      <p className=' text-base bg-[#01206a60] text-white px-2 py-2 text-center mt-1'>BOOK NOW</p>
                  </div>
             </div>
              <div className='relative'>
                  <img src="https://resources.stuff.co.nz/content/dam/images/4/y/t/z/i/o/image.related.StuffLandscapeSixteenByNine.1420x800.22z12e.png/1627639428248.jpg" alt="" />
                  <div className='absolute bottom-0 right-0'>
                      <h2 className='text-3xl text-white px-4'>This Sunday</h2>
                      <p className=' text-base bg-[#01206a60] text-white px-2 py-2 text-center mt-1'>BOOK NOW</p>
                  </div>
             </div>
              
      </div>

          <div className='grid lg:grid-cols-4 gap-5 mx-12'>
          {photos.map((photo) => (
        <Album key={photo._id} photo={photo}></Album>
      ))}
          </div>
          
          <div className='my-36'>
              <h2 className='text-2xl text-center font-semibold'>Your Email For daily Event Update</h2>

              
              <div className=' text-center input-group justify-center mt-4'>
                  <input type="text" placeholder="Type here" class="input input-bordered w-full max-w-xs"/>
                  <button className='btn btn-primary'>SUBMIT</button>
           
             </div>
          </div>
          <Footer/>
    </div>
  );
};

export default PhotoAlbums;
