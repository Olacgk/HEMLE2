import React from "react";
import './style.css'

const ClubCard = ({name, blason, division}) =>{
    return(
        <div className="clubContainer">
            {/* <div className="blason"></div> */}
            <img className="blason" src={blason} alt={"cover"} />
            <p className="nom">{name}</p>
            <p className="division">{division}</p>
        </div>
    )
}

export default ClubCard;