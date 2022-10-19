import React from "react"
import {BrowserRouter, Route, Routes} from "react-router-dom";
import Podcasts from "./pages/podcasts";
import Clubs from "./pages/clubs"
import InfoClub from "./pages/infoClub";
import Infos from "./components/Infos";
import Card from "./components/Cartes";
import About from "./components/About";

import "./style.css"

const App = () => {
  return (
      <BrowserRouter>
          <Routes>
                <Route path="/" element={ <Podcasts /> } />
                <Route path="/infos/:id" element={ <Infos /> } />
                <Route path="/card" element={ <Card /> } />
                <Route path="/about" element={ <About /> } />
              <Route path="/clubs" element={<Clubs />} />
              <Route path="/info-club/:id" element={<InfoClub />}/>
          </Routes>
      </BrowserRouter>
  );
}

export default App;