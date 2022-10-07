import React, {useState} from "react";
import {FaSearch} from "react-icons/fa";
import {MdClose, MdLanguage, MdMenu} from "react-icons/md";
import {AiOutlineDown} from "react-icons/ai";
import logo1 from "../assets/Logo_Hemlè-V2-39.svg";
import "./Header.css"

const Header = () => {
    const [open, setOpen] = useState(false);
    return(
        <header>
            <div className={'logo'}>
                <img alt={'Logo Hemlè'} src={logo1}/>
                {/*<div onClick={() =>(setOpen(!open))} className={"cursor-pointer md:hidden text-3xl"}>*/}
                {/*    {open ? <MdClose/> : <MdMenu/>}*/}
                {/*</div>*/}
            </div>
            <div className={'items'}>
                <nav>
                    <ul>
                        <li>ACCUEIL</li>
                        <li className={'prestation'}>
                            <p>PRESTATIONS</p>
                            <AiOutlineDown/>
                        </li>
                        <li>NOS CLIENTS </li>
                        <li>A PROPOS</li>
                    </ul>
                </nav>
                <div className={'button'}>
                    <FaSearch className={'buttonchild'} size='1rem'/>
                    <MdLanguage className={'buttonchild'} size='1.5rem'/>
                    <button className={'buttonchild'}>SE CONNECTER</button>
                </div>
            </div>
        </header>
    )
}

export default Header;