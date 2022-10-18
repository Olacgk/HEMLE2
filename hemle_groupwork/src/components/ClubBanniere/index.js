import React from "react";
import './style.css'

const ClubBanniere = ({logo, name, background}) => {

    // let elem = document.getElementsByClassName("clubbanniere")[0]
    // elem.style.background = 
    // document.getElementsByClassName("clubbanniere")[0].style.background= background

    return (
        <div className="clubbanniere" style={{backgroundImage: `url(${background})`}}>
            <div className="darkbanniere">
                <img className="clublogo" alt="club logo" src={logo}/>
                <h1 className="clubnameban">{name}</h1>
                <div className="barre"></div>
            </div>
        </div>
    )
}

export default ClubBanniere;