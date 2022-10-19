/*
    parameter player is an object, which contain image, number and others informations about player
*/

import React from "react";
import "./style.css"

let tmpButton = "Voir fiche du joueur"

const Card = ({player}) => 

    <div className="aside a_player_card">
        
        <a href={"/infos/"/*+player.number*/} alt="just a link">
            <div className="imgContainer">
            
                <div className="image">
                    <img src={player.img} alt=""/>
                    
                    <div className="number">
                        <p> {player.number} </p>
                    </div>
                </div>
            
                <div className="informations">
                    <h3>
                        <span className="shortName"> {player.shortName} </span>
                    </h3>
                    <div className="nameBottom">
                        <p className="job"> {player.job} </p>
                        <p className="fullName"> {player.fullName} </p>
                    </div>
                </div>
            
            </div>
        </a>

        <a href="/otherpage" alt="just a link">
            <button> {tmpButton} </button>
        </a>
    
    </div>

export default Card