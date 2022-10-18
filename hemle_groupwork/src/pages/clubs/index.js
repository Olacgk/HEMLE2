import React, {useState} from 'react';
import './style.css';
import ClubCard from '../../components/ClubCard';
import Header from '../../components/Header';
import { clubLists } from '../../data/clubsLists';


const clubperpage = 10

const Clubs = () => {

    const [next, setNext] = useState(clubperpage);
    const handleMoreClubs = () => {
        setNext(next + clubperpage);
    };


    return(
        <div>
            <Header />
            <div className='clubGrid'>
                {
                    clubLists.slice(0, next)?.map(club => {
                        return(
                            <ClubCard link={`/info-club/${club.id}`} key={club.id} blason={club.blason} name={club.nom} division={club.division}/>
                        )
                    })
                }
                
            </div>
            <div className="boutoncenter">
                {
                    next < clubLists?.length && <button className="clubShowMore" onClick={()=>handleMoreClubs()}>AFFICHER TOUT</button>
                }
            </div>
        </div>
    )
}

export default Clubs;