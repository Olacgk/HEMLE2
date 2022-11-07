import React, { useState } from "react";
import './style.css'
import Modal from 'react-modal'
import {BiArrowBack, BiShareAlt, BiTime, BiPlay, BiPause} from 'react-icons/bi'
import ProgressBar from "../ProgressBar";
import {BsChevronDoubleLeft, BsChevronDoubleRight, BsFullscreenExit, BsArrowsAngleExpand} from 'react-icons/bs'
import {GiSpeaker, GiSpeakerOff} from 'react-icons/gi'
import {MdOutlineReplay10, MdOutlineForward10} from 'react-icons/md'


Modal.setAppElement("#root");
const Fullscreen = ({backToTen, goToTen, speed, id, handleSpeed, muted, isMuted, title, photo, next, previous, isplaying, playPause, clickRef, checkWidth, completed, time=0, nowTime=0, ...props}) =>{

    const [openModal, setOpenModal] = useState(false);

    const calculateTime = (secs) => {
        const minutes = Math.floor(secs / 60);
        const returnedMinutes = minutes < 10 ? `0${minutes}` : `${minutes}`;
        const seconds = Math.floor(secs % 60);
        const returnedSeconds = seconds < 10 ? `0${seconds}` : `${seconds}`;
        return `${returnedMinutes}:${returnedSeconds}`;
      }
    
    //   const OVERLAY_STYLE ={
    //     zIndex: "1000",
    //     overflowY: "auto"
    //   }
    return(
        <div className={props.className}>
            <BsArrowsAngleExpand onClick={()=>setOpenModal(true)} size={"1.5rem"}/>
            <Modal className={'fullscreenMod'} isOpen={openModal}>
                {/* <Header /> */}
                <div className="fullbackground">
                    <div className="floufullbackground">
                        <div className="modalContent">
                            <div className="sectionBouton">
                                <BiArrowBack onClick={()=>setOpenModal(false)} size={'2rem'}/>
                                <BiShareAlt size={'2rem'}/>
                            </div>
                            <img src={photo} alt="cover podcast" className="fullscreenCover"/>
                            <p className="fullscreenTitle">{id}. {title}</p>
                        </div>
                        <div className="fullscreenPlayer">
                            <div className="responsebutton">
                                <MdOutlineReplay10 onClick={backToTen} size={'2rem'} className={'buttonbottom'}/>
                                {!isplaying ? <BiPlay onClick={playPause} size={'2.5rem'}/> : <BiPause onClick={playPause} size={'2.5rem'}/>}
                                <MdOutlineForward10 onClick={goToTen} size={'2rem'} className={'buttonbottom'}/>
                            </div>
                            <div className="fullscreenProgress">{calculateTime(nowTime)}/{calculateTime(time)}</div>
                            <ProgressBar checkWidth={checkWidth} completed={completed} clickRef={clickRef}/>
                            <div className="fullbuttonPlayer">
                                <div className="fullbutton1">
                                    {!isplaying ? <BiPlay onClick={playPause} size={'2.5rem'} className={"responseplay"}/> : <BiPause className={"responseplay"} onClick={playPause} size={'2.5rem'}/>}
                                    {!isMuted ? <GiSpeaker size={'2rem'} onClick={muted}/> : <GiSpeakerOff size={'2rem'} onClick={muted}/>}
                                    <BiTime size={'1.5rem'}/>
                                    <p onClick={()=>{handleSpeed(speed)}}>{speed+"x"}</p>
                                </div>
                                <div className="fullbutton2">
                                    <div className="previous" onClick={previous}>
                                        <BsChevronDoubleLeft size={'1.25em'}/>
                                        <p>Précédent</p>
                                    </div>
                                    <div className="next" onClick={next}>
                                        <p>Suivant</p>
                                        <BsChevronDoubleRight size={'1.25em'}/>
                                    </div>
                                    <BsFullscreenExit className="exit toHide"  onClick={()=>setOpenModal(false)} size={'1.25rem'}/>
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