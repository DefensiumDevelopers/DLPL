import React from 'react';
import BgVideo from "../assets/DL.mp4"

const DynamicBackground = () => {
    return (
        <div className='w-full h-full'>
            <video src={BgVideo} autoPlay loop muted className='w-full h-full object-cover opacity-60' />
        </div>
    );
};

export default DynamicBackground;
