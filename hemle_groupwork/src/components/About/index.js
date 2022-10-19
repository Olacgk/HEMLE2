import React from "react";
import Header from "../Header";

import TitleTop from "./TitleTop";
import WhoWeAre from "./WhoWeAre";
import Options from "./Options";
import OurGoals from "./OurGoals";
// import OurTeams from "./OurTeams";
import OurFriends from "./OurFriends";

import data from "./data"
import "./style.css"

const About = () => (
    <React.Fragment>
        <Header/>
        <TitleTop titleTop={data.titleTop} />
        <WhoWeAre whoWeAre={data.whoWeAre} />
        <Options options={data.options} />
        <OurGoals ourGoals={data.ourGoals} />
        {/* <OurTeams ourTeams={data.ourTeams} /> */}
        <OurFriends ourFriends={data.ourFriends} />
    </React.Fragment>
)

export default About;
