import React, { useState } from 'react'
import './style.css'
import {FaFacebookF, FaTwitter, FaInstagram, FaWhatsapp, FaTiktok} from 'react-icons/fa'
import {MdOutlineShare} from 'react-icons/md'
// import {FacebookShareButton, WhatsappShareButton, TwitterShareButton} from 'react-share'

export default function SocialMediaShare() {

    const [open, setOpen] = useState(false)
    let lien = encodeURI("https://192.168.1.111:3000")
    console.log(lien)

    const shareClick = ()=>{
        setOpen(!open)
        document.getElementsByClassName('showSocialMedia')[0].style.display= open ? "flex" : "none"
        document.getElementsByClassName('shareButton')[0].style.color = open ? '#FFFF27' : 'white'
    }

  return (
    <div className='socialMediaShare'>
        <div className='showSocialMedia'>
            <p>Partager sur:</p>
            <div className='socialmedia'>
                {/* <FacebookShareButton url='/'>
                    <FaFacebookF/>
                </FacebookShareButton>
                <WhatsappShareButton url='/'>
                    <FaWhatsapp/>
                </WhatsappShareButton> */}
                {/* <TwitterShareButton url='/'>
                    <FaTwitter/>
                </TwitterShareButton> */}
                                
                <FaTiktok/>
                <a href={`https://www.facebook.com/sharer/sharer.php?u=${lien}`} rel="noopener">
                    <FaFacebookF/>
                </a>
                <a href={`https://api.whatsapp.com/send?text=${lien}`} data-action="share/whatsapp/share">
                    <FaWhatsapp/>
                </a>
                <a href={`https://twitter.com/intent/tweet?url=${lien}`}>
                    <FaTwitter/>
                </a>
                <a href={`https://www.instagram.com/sharer/sharer.php?u=${lien}`}>
                    <FaInstagram/>
                </a>
            </div>
        </div>
        <MdOutlineShare className='shareButton' onClick={shareClick}/>
    </div>
  )
}
