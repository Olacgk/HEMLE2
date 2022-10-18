import React, {useState} from 'react';
import './style.css';
import ClubCard from '../../components/ClubCard';
import Header from '../../components/Header';
import { clubLists } from '../../data/clubsLists';
import { Link } from 'react-router-dom';


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
                            <Link to={"/info-club"}>
                                <ClubCard key={club.id} blason={club.blason} name={club.nom} division={club.division}/>
                            </Link>
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