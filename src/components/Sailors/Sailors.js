import React, { useEffect, useState } from 'react';
import Footer from '../Footer/Footer';
import Sailor from './Sailor';

const Sailors = () => {
    const [sailors, setSailors] = useState([]);
    useEffect(() => {
        fetch('sailors.json')
            .then(res => res.json())
        .then(data=>setSailors(data))
    },[])
    return (
        <div >
            <h2 className='text-3xl text-[#0C6B7F] text-center font-bold my-3 '>SAILOR TEAM</h2>
            <div className='grid sm:grid-cols-1 lg:grid-cols-4 gap-12 mb-5 mx-12'>
                {
                    sailors.map(sailor=><Sailor key={sailor._id} sailor={sailor}></Sailor>)
                }
            </div>
            <Footer/>
        </div>
    );
};

export default Sailors;