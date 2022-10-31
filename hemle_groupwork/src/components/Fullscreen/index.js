import React, { useState } from "react";
import './style.css'
import Modal from 'react-modal'
import Header from '../Header'
import {BiArrowBack, BiTime} from 'react-icons/bi'
import {MdShare, MdOpenInFull} from 'react-icons/md'
import ProgressBar from "../ProgressBar";
import {FaPause, FaPlay} from 'react-icons/fa';
import {BsChevronDoubleLeft, BsChevronDoubleRight, BsFullscreenExit} from 'react-icons/bs'
import {GiSpeaker, GiSpeakerOff} from 'react-icons/gi'


Modal.setAppElement("#root");
const Fullscreen = ({muted, isMuted, title, photo, next, previous, isplaying, playPause, clickRef, checkWidth, completed, time=0, nowTime=0}) =>{

    const [openModal, setOpenModal] = useState(false);
    // const [isMuted, setIsMuted] = useState(false);

    const calculateTime = (secs) => {
        const minutes = Math.floor(secs / 60);
        const returnedMinutes = minutes < 10 ? `0${minutes}` : `${minutes}`;
        const seconds = Math.floor(secs % 60);
        const returnedSeconds = seconds < 10 ? `0${seconds}` : `${seconds}`;
        return `${returnedMinutes}:${returnedSeconds}`;
      }

      console.log(time, nowTime)
    return(
        <div className="modalScreen">
            <MdOpenInFull onClick={()=>setOpenModal(true)} />
            <Modal className={'fullscreenMod'} isOpen={openModal}>
                <Header />
                <div className="fullbackground">
                    <div className="floufullbackground">
                        <div className="modalContent">
                            <div className="sectionBouton">
                                <BiArrowBack onClick={()=>setOpenModal(false)} size={'2rem'}/>
                                <MdShare size={'2rem'}/>
                            </div>
                            <img src={photo} alt="cover podcast" className="fullscreenCover"/>
                            <p className="fullscreenTitle">{title}</p>
                        </div>
                        <div className="fullscreenPlayer">
                            <div className="fullscreenProgress">{calculateTime(nowTime)}/{calculateTime(time)}</div>
                            <ProgressBar checkWidth={checkWidth} completed={completed} clickRef={clickRef}/>
                            <div className="fullbuttonPlayer">
                                <div className="fullbutton1">
                                    {!isplaying ? <FaPlay onClick={playPause} size={'1.5rem'}/> : <FaPause onClick={playPause} size={'1.25rem'}/>}
                                    {!isMuted ? <GiSpeaker size={'2rem'} onClick={muted}/> : <GiSpeakerOff size={'2rem'} onClick={muted}/>}
                                    <BiTime size={'2rem'}/>
                                </div>
                                <div className="fullbutton2">
                                    <div className="previous" onClick={previous}>
                                        <BsChevronDoubleLeft size={'1.25rem'}/>
                                        <p className="toHide">Précédent</p>
                                    </div>
                                    <div className="next" onClick={next}>
                                        <p className="toHide">Suivant</p>
                                        <BsChevronDoubleRight size={'1.25rem'}/>
                                    </div>
                                    <BsFullscreenExit className="exit"  onClick={()=>setOpenModal(false)} size={'1.25rem'}/>
                                </div>
                            </div>
                        </div>
                    </div>
                
                </div>
                
            </Modal>
        </div>
    )
}

export default Fullscreen;