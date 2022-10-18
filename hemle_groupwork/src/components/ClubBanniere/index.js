import React from "react";
import './style.css'
import clublogo from "../../assets/clubs/yaoundelogo.svg"

const ClubBanniere = () => {
    return (
        <div className="clubbanniere">
            <div className="darkbanniere">
                <img className="clublogo" alt="club logo" src={clublogo}/>
                <h1>Canon Sportif de Yaoundé</h1>
                <div className="barre"></div>
            </div>
        </div>
    )
}

export default ClubBanniere;