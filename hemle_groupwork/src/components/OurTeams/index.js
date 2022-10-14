import React, { useEffect } from "react";

import BuildTitle from "../Functions";
import {ChangeSlide} from "../Functions";

import {FiChevronLeft} from "react-icons/fi"
import {FiChevronRight} from "react-icons/fi"

import {ourTeams} from "../About/variables.js"

import "./style.css"





console.log(ourTeams)

const OurTeams = () => {

    useEffect(() => {
        setInterval(ChangeSlide, 4000);
    }, [])

    let asides = []
    for (let tmp of ourTeams.asides)
        asides.push(
            <aside class={"teamAside"}>
                <img src={tmp.image} alt={tmp.job}/>
                <div>
                    <h2> {tmp.title} </h2>
                    <p> {tmp.job} </p>
                </div>
            </aside>
        )

    return(
        <section id="OurTeams">
            
            { BuildTitle(ourTeams.title) }

            <div class="content">
                <div class="article">
                    <p> {ourTeams.artcle} </p>
                </div>
                
                <div class="images">
                    <div class='slide' id='left'>
                        <FiChevronLeft onClick={() => ChangeSlide(-1) }/>
                    </div>
                    <div id="scrollImg" className="imgs">
                        {asides}
                    </div>
                    <div class='slide' id='right'>
                        <FiChevronRight onClick={() => ChangeSlide(1) }/>
                    </div>
                </div>
            </div>
        
        </section>
    )
}

export default OurTeams;