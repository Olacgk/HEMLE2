import React from "react";
import BuildTitle from "../about_Functions";

import {FiChevronLeft} from "react-icons/fi"
import {FiChevronRight} from "react-icons/fi"

import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Autoplay} from "swiper";

import "swiper/css";
import "./style.css"
import { useState} from 'react'



const OurTeams = ({ourTeams}) => {

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
			700: { slidesPerView: 2 },
			850: { slidesPerView: 3 },
			1000: { slidesPerView: 4 },
		},
		onSlideChange: (swiper) => { }
	}


    return (
        <section id="OurTeams">
            
            { BuildTitle(ourTeams.title) }

            <div class="ourTeam-content">
                
                <div class="ourTeam-article">
                    <p> {ourTeams.article} </p>
                </div>
                
                <div class="ourTeam-images">
                    <div class='slide' id='left' onClick={() => swiper.slidePrev()}>
                        <div class="slidediv">
                            <FiChevronLeft />
                        </div>
                    </div>
                    <Swiper {...settings} initialSlide={0} onSwiper={setSwiper} className="imgs">
                        {ourTeams.asides.map( (tmp,index) => (
                            <SwiperSlide key={index}>
                                <div className="aside">
                                    <img src={tmp.image} alt={tmp.job}/>
                                    <div>
                                        <h2> {tmp.title} </h2>
                                        <p> {tmp.job} </p>
                                    </div>
                                </div>
                            </SwiperSlide>
                        ))}
                    </Swiper>
                    <div class='slide' id='right' onClick={() => swiper.slideNext()}>
                        <div class="slidediv">
                            <FiChevronRight />
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default OurTeams;