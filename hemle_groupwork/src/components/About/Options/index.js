import React from "react";

import "./style.css"

const Options = ({options}) => {
    let tab = []
    for (let tmp of options) tab.push(
        <aside className="options-aside">
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