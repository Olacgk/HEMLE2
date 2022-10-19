import React from "react";
import Header from "../Header";
import TitleTop from "../TitleTop";
import WhoWeAre from "../WhoWeAre";
import Options from "../Options";
import OurGoals from "../OurGoals";
import OurTeams from "../OurTeams";
import OurFriends from "../OurFriends";

function About() {
  return (
    <React.Fragment>
        <Header/>
        <TitleTop/>
        <WhoWeAre/>
        <Options />
        <OurGoals />
        <OurTeams />
        <OurFriends />
    </React.Fragment>
  );
}

export default About;
