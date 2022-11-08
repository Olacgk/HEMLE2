import React, { useState } from 'react'
import './style.css'
import {FaFacebook, FaTwitter, FaInstagram, FaWhatsapp, FaTiktok} from 'react-icons/fa'
import {MdOutlineShare} from 'react-icons/md'

export default function SocialMediaShare() {

    const [open, setOpen] = useState(false)

    const shareClick = ()=>{
        setOpen(!open)
        open ? document.getElementsByClassName('showSocialMedia')[0].style.display = "flex" : document.getElementsByClassName('showSocialMedia')[0].style.display = "none"
    }

  return (
    <div className='socialMediaShare'>
        <div className='showSocialMedia'>
            <p>Partager sur:</p>
            <div className='socialmedia'>
                <FaFacebook/>
                <FaTwitter/>
                <FaInstagram/>
                <FaWhatsapp/>
                <FaTiktok/>
            </div>
        </div>
        <MdOutlineShare className='shareButton' onClick={shareClick}/>
    </div>
  )
}
