import React from "react";
import {AiOutlineClockCircle} from "react-icons/ai";
import {MdOutlineShare} from "react-icons/md";

const PlaylistCard = ({id, photo, title, date, handleClick, ...props}) => {
    return(
        <div className="content">
            <div className={'cardInfo'}>
              <div className={'firstPart'}>
                  <img alt={'podcsat view'} src={photo} className={'cover'}/>
                  <div className={'textPart'}>
                      <p className={'title'}>{id} {title}</p>
                      <div className={'detail'}>
                          <p className={'name'}>Nom Prénom - Youtube </p>
                          <div className={'dot'}>•</div>
                          <div className={'date'}>{date}</div>
                      </div>
                  </div>
              </div>
              <div className={'flex space-x-3'}>
                  <AiOutlineClockCircle className={'fill-white h-[24px] w-[24px]'}/>
                  <MdOutlineShare className={'fill-white h-[24px] w-[24px]'}/>
              </div>
          </div>
        </div>
    )
}


export default PlaylistCard;