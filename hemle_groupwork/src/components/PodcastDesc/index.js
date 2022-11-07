import React from "react";
import './style.css'
import {GiSpeaker} from "react-icons/gi";
import { MdOutlineShare} from "react-icons/md";
import {AiOutlineClockCircle} from "react-icons/ai";
import Modal from "react-modal";
import Fullscreen from "../Fullscreen";
import { FaPause } from "react-icons/fa";

Modal.setAppElement("#root");
const PodcastDesc = ({goToTen, backToTen, isstopped, speed, handleSpeed, nowTime, time, muted, isMuted, id, title, photo, date, next, previous, isplaying, playPause, checkWidth, clickRef, completed}) => {

    return(
        <div className="description">
            <img alt={'Podcast view'} src={photo} className={'cover'}/>
            <div className={'textDesc'}>
                <div className={'tag'}>
                    <h5 className={'tag first'}>CAN</h5>
                    <h5 className={'tag second'}>Records</h5>
                </div>
                <p className={'desctitle'}>{id}.{title}</p>
                <p className={'desc'}>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Blandit tellus in ut elementum Lorem ipsum dolor sit amet, consectetur adipiscing elit. Blandit tellus </p>
                <div className="formobileresponsive">
                    <div className={'someDetail'}>
                        <p className={'name'}>Charles Mbuya - AF </p>
                        <div className={'dot'}>•</div>
                        <div className={'date'}>{date}</div>
                    </div>
                    <div className={'bouton'}>
                        {isstopped ? <button className={'startplay'} onClick={playPause}>
                            ECOUTER
                            <GiSpeaker size={'1.5rem'}/>
                        </button> : !isplaying ? <button className={'play'} onClick={playPause}>
                            A L'ECOUTE
                            <GiSpeaker size={'1.5rem'}/>
                        </button>
                        : <button className={'play'} onClick={playPause}>
                        PAUSE
                        <FaPause size={'1rem'}/>
                        </button>}
                        <div className={'action'}>
                            <Fullscreen className={"descFull"} goToTen={goToTen} backToTen={backToTen} speed={speed} handleSpeed={handleSpeed} nowTime={nowTime} time={time} isMuted={isMuted} muted={muted} completed={completed} checkWidth={checkWidth} clickRef={clickRef} isplaying={isplaying} playPause={playPause} photo={photo} title={title} next={next} previous={previous} id={id}/>
                            <AiOutlineClockCircle className="action2"/>
                            <MdOutlineShare className="action3"/>
                        </div>
                    </div>
                </div>
                
            </div>
        </div>
    )
}

export default PodcastDesc;