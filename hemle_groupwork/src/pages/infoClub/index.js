import React from "react";
import Header from "../../components/Header"
import ClubBanniere from "../../components/ClubBanniere"
import ClubDetail from "../../components/ClubDetail";
import {useLocation} from "react-router-dom"
import { clubLists } from "../../data/clubsLists";


const InfoClub = () =>{

    // const router = useRouter()
    // useEffect(()=>{
    //     var clubPath = router.path
    //     var club = clubPath[clubPath.length-1]
    //     console.log(club)
    // },[])
    const location = useLocation()
    var splitPath = location.pathname.split("/")
    var id = splitPath[splitPath.length-1]
    console.log(id)

    const club = clubLists[id]
    console.log(club)

    return(
        <div>
            <Header />
            <ClubBanniere logo={club.blason} name={club.nom} background={club.background} />
            <ClubDetail blason={club.blason} name={club.nom} traineur={club.traineur} founded={club.founded} stadiumprinc={club.stadiumprinc} status={club.status} actualeague={club.actualeague} palmares={club.palmares}/>
        </div>
    )
}

export default InfoClub;