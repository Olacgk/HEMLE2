import players from "../../data/playersList"
import Section from "../../components/playersPosition"
import "./style.css"

const positions = ['gardiens', 'defenseurs', 'milieux', 'attaquants']

const PlayerList = () => (
    positions.map( (pos, i) => {
        let positionPlayers = players.filter(
            player => player.position === pos
        )
        if (positionPlayers.length > 0)
            return <Section key={i} position={pos} players={positionPlayers}/>
    } )
)

export default PlayerList