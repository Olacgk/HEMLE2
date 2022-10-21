/**
    variable section contains all players at a stade position
*/

import Card from "../player_card"
import "./style.css"

const Section = (section) => (
    
    <section className="players_position">
        
        <h2> {section.position} </h2>
        
        <div className="asides">
            { section.players.map( (player, i) =>
                <Card key={i} player={player} />
            ) }
        </div>
    
    </section>

)

export default Section