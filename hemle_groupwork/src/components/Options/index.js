import React from "react";

import {options} from "../About/variables.js"
import "./style.css"

const Options = () => {
    let tab = []
    for (let tmp of options) tab.push(
        <aside>
            <h2> {tmp.title} </h2>
            <p> {tmp.description} </p>
        </aside>
    )
    return(
        <section id="Options">
            {tab}
        </section>
    )
}

export default Options;