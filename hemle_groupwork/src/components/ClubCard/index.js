import React from "react";
import { Link } from "react-router-dom";
import './style.css'

const ClubCard = ({name, blason, division, link}) =>{
    return(
        <Link to={link}>
            <div className="clubContainer">
                <img className="blason" src={blason} alt={"cover"} />
                <p className="nom">{name}</p>
                <p className="division">{division}</p>
            </div>
        </Link>
    )
}

export default ClubCard;