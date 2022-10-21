import React from "react";
import BuildTitle from "../about_Functions";

// import Pc from "./Pc.js"
// import Phone from "./Phone.js"

import {FiChevronLeft} from "react-icons/fi"
import {FiChevronRight} from "react-icons/fi"

import { useState} from 'react'
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Autoplay} from "swiper";

import "./style.css"

import camfoot from "../../assets/footer/camfoot.png"
import onefoot from "../../assets/footer/onefoot.png"
import sport from "../../assets/footer/sport.png"




const OurFriends = ({ourFriends}) => {

    let tab = [camfoot, onefoot, sport]


	const [swiper, setSwiper] = useState();

	const settings = {
		modules:[Autoplay,Navigation],
		loop: true,
		autoplay: {
			delay: 4000,
			disableOnInteraction: false,
		},
		initialSlide: 0,
		slidesPerView: 1,
		breakpoints: {
			700: { slidesPerView: 1 },
			850: { slidesPerView: 2 },
			1000: { slidesPerView: 3 },
		},
		onSlideChange: (swiper) => { }
	}

    return (
        <section id="OurFriends">

            { BuildTitle("Nos partenaires") }
            
            <div class="ourfriend-content">
                <div class="ourfriend-article">
                    <p>
                        Nous sommes pret a tout pour vous offrir le meilleur du  football africain avec:
                    </p>
                </div>
                
                <div class="ourfriend-images">
                    <div class='slide' id='left' onClick={() => swiper.slidePrev()}>
                        <div class="slidediv">
                            <FiChevronLeft />
                        </div>
                    </div>
                    <Swiper {...settings} initialSlide={0} onSwiper={setSwiper} className="imgs">
                        { tab.map( (img, index) => 
                            <SwiperSlide key={index}> <img src={img} alt=''/> </SwiperSlide>
                        ) }
                    </Swiper>
                    <div class='slide' id='left' onClick={() => swiper.slideNext()}>
                        <div class="slidediv">
                            <FiChevronRight />
                        </div>
                    </div>
                </div>
            </div>
        
        </section>
    )
}

export default OurFriends;
