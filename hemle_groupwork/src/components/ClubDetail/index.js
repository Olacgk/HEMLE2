import React, {useState} from "react";
import './style.css'
import {BsChevronDown, BsChevronRight} from "react-icons/bs"
import {BiAward} from "react-icons/bi"

const ClubDetail = ({blason, name, traineur, stadiumprinc, founded, actualeague, status, palmares}) => {

    const [isOpen, setIsOpen] = useState(false);
    const handleClick = () => {
        setIsOpen(!isOpen)
        let elem = document.getElementsByClassName("developped")[0]
        if(isOpen){
            elem.style.display = "none"
        }else{
            elem.style.display = "grid"
        }
    }

    return(
        <div className="clubdetail">
            <div className="nodevelopp">
                <div className="basicinfo">
                    <img className="blasonclub" alt="club blason" src={blason}/>
                    <h1 className="clubname">{name}</h1>
                </div>
                <button className="developpbutton" onClick={handleClick}>
                    {!isOpen ?  <BsChevronRight size={"2rem"}/> : <BsChevronDown size={"2rem"}/>}
                </button>
            </div>
            <div className="developped">
                <div>
                    <p>Entraîneur en chef : {traineur}</p>
                    <p className="between">Stade principal : 	{stadiumprinc}</p>
                    <p>Fondation : {founded}</p>
                </div>
                <div>
                    <p>Championnat actuel : {actualeague}</p>
                    <p className="between">Statut : {status}</p>
                    <p>Palmarès   <BiAward className="award"/>    : {palmares}</p>
                </div>
            </div>
        </div>
    )
}

export default ClubDetail;