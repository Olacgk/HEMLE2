import React from "react";

import "./style.css"
import {titleTop} from "../About/variables.js"

const TitleTop = () => {
    return (
        <section id='titleTop'>
            <h1> {titleTop.title} </h1>
            <p> {titleTop.subTitle} </p>
        </section>
    )
}

export default TitleTop;