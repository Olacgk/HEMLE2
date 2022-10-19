import React from "react";
import "./style.css"

const section = ({player}) => 

    <section id="infoSection">

        <div className="image">
            <img src={player.picture} alt=""/>
            
            <div className="controls">
                <label className="number">
                    {player.number}
                </label>
            </div>
        </div>

        <div className="informations">
            
            <div className="title">
                <img src={player.team.logo} alt="team Logo"/>
                <h2> { player.team.title } </h2>
            </div>
            
            <div className="infosDiv">
                { player.infos.map( (tmp, i) =>
                    <p key={i}>
                        <span className="label"> {tmp.title} : </span>
                        <span className="value"> {tmp.content} </span>
                    </p>    
                ) }
            </div>
        
        </div>
            
    </section>

export default section