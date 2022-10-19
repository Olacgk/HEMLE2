import React from "react";
import BuildTitle from "../Functions";

import Pc from "./Pc.js"
import Phone from "./Phone.js"

import "./style.css"

import camfoot from "../../../assets/footer/camfoot.png"
import onefoot from "../../../assets/footer/onefoot.png"
import sport from "../../../assets/footer/sport.png"

const OurFriends = ({ourFriends}) => {

    let tab = [camfoot, onefoot, sport]

    return (
        <section id="OurFriends">

            { BuildTitle("Nos partenaires") }
            
            <div class="content">
                <div class="article">
                    <p>
                        Nous sommes pret a tout pour vous offrir le meilleur du  football africain avec:
                    </p>
                </div>
                
                <div class="images">
                    { (1) ? <Pc tab={tab}/> : <Phone tab={tab}/> }
                </div>
            </div>
        
        </section>
    )
}

export default OurFriends;
