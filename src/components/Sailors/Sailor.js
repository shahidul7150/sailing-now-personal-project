import React from 'react';

const Sailor = ({sailor}) => {
    return (
        <div className='shadow-md'>
            <img src={sailor.img} alt="" />
            <div className='grid grid-cols-2 px-12'>
            <div className='text-gray-400'>
                <p>Name:</p>
                <p>ID :</p>
                <p>Status :</p>
            </div>
            <div className='ml-12 pb-3 text-gray-400'>
                <p>{sailor.name}</p>
                <p>{sailor.pId}</p>
                <p>{sailor.categiries}</p>
            </div>
            </div>
        </div>
    );
};

export default Sailor;