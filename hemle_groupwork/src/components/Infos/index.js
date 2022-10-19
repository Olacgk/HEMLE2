import PlayerInfos from "./PlayerInfos"
import Description from "./Description"

import data from "./data"
import "./style.css"

// let index = 0;
// const player = data.players[0]

const page = () => {

    return (
        <div id="biographie">
            <PlayerInfos player={data}/>
            <Description desc={data.description}/>
        </div>
    )
}

export default page;