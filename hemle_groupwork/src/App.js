import React from "react"
import {BrowserRouter, Route, Routes} from "react-router-dom";
import About from "./components/About";
import Podcasts from "./pages/podcasts";
import Clubs from "./pages/clubs"
import InfoClub from "./pages/infoClub";

const App = () => {
  return (
      <BrowserRouter>
          <Routes>
              <Route path="/" element={<Podcasts />} />
              <Route path="/about" element={<About />} />
              <Route path="/clubs" element={<Clubs />} />
              <Route path="/info-club/:id" element={<InfoClub />}/>
          </Routes>
      </BrowserRouter>
  );
}

export default App;
