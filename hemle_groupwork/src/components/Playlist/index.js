import React, {useState} from "react";
import {playlistContent} from '../../data/playlistContent'
import PlaylistCard from "../playlistCard";
import './style.css';
import Playerbottom from "../PlayerBottom";

const Playlist = () => {

    const [open, setOpen] = useState(false)
    const [active, setActive] = useState()
    
    const handleClick = (id)=>{
        setOpen(true)
        setActive(playlistContent[id -1])
    }

  return(
      <div>
          <div className={'container'}>
              <p className={'playlist'}>Playlist</p>
              {
                  playlistContent.filter(playlist => playlist.id < 6).map( playlist => {
                      return (
                          <PlaylistCard key={playlist.id} onClick={()=>{handleClick(playlist.id)}} date={playlist.date} id={playlist.id} photo={playlist.photo} title={playlist.title}/>
                      )
                  } )
              }
              <div className="boutoncenter">
                <button className="playlistShowMore">VOIR TOUT</button>
              </div>
          </div>
        {open ? <Playerbottom onClick={()=> setOpen(!open)} photo={active.photo} title={active.title}/> : <></>}
      </div>
  )
}

export default Playlist;