import React from "react";
import Header from "../../components/Header";

import TitleTop from "../../components/about_TitleTop";
import WhoWeAre from "../../components/about_WhoWeAre";
import Options from "../../components/about_Options";
import OurGoals from "../../components/about_OurGoals";
import OurTeams from "../../components/about_OurTeams";
import OurFriends from "../../components/about_OurFriends";

import data from "./data"
import "./style.css"

const About = () => (
    <div id="about_page">
        <Header/>
        <TitleTop titleTop={data.titleTop} />
        <WhoWeAre whoWeAre={data.whoWeAre} />
        <Options options={data.options} />
        <OurGoals ourGoals={data.ourGoals} />
        <OurTeams ourTeams={data.ourTeams} />
        <OurFriends ourFriends={data.ourFriends} />
    </div>
)

export default About;
