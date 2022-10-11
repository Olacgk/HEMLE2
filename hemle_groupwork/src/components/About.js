import React from "react";


import {FaSearch} from "react-icons/fa";
import {MdLanguage} from "react-icons/md";
import {AiOutlineDown} from "react-icons/ai";

import '../styles/nav.css';
import '../styles/about.css';

import logo1 from '../assets/tools/title.png'
import search from '../assets/tools/search.png'
import fleche from '../assets/tools/fleche.png'
import world from '../assets/tools/world.png'
import bar from '../assets/tools/bar.png'

import vid from "../assets/videos/faune.mp4"
import poster from "../assets/videos/faune.mp4"

import africa from '../assets/home/africa.png'
import man from '../assets/home/man.png'
import lamp from '../assets/home/lamp.png'
import cam from '../assets/home/camera.png'

import f_afric1 from "../assets/aside/Foot_Afrique1.png"
import f_afric2 from "../assets/aside/Foot_Afrique2.png"
import f_afric3 from "../assets/aside/Foot_Afrique3.png"
import f_afric4 from "../assets/aside/Foot_Afrique4.png"
import f_afric5 from "../assets/aside/Foot_Afrique5.png"
import f_afric6 from "../assets/aside/Foot_Afrique6.png"
import f_afric7 from "../assets/aside/Foot_Afrique7.png"
import f_afric8 from "../assets/aside/Foot_Afrique8.png"
import f_afric9 from "../assets/aside/Foot_Afrique9.png"
import f_afric10 from "../assets/aside/Foot_Afrique10.png"
import f_afric11 from "../assets/aside/Foot_Afrique11.png"
import f_afric12 from "../assets/aside/Foot_Afrique12.png"
import f_afric14 from "../assets/aside/Foot_Afrique14.png"
import f_afric15 from "../assets/aside/Foot_Afrique15.png"

import ai from "../assets/footer/AI.png"
import slack from "../assets/footer/slack.png"
import trello from "../assets/footer/trello.png"
import google from "../assets/footer/google.png"
import microsoft from "../assets/footer/microsoft A.png"
import gmail from "../assets/footer/Gmail.png"
import jira from "../assets/footer/Jira software.png"
import footerp from "../assets/footer/P logo.png"
import chrome from "../assets/footer/chrome.png"
import azure from "../assets/footer/Azure.png"

function About()
{
  return (
    <React.Fragment>
        <Header/>
        <p id="title"> <img src="./assets/tools/home.png" alt="home icon"/> Podcast </p>
        
        <div id="body">
            <header>
                <video src={vid} id="vid" loop muted poster={poster}/>
            </header>
            <Sec1/> <section id="sec2"> </section> <Sec3/> <Sec4/>
        </div>
        <Footer/>
    </React.Fragment>
  );
}

function Nav()
{
    return (
        <nav>
            <div id="logodiv">
                <img src={logo1} alt={"logo image"} />
            </div>
            <ul id="menu">
                  <a href="./"> <li> Acceuil </li> </a>
                  <a href=""> <li id="prest"> Prestation <img src={fleche} alt=""/> </li> </a>
                  <a href=""> <li> Nos clients </li> </a>
                  <a href=""> <li> A propos </li> </a>
            </ul>
            <ul id="tools">
                <li> <img id="search" src={search} alt="search image"/> </li>
                <li> <img src={world} alt="world image"/> </li>
                <li> <button> Se connecter </button> </li>
            </ul>
        </nav>
    )
}

const Header = () => {
    //const [open, setOpen] = useState(false);
    return(
        <header>
            <img className={'logo'} alt={'Logo Hemlè'} src={logo1}/>
            <ul className={'items'}>
                <li>ACCUEIL</li>
                <li className={'prestation'}>
                    <p>PRESTATIONS</p>
                    <AiOutlineDown/>
                </li>
                <li>NOS CLIENTS </li>
                <a href={'#'}> <li> A PROPOS </li> </a>
            </ul>
            <div className={'button'}>
                <FaSearch className={'buttonchild'} size='1rem'/>
                <MdLanguage className={'buttonchild'} size='1.5rem'/>
                <button className={'buttonchild1'}>SE CONNECTER</button>
            </div>
        </header>
    )
}

