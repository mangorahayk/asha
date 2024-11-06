import React, { useRef, useState } from 'react';
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';
import { Image } from '@chakra-ui/react';
// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';

import './styles.css';

// import required modules
import { Pagination } from 'swiper/modules';

export default function CustomSwiper({data}) {
  return (
    <>
      <Swiper
        slidesPerView={3}
        spaceBetween={30}
        breakpoints={{
            390: {
                slidesPerView : 1.1,
                spaceBetween: 10
            },
            640: {
              slidesPerView: 2.2,
              spaceBetween: 10

            },
            768: {
              slidesPerView: 3.1,
              spaceBetween: 15

            },
            1024: {
              slidesPerView: 5,
            },
          }}
        pagination={{
          clickable: true,
        }}
        modules={[Pagination]}
        className="mySwiper"
      >
         {
                    data?.map(({ id, img }) => (
                        <SwiperSlide key={id}>
                                 <Image  src={img} w={"310px"} objectFit={"cover"} h={"330px"} />
                            </SwiperSlide>
                    ))
                }
      </Swiper>
    </>
  );
}
