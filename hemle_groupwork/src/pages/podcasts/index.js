import React, {useState, useRef, useEffect} from "react";
import Header from "../../components/Header";
import Playerbottom from "../../components/PlayerBottom";
import Playlist from "../../components/Playlist";
import PodcastDesc from "../../components/PodcastDesc";
import { playlistContent } from "../../data/playlistContent";
import './style.css'

const Podcasts = () => {

  const [open, setOpen] = useState(false)
  const [isPlaying, setIsPlaying] = useState(false)
  const [currentSong, setCurrentSong] = useState(playlistContent[0]);
  const [isMuted, setIsMuted] = useState(false)
  // const [speed, setSpeed] = useState(1)

  const muted = () =>{
    setIsMuted(!isMuted)
  }

  const handleClick = (id)=>{
    setOpen(true)
    setCurrentSong(playlistContent[id -1])
    setIsPlaying(true)
  }

  const nextPodcast = () =>{
    const index = playlistContent.findIndex(x=>x.title === currentSong.title);

    if (index === playlistContent.length-1)
    {
      setCurrentSong(playlistContent[0])
    }
    else
    {
      setCurrentSong(playlistContent[index + 1])
    }
    audioPlayer.current.currentTime = 0;
  }
  const previousPodcast = () => {
    const index = playlistContent.findIndex(x=>x.title === currentSong.title);
    if (index === 0)
    {
      setCurrentSong(playlistContent[playlistContent.length - 1])
    }
    else
    {
      setCurrentSong(playlistContent[index - 1])
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


  const checkWidth = (e)=>{
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
    setCurrentSong( {...currentSong, "progress":audioPlayer.current.currentTime} );
  }

  const forwardTen = () => {
    audioPlayer.current.currentTime = Number( audioPlayer.current.currentTime + 10);
    setCurrentSong( {...currentSong, "progress":audioPlayer.current.currentTime} );
  }

  const handleSpeed = (e) =>{
    const speed = Number(e.target.value);
    audioPlayer.current.playbackRate = speed;
    setCurrentSong({...currentSong, "value":speed})
  }

  return(
      <div className="global">
        <Header />
        <audio onRateChange={handleSpeed} muted={isMuted} autoPlay src={currentSong.audio} ref={audioPlayer} onTimeUpdate={onPlaying} onEnded={nextPodcast}/> 
        <PodcastDesc speed={currentSong.value} handleSpeed={handleSpeed} isMuted={isMuted} muted={muted} nowTime={currentSong.progress} time={currentSong.length} completed={currentSong.progress} checkWidth={checkWidth} clickRef={clickRef} playPause={togglePlayPause} isplaying={isPlaying} previous={previousPodcast} next={nextPodcast} id={currentSong.id} photo={currentSong.photo} date={currentSong.date} title={currentSong.title} />
        <Playlist handleClick={handleClick}/>
        {open ? <Playerbottom speed={currentSong.value} handleSpeed={handleSpeed} isMuted={isMuted} muted={muted} nowTime={audioPlayer.current.currentTime} time={audioPlayer.current.duration} backToTen={backTen} goToTen={forwardTen} completed={currentSong.progress} checkWidth={checkWidth} clickRef={clickRef} isPlaying={isPlaying} playPause={togglePlayPause} onClick={()=> setOpen(!open)} id={currentSong.id} photo={currentSong.photo} title={currentSong.title} next={nextPodcast} previous={previousPodcast}/> : <></>}
      </div>
  )
}

export default Podcasts;