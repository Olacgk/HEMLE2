import React from "react";
import './style.css'
import {FiRadio} from "react-icons/fi";
import {MdOpenInFull, MdOutlineShare} from "react-icons/md";
import {AiOutlineClockCircle} from "react-icons/ai";
import cover from '../../assets/podcastCover.png';

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
                        <FiRadio/>
                    </button>
                    <div className={'flex space-x-3'}>
                        <MdOpenInFull  className={'h-[24px] w-[24px] cursor-pointer'}/>
                        <AiOutlineClockCircle className={'h-[24px] w-[24px]'}/>
                        <MdOutlineShare className={'h-[24px] w-[24px]'}/>
                    </div>

                </div>
            </div>
        </div>
    )
}

export default PodcastDesc;