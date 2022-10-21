import React from "react";
import "./style.css"

const section = ({club, player}) => {

    const infos = [
        {
            title: 'nom',
            content: player.fullname,
        }, {
            title: 'naissance',
            content: player.birthday,
        }, {
            title: 'nationalite',
            content: player.from,
        }, {
            title: 'mensuration',
            content: player.kilo + "kg pour " + player.tail + "cm",
        }, {
            title: 'position',
            content: player.place,
        }
    ]

    return (
        <section className="player-presentation">

            <div className="player-presentation-imageBox">
                
                <img src={player.picture} alt=""/>
                
                <div className="player-presentation-imageGradient">
                    <label className="player-number"> {player.number} </label>
                </div>
            
            </div>

            
            <div className="player-presentation-infoBox">
                
                <div className="player-presentation-infoTitle">
                    <img src={club.blason} alt="team Logo"/>
                    <h2> {club.nom} </h2>
                </div>
                
                <div className="player-presentation-infoList">
                    { infos.map( (tmp, i) =>
                        <p key={i}>
                            <span className="label"> {tmp.title} : </span>
                            <span className="value"> {tmp.content} </span>
                        </p>    
                    ) }
                </div>
            
            </div>
                
        </section>
    )
}

export default section