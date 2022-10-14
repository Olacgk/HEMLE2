import React from 'react';
import {FiRadio} from "react-icons/fi";
import {MdOpenInFull, MdOutlineForward10, MdOutlineReplay10, MdPlayArrow} from "react-icons/md";
import {IoMdCloseCircle} from "react-icons/io";
import ProgressBar from "../ProgressBar"
import './style.css'



const Playerbottom = ({photo, title, ...props}) => {


  return(
      <div className={'playerbottom'}>
          <ProgressBar className="progressBarbottom" completed={25} bgcolor={'#FF462D'}/>
          <div className={"playerbottomContent"}>
              <div className={'aboutPodcast'}>
                  <img alt={'view'} src={photo} className={'coverPlayerbottom'}/>
                  <FiRadio size={"2rem"} className={"playerbottomRadiobutton buttonbottom2"}/>
                  <div className={'podcastdetail'}>
                      <div className={'playerbottomPodcastitle buttonbottom2'}>{title}</div>
                      <div className='buttonbottom2'>Youtube/ Nom Prénom</div>
                  </div>
              </div>
              <div className={'buttonPlayerbottom'}>
                  <MdOutlineReplay10 size={'2rem'} className={'buttonbottom buttonbottom2'}/>
                  <MdPlayArrow size={'2rem'} className={'buttonbottom'}/>
                  <MdOutlineForward10 size={'2rem'} className={'buttonbottom buttonbottom2'}/>
                  <MdOpenInFull size={'2rem'}  className={'buttonbottom buttonbottom2'}/>
                  <IoMdCloseCircle size={'2rem'} onClick={props.onClick} className={'buttonbottom'}/>
              </div>
          </div>

      </div>
  )
}

export default Playerbottom;