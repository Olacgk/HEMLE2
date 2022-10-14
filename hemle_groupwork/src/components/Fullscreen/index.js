import React, { useState } from "react";
import './style.css'
import Modal from 'react-modal'
import Header from '../Header'
import {BiArrowBack, BiTime} from 'react-icons/bi'
import {MdShare, MdOpenInFull} from 'react-icons/md'
import podcastCover from "../../assets/podcastCover.png"
import ProgressBar from "../ProgressBar";
import {FaPlay} from 'react-icons/fa';
import {GiSpeaker} from 'react-icons/gi';
import {BsChevronDoubleLeft, BsChevronDoubleRight, BsFullscreenExit} from 'react-icons/bs'


Modal.setAppElement("#root");
const Fullscreen = () =>{

    const [openModal, setOpenModal] = useState(false);

    return(
        <div className="modalScreen">
            <MdOpenInFull onClick={()=>setOpenModal(true)} />
            <Modal className={'fullscreenMod'} isOpen={openModal}>
                <Header />
                <div className="fullscreenBackground"></div>
                <div className="modalContent">
                    <div className="sectionBouton">
                        <BiArrowBack onClick={()=>setOpenModal(false)} size={'2rem'}/>
                        <MdShare size={'2rem'}/>
                    </div>
                    <img src={podcastCover} alt="cover podcast" className="fullscreenCover"/>
                    <p className="fullscreenTitle"> La première liste de Velud, avec 3 nouveaux</p>
                </div>
                <div className="fullscreenPlayer">
                    <div>5:26 / 8:00</div>
                    <ProgressBar className="fullscreenProgress" bgcolor={'#FF462D'} completed={75}/>
                    <div className="fullbuttonPlayer">
                        <div className="fullbutton1">
                            <FaPlay size={'1.25rem'}/>
                            <GiSpeaker size={'1.25rem'}/>
                            <BiTime size={'1.25rem'}/>
                        </div>
                        <div className="fullbutton2">
                            <BsChevronDoubleLeft size={'1.25rem'}/>
                            <p>Précédent</p>
                            <p>Suivant</p>
                            <BsChevronDoubleRight size={'1.25rem'}/>
                            <BsFullscreenExit  onClick={()=>setOpenModal(false)} size={'1.25rem'}/>
                        </div>
                    </div>
                </div>
            </Modal>
        </div>
    )
}

export default Fullscreen;