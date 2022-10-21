import PlayerInfos from "../../components/player_profil_presentation"
import Description from "../../components/player_profil_bibliographie"
import {useLocation} from "react-router-dom"

import players from "../../data/playersList"
import {clubLists} from "../../data/clubsLists.js"
import "./style.css"

const Profil = () => {

    const tab = useLocation().pathname.split('/')
    const id = tab[tab.length - 1]
    const player = players[id]
    const team = clubLists.filter( club => club.id === player.club )[0]

    return (
        <div className="player-infoSections">
            <PlayerInfos club={team} player={player}/>
            <Description title={"bibliographie"} description={player.description}/>
        </div>
    )
}

export default Profil;