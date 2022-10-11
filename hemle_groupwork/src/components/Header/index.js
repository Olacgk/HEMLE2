import React from "react";

import { Link } from "react-router-dom"
import {FaSearch} from "react-icons/fa";
import {MdLanguage} from "react-icons/md";
import {AiOutlineDown} from "react-icons/ai";
import logo1 from "../../assets/Logo_Hemlè-V2-39.svg";
import "./style.css"

const Header = () => {
    //const [open, setOpen] = useState(false);
    return(
        <header>
            <Link to={'/'}>
                <img className={'logo'} alt={'Logo Hemlè'} src={logo1}/>
            </Link>
            <ul className={'items'}>
                <li>ACCUEIL</li>
                <li className={'prestation'}>
                    <p>PRESTATIONS</p>
                    <AiOutlineDown/>
                </li>
                <li>NOS CLIENTS </li>
                <li>
                    <Link className={'prestation'} to="/about">A PROPOS</Link>
                </li>
            </ul>
            <div className={'button'}>
                <FaSearch className={'buttonchild'} size='1.5rem'/>
                <MdLanguage className={'buttonchild'} size='2rem'/>
                <button className={'buttonchild1'}>SE CONNECTER</button>
            </div>
        </header>
    )
}

export default Header;