import React, { useEffect, useState } from 'react';
import Footer from '../Footer/Footer';
import Album from './Album';
import './Albums.css'
const Albums = () => {
  const [albums, setAlbums] = useState([]);
  useEffect(() => {
    fetch('albums.json')
      .then((res) => res.json())
      .then((data) => setAlbums(data));
  }, []);
  return (
    <div>
      <h2 className='text-3xl text-[#0C6B7F] text-center font-bold mt-12'>Photo Albums</h2>
      <div className='gallery mb-5'>
        {albums.map((album) => (
          <Album  key={album._id} album={album}></Album>
        ))}
          </div>
          <Footer/>
    </div>
  );
};

export default Albums;
