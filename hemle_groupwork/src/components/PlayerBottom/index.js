import React from 'react';
import {FiRadio} from "react-icons/fi";
import {MdOutlineForward10, MdOutlineReplay10, MdPlayArrow} from "react-icons/md";
import { FaPause } from 'react-icons/fa';
import {IoMdCloseCircle} from "react-icons/io";
import ProgressBar from "../ProgressBar"
import './style.css'
import Fullscreen from '../Fullscreen';



const Playerbottom = ({photo, title, id, playPause, isPlaying, next, previous, completed, clickRef, checkWidth, ...props}) => {


  return(
      <div className={'playerbottom'}>
          <ProgressBar checkWidth={checkWidth} className="progressBarbottom" completed={completed} bgcolor={'#FF462D'} clickRef={clickRef}/>
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
                  <MdOutlineReplay10 size={'2rem'} className={'buttonbottom buttonbottom2'}/>
                  {!isPlaying ? <MdPlayArrow onClick={playPause} size={'2rem'} className={'buttonbottom'}/> : <FaPause onClick={playPause} size={'2rem'} className={'buttonbottom'}/>}
                  <MdOutlineForward10 size={'2rem'} className={'buttonbottom buttonbottom2'}/>
                  {/* <MdOpenInFull onClick={() => <Fullscreen/>} size={'2rem'}/> */}
                  <Fullscreen isplaying={isPlaying} playPause={playPause} photo={photo} title={title} next={next} previous={previous} className={"buttonbottom2"}/>
                  <IoMdCloseCircle size={'2rem'} onClick={props.onClick} className={'buttonbottom'}/>
              </div>
          </div>

      </div>
  )
}

export default Playerbottom;