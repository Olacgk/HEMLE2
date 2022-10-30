import React, {useState, useRef, useEffect} from "react";
import Header from "../../components/Header";
import Playerbottom from "../../components/PlayerBottom";
import Playlist from "../../components/Playlist";
import PodcastDesc from "../../components/PodcastDesc";
import { playlistContent } from "../../data/playlistContent";
import './style.css'

const Podcasts = () => {

  const [open, setOpen] = useState(false)
  const [active, setActive] = useState(playlistContent[0])
  const [isPlaying, setIsPlaying] = useState(false)
  const [currentSong, setCurrentSong] = useState(playlistContent[0]);


  const handleClick = (id)=>{
    setOpen(true)
    setActive(playlistContent[id -1])
    // togglePlayPause()
    setIsPlaying(true)
  }

  const nextPodcast = () =>{
    // setActive(playlistContent[active.id] )
    const index = playlistContent.findIndex(x=>x.title === active.title);

    if (index === playlistContent.length-1)
    {
      setActive(playlistContent[0])
    }
    else
    {
      setActive(playlistContent[index + 1])
    }
    audioPlayer.current.currentTime = 0;
  }
  const previousPodcast = () => {
    // if (active.id > 1){
    //   setActive(playlistContent[active.id -2] )
    // }
    const index = playlistContent.findIndex(x=>x.title === active.title);
    if (index === 0)
    {
      setActive(playlistContent[playlistContent.length - 1])
    }
    else
    {
      setActive(playlistContent[index - 1])
    }
    audioPlayer.current.currentTime = 0;
  }

  const audioPlayer = useRef();
  
  useEffect(() => {
    if (isPlaying) {
      audioPlayer.current.play();
    }
    else {
      audioPlayer.current.pause();
    }
  }, [isPlaying])

  const togglePlayPause = () => {
    setIsPlaying(!isPlaying);
    setOpen(true)
  }

  const clickRef = useRef()


  const checkWidth = (e)=>
  {
    let width = clickRef.current.clientWidth;
    const offset = e.nativeEvent.offsetX;

    const divprogress = offset / width * 100;
    audioPlayer.current.currentTime = divprogress / 100 * audioPlayer.current.duration;
    setCurrentSong({ ...currentSong, "progress": audioPlayer.current.currentTime})

  }
  const onPlaying = () => {
    const duration = audioPlayer.current.duration;
    const ct = audioPlayer.current.currentTime;

    setCurrentSong({ ...currentSong, "progress": ct / duration * 100, "length": duration })

  }

  const backTen = () => {
    audioPlayer.current.currentTime = Number( audioPlayer.current.currentTime - 10);
    setCurrentSong( audioPlayer.current.currentTime );
  }

  const forwardTen = () => {
    audioPlayer.current.currentTime = Number( audioPlayer.current.currentTime + 10);
    setCurrentSong( audioPlayer.current.currentTime );
  }


  

  return(
      <div className="global">
        <Header />
        <audio autoPlay src={active.audio} ref={audioPlayer} onTimeUpdate={onPlaying} onEnded={nextPodcast}/> 
        <PodcastDesc completed={currentSong.progress} checkWidth={checkWidth} clickRef={clickRef} playPause={togglePlayPause} isplaying={isPlaying} previous={previousPodcast} next={nextPodcast} id={active.id} photo={active.photo} date={active.date} title={active.title} />
        <Playlist handleClick={handleClick}/>
        {open ? <Playerbottom nowTime={audioPlayer.current.currentTime} time={audioPlayer.current.duration} backToTen={backTen} goToTen={forwardTen} completed={currentSong.progress} checkWidth={checkWidth} clickRef={clickRef} isPlaying={isPlaying} playPause={togglePlayPause} onClick={()=> setOpen(!open)} id={active.id} photo={active.photo} title={active.title} next={nextPodcast} previous={previousPodcast}/> : <></>}
      </div>
  )
}

export default Podcasts;