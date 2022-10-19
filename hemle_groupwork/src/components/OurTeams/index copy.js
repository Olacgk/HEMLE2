import React from "react";
import BuildTitle from "../Functions";

import {ourTeams} from "../About/variables.js"
import "./style.css"

import {FiChevronLeft} from "react-icons/fi"
import {FiChevronRight} from "react-icons/fi"

import { useState} from 'react'

import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Autoplay} from "swiper";
import "swiper/css";


const OurTeams = () => {


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


    return(
        <section id="OurTeams">
            
            { BuildTitle(ourTeams.title) }

            <div class="content">
                
                <div class="article">
                    <p> {ourTeams.article} </p>
                </div>
                
                <div class="images">
                    <div  onClick={() => swiper.slidePrev()} class='slide' id='left'>
                        <div class="slidediv">
                            <FiChevronLeft />
                        </div>
                    </div>
                    <Swiper {...settings} initialSlide={0} onSwiper={setSwiper}>
                        {ourTeams.asides.map( (tmp,index) => (
                            <SwiperSlide key={index}>
                                <div>
                                    <img src={tmp.image} alt={tmp.job}/>
                                    <div>
                                        <h2> {tmp.title} </h2>
                                        <p> {tmp.job} </p>
                                    </div>
                                </div>
                            </SwiperSlide>
                        ))}
                    </Swiper>
                    <div  onClick={() => swiper.slideNext()}class='slide' id='right'>
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