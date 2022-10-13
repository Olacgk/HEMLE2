import React from 'react';
import cover from '../../assets/podcastCover.png'
import {FiRadio} from "react-icons/fi";
import {MdOpenInFull, MdOutlineForward10, MdOutlineReplay10, MdPlayArrow} from "react-icons/md";
import {IoMdCloseCircle} from "react-icons/io";
import ProgressBar from "../ProgressBar"



const Playerbottom = ({photo, title, handleClick, ...props}) => {

    //const [open, setOpen] = useState(true)

  return(
      <div className={'playerbottom'}>
          <ProgressBar completed={25} bgcolor={'#FF462D'}/>
          <div className={"playerbottomContent"}>
              <div className={'aboutPodcast'}>
                  <img alt={'view'} src={cover} className={'coverPlayerbottom'}/>
                  <FiRadio size={"1.25rem"} className={"playerbottomRadiobutton"}/>
                  <div className={'podcastdetail'}>
                      <div className={'playerbottomPodcastitle'}>Methode Agile</div>
                      <div>Youtube/ Nom Prénom</div>
                  </div>
              </div>
              <div className={'buttonPlayerbottom'}>
                  <MdOutlineReplay10 size={'1.25rem'} className={'buttonbottom'}/>
                  <MdPlayArrow size={'1.25rem'} className={'buttonbottom'}/>
                  <MdOutlineForward10 size={'1.25rem'} className={'buttonbottom'}/>
                  <MdOpenInFull size={'1.25rem'}  className={'buttonbottom'}/>
                  <IoMdCloseCircle size={'1.25rem'} onClick={handleClick} className={'buttonbottom'}/>
              </div>
          </div>

      </div>
  )
}

export default Playerbottom;