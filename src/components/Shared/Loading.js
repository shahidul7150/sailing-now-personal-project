import React from 'react';
import loader from '../../images/loader.svg'
const Loading = () => {
    return (
        <div className='h-screen flex justify-center items-center'>
            <img src={loader} alt="" />
        </div>
    );
};

export default Loading;