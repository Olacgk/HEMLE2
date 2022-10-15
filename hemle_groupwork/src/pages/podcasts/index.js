import React, {useState} from "react";
import Header from "../../components/Header";
import Playerbottom from "../../components/PlayerBottom";
import Playlist from "../../components/Playlist";
import PodcastDesc from "../../components/PodcastDesc";
import { playlistContent } from "../../data/playlistContent";

const Podcasts = () => {

  const [open, setOpen] = useState(false)
  const [active, setActive] = useState(playlistContent[0])
  const handleClick = (id)=>{
    setOpen(true)
    setActive(playlistContent[id -1])
  }

  const nextPodcast = () =>{
    setActive(playlistContent[active.id] )
  }
  const previousPodcast = () => {
    if (active.id > 1){
      setActive(playlistContent[active.id -2] )
    }
  }

  return(
      <>
        <Header /> 
        <PodcastDesc previous={previousPodcast} next={nextPodcast} id={active.id} photo={active.photo} date={active.date} title={active.title} />
        <Playlist handleClick={handleClick}/>
        {open ? <Playerbottom onClick={()=> setOpen(!open)} id={active.id} photo={active.photo} title={active.title}/> : <></>}
      </>
  )
}

export default Podcasts;