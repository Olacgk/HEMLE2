import React from "react"
import {BrowserRouter, Route, Routes} from "react-router-dom";
import About from "./components/About";
import Podcasts from "./pages/podcasts";
import Clubs from "./pages/clubs"

const App = () => {
  return (
      <BrowserRouter>
          <Routes>
              <Route path="/" element={<Podcasts />} />
              <Route path="/about" element={<About />} />
              <Route path="/clubs" element={<Clubs />} />
          </Routes>
      </BrowserRouter>
  );
}

export default App;
