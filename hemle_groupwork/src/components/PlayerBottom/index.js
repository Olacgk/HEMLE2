import React from 'react';
import {FiRadio} from "react-icons/fi";
import {MdOutlineForward10, MdOutlineReplay10, MdPlayArrow} from "react-icons/md";
import { FaPause } from 'react-icons/fa';
import {IoMdCloseCircle} from "react-icons/io";
import ProgressBar from "../ProgressBar"
import './style.css'
import Fullscreen from '../Fullscreen';
// import AudioPlayer from 'react-h5-audio-player';



const Playerbottom = ({speed, handleSpeed, muted, isMuted, time, nowTime, photo, title, id, playPause, isPlaying, next, previous, completed, clickRef, checkWidth, backToTen, goToTen, ...props}) => {


  return(
      <div className={'playerbottom'}>
          <ProgressBar checkWidth={checkWidth} className="progressBarbottom" completed={completed} clickRef={clickRef}/>
          <div className={"playerbottomContent"}>
              <div className={'aboutPodcast'}>
                  <img alt={'view'} src={photo} className={'coverPlayerbottom'}/>
                  <FiRadio size={"2rem"} className={"playerbottomRadiobutton buttonbottom2"}/>
                  <div className={'podcastdetail'}>
                      <div className={'playerbottomPodcastitle buttonbottom2'}>{id}. {title}</div>
                      <div className='buttonbottom2'>Youtube/ Nom Prénom</div>
                  </div>
              </div>
              <div className={'buttonPlayerbottom'}>
                  <MdOutlineReplay10 onClick={backToTen} size={'2rem'} className={'buttonbottom buttonbottom2'}/>
                  {!isPlaying ? <MdPlayArrow onClick={playPause} size={'2rem'} className={'buttonbottom'}/> : <FaPause onClick={playPause} size={'2rem'} className={'buttonbottom'}/>}
                  <MdOutlineForward10 onClick={goToTen} size={'2rem'} className={'buttonbottom buttonbottom2'}/>
                  {/* <MdOpenInFull onClick={() => <Fullscreen/>} size={'2rem'}/> */}
                  <Fullscreen speed={speed} handleSpeed={handleSpeed} isMuted={isMuted} muted={muted} nowTime={nowTime} time={time} completed={completed} checkWidth={checkWidth} clickRef={clickRef} isplaying={isPlaying} playPause={playPause} photo={photo} title={title} next={next} previous={previous} className={"buttonbottom2"}/>
                  <IoMdCloseCircle size={'2rem'} onClick={props.onClick} className={'buttonbottom'}/>
              </div>
          </div>

      </div>
    // <div>
    //     <AudioPlayer className='playerbottom' autoPlay src={active} showSkipControls={true} onClickNext={next} onClickPrevious={previous}/>
    // </div>
  )
}

export default Playerbottom;