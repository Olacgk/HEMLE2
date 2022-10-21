import { SwiperSlide } from "swiper/react";

const pc = ({tab}) =>
    tab.map( (img, index) => 
        <SwiperSlide key={index}> <img src={img} alt=''/> </SwiperSlide>
    )

export default pc;
