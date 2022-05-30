import React, { useEffect, useState } from 'react';
import SingleNews from './SingleNews';

const News = () => {
    const [newses, setNewses] = useState([]);
    useEffect(() => {
        fetch('news.json')
            .then(res => res.json())
        .then(data=>setNewses(data))
    },[])
    return (
        <div>

            <p className='text-center py-5 mt-3 text-xl font-bold '>MOMENT NEWS </p>
            <div className='grid sm:grid-cols-1 lg:grid-cols-3 gap-5 px-12'>
            {
                newses.map(news => <SingleNews
                    key={news._id}
                    news={news}
                ></SingleNews>)
            }
           </div>
        </div>
    );
};

export default News;