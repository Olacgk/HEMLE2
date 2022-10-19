import PlayerInfos from "./PlayerInfos"
import Description from "./Description"

import data from "./data"
import "./style.css"

const page = () =>
    <div id="biographie">
        <PlayerInfos player={data}/>
        <Description desc={data.description}/>
    </div>

export default page