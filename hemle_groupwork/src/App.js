import React from "react"

import {BrowserRouter, Route, Routes} from "react-router-dom";
import Podcasts from "./pages/podcasts";
import Clubs from "./pages/clubs"
import InfoClub from "./pages/infoClub";

import About from "./pages/aboutPage";
import Profil from "./pages/playerProfil";
import Players from "./pages/playersList";

const App = () => {
  return (
      <BrowserRouter>
          <Routes>
              <Route path="/" element={ <Podcasts /> } />
              <Route path="/profil/:id" element={ <Profil /> } />
              <Route path="/players" element={ <Players /> } />
              <Route path="/about" element={ <About /> } />
              <Route path="/clubs" element={<Clubs />} />
              <Route path="/info-club/:id" element={<InfoClub />}/>
          </Routes>
      </BrowserRouter>
  );
}

export default App;