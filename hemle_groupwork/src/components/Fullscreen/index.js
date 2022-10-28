import React, { useState } from "react";
import './style.css'
import Modal from 'react-modal'
import Header from '../Header'
import {BiArrowBack, BiTime} from 'react-icons/bi'
import {MdShare, MdOpenInFull} from 'react-icons/md'
import ProgressBar from "../ProgressBar";
import {FaPause, FaPlay} from 'react-icons/fa';
import {BsChevronDoubleLeft, BsChevronDoubleRight, BsFullscreenExit} from 'react-icons/bs'


Modal.setAppElement("#root");
const Fullscreen = ({title, photo, next, previous, isplaying, playPause, clickRef, checkWidth, completed, time, nowTime}) =>{

    const [openModal, setOpenModal] = useState(false);

    const calculateTime = (secs) => {
        const minutes = Math.floor(secs / 60);
        const returnedMinutes = minutes < 10 ? `0${minutes}` : `${minutes}`;
        const seconds = Math.floor(secs % 60);
        const returnedSeconds = seconds < 10 ? `0${seconds}` : `${seconds}`;
        return `${returnedMinutes}:${returnedSeconds}`;
      }


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
                            {!isplaying ? <FaPlay onClick={playPause} size={'1.25rem'}/> : <FaPause onClick={playPause} size={'1.25rem'}/>}
                            {/* <GiSpeaker size={'1.25rem'}/> */}
                            <BiTime size={'1.25rem'}/>
                        </div>
                        <div className="fullbutton2">
                            <div className="previous">
                                <BsChevronDoubleLeft onClick={previous} size={'1.25rem'}/>
                                <p>Précédent</p>
                            </div>
                            <div className="next">
                                <p>Suivant</p>
                                <BsChevronDoubleRight onClick={next} size={'1.25rem'}/>
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