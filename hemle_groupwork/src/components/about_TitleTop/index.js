import React from "react";

import "./style.css"

const TitleTop = ({titleTop}) => {
    return (
        <section id='titleTop'>
            <h1> {titleTop.title} </h1>
            <p> {titleTop.subTitle} </p>
        </section>
    )
}

export default TitleTop;