import React from "react";
import {FaSearch} from "react-icons/fa";
import {MdLanguage} from "react-icons/md";
import {AiOutlineDown} from "react-icons/ai";
import logo1 from "../assets/Logo_Hemlè-V2-39.svg";
import "./Header.css"

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
                <a href={'#'}> <li className={'prestation'}>A PROPOS</li> </a>
            </ul>
            <div className={'button'}>
                <FaSearch className={'buttonchild'} size='1rem'/>
                <MdLanguage className={'buttonchild'} size='1.5rem'/>
                <button className={'buttonchild1'}>SE CONNECTER</button>
            </div>
        </header>
    )
}

export default Header;