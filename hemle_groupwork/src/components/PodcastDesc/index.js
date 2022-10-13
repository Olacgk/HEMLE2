import React from "react";
import './style.css'
import {GiSpeaker} from "react-icons/gi";
import { MdOutlineShare} from "react-icons/md";
import {AiOutlineClockCircle} from "react-icons/ai";
import cover from '../../assets/podcastCover.png';
import Modal from "react-modal";
import Fullscreen from "../Fullscreen";

Modal.setAppElement("#root");
const PodcastDesc = () => {
    return(
        <div className="description">
            <img alt={'Podcast view'} src={cover} className={'cover'}/>
            <div className={'textDesc'}>
                <div className={'tag'}>
                    <h5 className={'tag first'}>CAN</h5>
                    <h5 className={'tag second'}>Records</h5>
                </div>
                <p className={'title'}>1.Comores : un gardien de L1, un titi du PSG, 4 minots de l’OM</p>
                <p className={'desc'}>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Blandit tellus in ut elementum Lorem ipsum dolor sit amet, consectetur adipiscing elit. Blandit tellus </p>
                <div className={'someDetail'}>
                    <p className={'name'}>Charles Mbuya - AF </p>
                    <div className={'dot'}>•</div>
                    <div className={'date'}>10 Mai 2022</div>
                </div>
                <div className={'bouton'}>
                    <button className={'play'}>
                        A L'ECOUTE
                        <GiSpeaker size={'1rem'}/>
                    </button>
                    <div className={'action'}>
                        <Fullscreen/>
                        <AiOutlineClockCircle className="action2"/>
                        <MdOutlineShare className="action3"/>
                    </div>

                </div>
            </div>
        </div>
    )
}

export default PodcastDesc;