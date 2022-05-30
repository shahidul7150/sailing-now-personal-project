import React, { useEffect, useState } from 'react';
import Carousel from '../Carusel/Carousel';
import SingleNews from './SingleNews';
import Partner from './Partner';
import Footer from '../Footer/Footer';

const News = () => {
    const [newses, setNewses] = useState([]);
    useEffect(() => {
        fetch('news.json')
            .then(res => res.json())
        .then(data=>setNewses(data))
    },[])
    return (
        <div>
            <Carousel/>
            <p className='text-center py-5 mt-3 text-xl font-bold '>MOMENT NEWS </p>
            <div className='grid sm:grid-cols-1 lg:grid-cols-3 gap-5 px-12'>
            {
                newses.map(news => <SingleNews
                    key={news._id}
                    news={news}
                ></SingleNews>)
            }
            </div>
            <div className='text-center my-5'>
            <button className='bg-[#FADD75] px-5 py-2 font-bold'>Load More</button>
            </div>
            

            <div className='my-5'>
                <h2 className='text-center text-2xl font-bold my-3'>Our Partner</h2>

                <Partner/>
            </div>
            <Footer/>
        </div>
    );
};

export default News;