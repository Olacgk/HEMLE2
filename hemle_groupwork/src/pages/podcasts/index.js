import React from "react";
import Header from "../../components/Header";
import Playlist from "../../components/Playlist";
import PodcastDesc from "../../components/PodcastDesc"

const Podcasts = () => {
  return(
      <>
        <Header /> 
        <PodcastDesc />
        <Playlist />
      </>
  )
}

export default Podcasts;