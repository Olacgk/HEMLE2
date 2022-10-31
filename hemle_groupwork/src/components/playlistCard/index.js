import React from "react";
import {AiOutlineClockCircle} from "react-icons/ai";
import {MdOutlineShare} from "react-icons/md";
import { BsDot } from "react-icons/bs";
import './style.css'


const PlaylistCard = ({id, photo, title, date, handleClick, audio, ...props}) => {
    

    return(
        <div className="content">
            <div className={'cardInfo'}>
                <div className={'firstPart'} onClick={props.onClick}>
                  <img alt={'podcsat view'} src={photo} className={'castCover'}/>
                  <div className={'textPart'}>
                      <p className={'title'}>{id}. {title}</p>
                      <div className={'detail'}>
                          <p className={'name'}>Nom Prénom - Youtube </p>
                          <BsDot className={'dot'}/>
                          <div className={'date'}>{date}</div>
                      </div>
                  </div>
                </div>
                <div className={'listAction'}>
                  <AiOutlineClockCircle />
                  <MdOutlineShare />
                </div>
          </div>
        </div>
    )
}


export default PlaylistCard;