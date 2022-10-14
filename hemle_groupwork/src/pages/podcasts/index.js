import React, {useState} from "react";
import Header from "../../components/Header";
import Playerbottom from "../../components/PlayerBottom";
import Playlist from "../../components/Playlist";
import PodcastDesc from "../../components/PodcastDesc";

const Podcasts = ({id, photo, title, date}) => {

  const [open, setOpen] = useState(false)
  const handleClick = ()=>{
    id = this.id
    photo = this.photo
    title = this.title
    date = this.date
  }

  return(
      <>
        <Header /> 
        <PodcastDesc />
        <Playlist handleClick={handleClick}/>
      </>
  )
}

export default Podcasts;