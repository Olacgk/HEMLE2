import React from "react";
import Header from "../../components/Header";
// import Playerbottom from "../../components/PlayerBottom";
import Playlist from "../../components/Playlist";
import PodcastDesc from "../../components/PodcastDesc";

const Podcasts = () => {
  return(
      <>
        <Header /> 
        <PodcastDesc />
        <Playlist />
        {/* <Playerbottom /> */}
      </>
  )
}

export default Podcasts;