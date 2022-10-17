import React, {useState} from "react";
import {playlistContent} from '../../data/playlistContent'
import PlaylistCard from "../playlistCard";
import './style.css';


const podcastsPerPage = 5

const Playlist = ({handleClick}) => {
    
    const [next, setNext] = useState(podcastsPerPage);
    const handleMoreImage = () => {
        setNext(next + podcastsPerPage);
        // let elem = document.getElementsByClassName("boutoncenter")[0]
        // elem.style.display = 'none'
    };


  return(
      <div>
          <div className={'container'}>
              <p className={'playlist'}>Playlist</p>
              {
                playlistContent.slice(0, next)?.map(playlist =>{
                    return(
                        <PlaylistCard  key={playlist.id} onClick={()=>{handleClick(playlist.id)}} date={playlist.date} id={playlist.id} photo={playlist.photo} title={playlist.title} audio={playlist.audio}/>
                    )
                })
              }
              <div className="boutoncenter">
                {
                    next < playlistContent?.length && <button className="playlistShowMore" onClick={()=>handleMoreImage()}>VOIR TOUT</button>
                }
              </div>
          </div>
      </div>
  )
}

export default Playlist;