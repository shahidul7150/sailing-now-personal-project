import React, { useEffect, useState } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
const Partner = () => {
    const [sliders, setSliders] = useState([]);

    useEffect(() => {
        fetch('partners.json')
            .then(res => res.json())
        .then(data=>setSliders(data))
    }, []);

    return (
        <Swiper
        spaceBetween={50}
        slidesPerView={4}
        onSlideChange={() => console.log('slide change')}
        onSwiper={(swiper) => console.log(swiper)}
        >
            {
                sliders.map(slider => <SwiperSlide>
                    <img className='mx-auto' width="150px" src={slider.img} alt="" />
                </SwiperSlide>)
            }
      </Swiper>
    );
};

export default Partner;