function Sec1()
{
    return (
        <section id="sec1">

            <article id="art_africa">
                <h1> Hemle </h1>
                <h2> Since 1987 </h2>
                <p>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Dignissim blandit arcu nisl
                    erat sit urna. Eget et ut quam malesuada congue. Justo venenatis ac nisi adipiscing
                    blandit viverra tincidunt est luctus. Et quam tincidunt venenatis, commodo proin et.
                    Tortor, viverra libero non ac dui. Velit praesent turpis quam nam magna.
                </p>
            </article>

            <img id="africa" src={africa} alt=""/>
                
            <img src={man} id="man" alt=""/>
                
            <article id="art_man">
                <h1> Nos objectifs </h1>
                <img src={bar} alt="bar image"/>
                <p>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Dignissim blandit arcu nisl
                    erat sit urna. Eget et ut quam malesuada congue. Justo venenatis ac nisi adipiscing
                    blandit viverra tincidunt est luctus. Et quam tincidunt venenatis, commodo proin et.
                    Tortor, <span>dignissim blandit</span> dui. Velit praesent turpis quam nam magna.
                </p> <p>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Dignissim blandit arcu nisl
                    erat sit urna. Eget et ut quam malesuada congue. Justo venenatis ac nisi adipiscing
                    blandit viverra tincidunt est luctus. Et quam tincidunt venenatis, commodo proin et.
                    Tortor, <span>dignissim blandit</span> dui. Velit praesent turpis quam nam magna.
                </p>
            </article>
        
        </section>
    )
}

function Sec3()
{
    return (
        <section id="sec3">

            <img src={lamp} id="lamp" alt=""/>
            
            <img src={cam} id="cam" alt=""/>

            <div id="objectifs">
                <article>
                    <h1> Nos objectifs </h1>
                    <h2> Tout pour le football africain </h2>
                    <p>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. <span>Dignissim blandit</span>
                        arcu nisl erat sit urna. Eget et ut quam malesuada congue. Justo venenatis ac nisi
                        adipiscing blandit viverra tincidunt est luctus. Et quam tincidunt venenatis, commodo
                        proin et. Tortor, viverra libero non ac dui. Velit praesent turpis quam nam magna.
                    </p>
                </article>
                <div class="asides">
                    <div class="asid"> <img src={f_afric14} alt=""/> </div>
                    <div class="asid"> <img src={f_afric15} alt=""/> </div>
                </div>
            </div>

        </section>
    )
}

function Sec4() {

    let rest = []
    for (let tmp of [ f_afric1, f_afric2, f_afric3, f_afric4, f_afric5, f_afric6,
        f_afric7, f_afric8, f_afric9, f_afric10, f_afric11, f_afric12 ] )
        rest.push(
            <div class="asid"> <img src={tmp} alt=""/>
                <h2> Nom & Prenom </h2>
                <p> FONCTION (Ex:CEO) </p>
            </div>
        )
    
    return (
        <section id="sec4">
            
            <div id="sec_info">
                <h1> Notre equipe de direction </h1>
                <div class="img"> <img src={bar} alt=""/> </div>
                <p>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Dignissim blandit arcu nisl
                    erat sit urna. Eget et ut quam malesuada congue. 
                </p>
            </div>
            
            <div id="allasid">
                {rest}
            </div>
            
            <div id="sec_info">
                <h1> Nos partenaires </h1>
                <div class="img"> <img src="./assets/tools/bar.png" alt=""/> </div>
                <p>
                    Nous sommes prêts à tout pour vous offir le meilleur du football africain avec :
                </p>
            </div>

        </section>
    )
}

function Footer()
{
    return (
        <footer>
            <img src={ai} alt=''/>
            <img src={slack} alt=''/>
            <img src={trello} alt=''/>
            <img src={google} alt=''/>
            <img src={microsoft} alt=''/>
            <img src={gmail} alt=''/>
            <img src={jira} alt=''/>
            <img src={footerp} alt=''/>
            <img src={chrome} alt=''/>
            <img src={azure} alt=''/>
        </footer>
    )
}

export default About;
