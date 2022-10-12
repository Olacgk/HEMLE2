import React from "react";
import { allPlaylistContent } from "../../data/allPlaylistContent";
import './style.css'

const AllPlaylist = () => {

    const Card = ({playlistCover}) =>{
        return(
            <div className="card">
                <img src={playlistCover} alt={"playlist cover"} className="playlistCover"/>
            </div>
        )
    }

    return(
        <div className="allplaylistContainer">
            <div>
                <p>Toutes nos playlists</p>
                <div></div>
            </div>
            <div className="">
                {
                    allPlaylistContent.map(playlist => {
                        return(
                            <Card playlistCover={playlist.cover}/>
                        )
                    })
                }
            </div>
            <div className="boutonCenter">
                <button className="allplaylistShowMore">AFFICHER TOUT</button>
            </div>
        </div>
    )
}

export default AllPlaylist;