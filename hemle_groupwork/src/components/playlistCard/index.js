import React from "react";
import {AiOutlineClockCircle} from "react-icons/ai";
import {MdOutlineShare} from "react-icons/md";
import './style.css'


const PlaylistCard = ({id, photo, title, date, handleClick, ...props}) => {


    return(
        <div className="content" onClick={props.onClick}>
            <div className={'cardInfo'}>
              <div className={'firstPart'}>
                  <img alt={'podcsat view'} src={photo} className={'castCover'}/>
                  <div className={'textPart'}>
                      <p className={'title'}>{id}. {title}</p>
                      <div className={'detail'}>
                          <p className={'name'}>Nom Prénom - Youtube </p>
                          <div className={'dot'}>•</div>
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