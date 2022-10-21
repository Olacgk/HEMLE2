/*
    page which contains all players in a team
    
    parameter player is an object, which contain image,
    number and others informations about a player


*/

import React from "react";
import "./style.css"

let showMoreButton = "Voir fiche du joueur"

const Card = ({player}) => 

    <div className="aside a_player_card">
        
        <a href={"/profil/" + player.id} alt="link to player profil">
            <div className="imgContainer">
            
                <div className="image">
                    <img src={player.picture} alt=""/>

                    <div className="imageGradient"></div>
                    
                    <div className="number imageGradient">
                        <p> {player.number} </p>
                    </div>
                </div>
            
                <div className="informations">
                    <h3>
                        <span className="shortName"> {player.shortname} </span>
                    </h3>
                    <div className="nameBottom">
                        <p className="job"> {player.job} </p>
                        <p className="fullName"> {player.fullname} </p>
                    </div>
                </div>
            
            </div>
            
            <button> {showMoreButton} </button>
        </a>
    
    </div>

export default Card