import React, {useState} from "react";
import './style.css'
import clubblason from "../../assets/clubs/canon2yaounde.svg"
import {BsChevronDown, BsChevronRight} from "react-icons/bs"
import {BiAward} from "react-icons/bi"

const ClubDetail = () => {

    const [isOpen, setIsOpen] = useState(false);
    const handleClick = () => {
        setIsOpen(!isOpen)
        let elem = document.getElementsByClassName("developped")[0]
        if(isOpen){
            elem.style.display = "none"
        }else{
            elem.style.display = "grid"
        }
        console.log(elem)
    }

    return(
        <div className="clubdetail">
            <div className="nodevelopp">
                <div className="basicinfo">
                    <img className="blasonclub" alt="club blason" src={clubblason}/>
                    <h1 className="clubname">Canon Sportif de Yaoundé</h1>
                </div>
                <button className="developpbutton" onClick={handleClick}>
                    {!isOpen ?  <BsChevronRight size={"2rem"}/> : <BsChevronDown size={"2rem"}/>}
                </button>
            </div>
            <div className="developped">
                <div>
                    <p>Entraîneur en chef : Birwe Minkreo</p>
                    <p className="between">Stade principal : 	Stade Ahmadou Ahidjo</p>
                    <p>Fondation : 11 novembre 1930</p>
                </div>
                <div>
                    <p>Championnat actuel : Elite one</p>
                    <p className="between">Statut : Professionnel</p>
                    <p>Palmarès   <BiAward className="award"/>    : 25</p>
                </div>
            </div>
        </div>
    )
}

export default ClubDetail;