import React from "react";
import './style.css'
import {GiSpeaker} from "react-icons/gi";
import { MdOutlineShare} from "react-icons/md";
import {AiOutlineClockCircle} from "react-icons/ai";
import Modal from "react-modal";
import Fullscreen from "../Fullscreen";

Modal.setAppElement("#root");
const PodcastDesc = ({id, title, photo, date, next, previous}) => {
    return(
        <div className="description">
            <img alt={'Podcast view'} src={photo} className={'cover'}/>
            <div className={'textDesc'}>
                <div className={'tag'}>
                    <h5 className={'tag first'}>CAN</h5>
                    <h5 className={'tag second'}>Records</h5>
                </div>
                <p className={'title'}>{id}.{title}</p>
                <p className={'desc'}>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Blandit tellus in ut elementum Lorem ipsum dolor sit amet, consectetur adipiscing elit. Blandit tellus </p>
                <div className={'someDetail'}>
                    <p className={'name'}>Charles Mbuya - AF </p>
                    <div className={'dot'}>•</div>
                    <div className={'date'}>{date}</div>
                </div>
                <div className={'bouton'}>
                    <button className={'play'}>
                        A L'ECOUTE
                        <GiSpeaker size={'1rem'}/>
                    </button>
                    <div className={'action'}>
                        <Fullscreen photo={photo} title={title} next={next} previous={previous}/>
                        <AiOutlineClockCircle className="action2"/>
                        <MdOutlineShare className="action3"/>
                    </div>

                </div>
            </div>
        </div>
    )
}

export default PodcastDesc;