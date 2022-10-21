import players from "../../data/playersList"
import Section from "../../components/players_position"
import "./style.css"

let tab = players.map( (player, i) => {
    player['id'] = i
    return player
} )

const positions = ['gardiens', 'defensseurs', 'milieux', 'attaquans']

const PlayerList = () => (
    positions.map( (pos, i) => {
        let positionPlayers = tab.filter(
            player => player.position === pos
        )
        return <Section key={i} position={pos} players={positionPlayers}/>
    } )
)

export default PlayerList