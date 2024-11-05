import { Navigation, Pagination, Scrollbar, A11y } from 'swiper/modules';

import { Swiper, SwiperSlide } from 'swiper/react';
import { Image } from '@chakra-ui/react';
// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';

function CustomSwiper({ data }) {


    return (
        <Swiper
            // install Swiper modules
            modules={[Navigation, Pagination, Scrollbar, A11y]}
            spaceBetween={50}
            slidesPerView={3}
            navigation
            pagination={{ clickable: true }}
            scrollbar={{ draggable: true }}
            onSwiper={(swiper) => console.log(swiper)}
            onSlideChange={() => console.log('slide change')}
        >
                {
                    data?.map(({ id, img }) => (
                        <SwiperSlide key={id}>
                                 <Image  src={img} w={"310px"} objectFit={"cover"} h={"330px"} />
                            </SwiperSlide>
                    ))
                }

            ...
        </Swiper>
    );
};

export default CustomSwiper