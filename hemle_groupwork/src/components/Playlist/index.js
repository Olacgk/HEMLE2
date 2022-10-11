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
          <div className={'md:px-[60px] px-[30px] mt-[40px]'}>
              <p className={'w-full h-[70px] border-b-2 border-[#A0A19F] text-[36px] text-white font-semibold'}>Playlist</p>
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