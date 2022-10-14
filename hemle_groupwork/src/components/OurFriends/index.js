import React from "react";

import camfoot from "../../assets/footer/camfoot.png"
import onefoot from "../../assets/footer/onefoot.png"
import sport from "../../assets/footer/sport.png"

import bar from "../../assets/tools/bar.png"
import "./style.css"

const OurFriends = () => {
    return(
        <section id="OurFriends">
            
            <div class="title">
                <h2> Nos partenaires </h2>
                <img src={bar} className="bar" alt='multicolor bar'/>
            </div>

            <div class="content">
                <div class="article">
                    <p>
                        Nous sommes pret a tout pour vous offrir le meilleur du  football africain avec:
                    </p>
                </div>
                
                <div class="images">
                    <div class="imgs">
                        <img src={camfoot} alt=''/>
                        <img src={onefoot} alt=''/>
                        <img src={sport} alt=''/>
                    </div>
                </div>
            </div>
        
        </section>
    )
}

export default OurFriends;
