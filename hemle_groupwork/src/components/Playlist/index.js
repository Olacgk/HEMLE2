import React, {useState} from "react";
import {playlistContent} from '../../data/playlistContent'
import PlaylistCard from "../playlistCard";
import './style.css'

const Playlist = () => {

    const [open, setOpen] = useState(false)
    const handleClick = () => {
        setOpen(!open)
    }

  return(
      <div>
          <div className={'container'}>
              <p className={'playlist'}>Playlist</p>
              {
                  playlistContent.map( playlist => {
                      return (
                          <PlaylistCard key={playlist.id} handleClick={handleClick} date={playlist.date} id={playlist.id} photo={playlist.photo} title={playlist.title}/>
                      )
                  } )
              }
          </div>
          {/* {
              open? <Playerbottom handleClick={handleClick}/> : <></>
          } */}

      </div>
  )
}

export default Playlist;