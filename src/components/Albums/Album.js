import React from 'react';

const Album = ({album}) => {
    return (
        <div>
            <img src={album.img} alt="" />
        </div>
    );
};

export default Album;