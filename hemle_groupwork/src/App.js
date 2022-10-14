import React from "react"
import {BrowserRouter, Route, Routes} from "react-router-dom";
import Podcasts from "./pages/podcasts";
import About from "./components/About";

import "./style.css"

const App = () => {
  return (
      <BrowserRouter>
          <Routes>
                <Route path="/" element={ <Podcasts /> } />
                <Route path="/about" element={ <About /> } />
          </Routes>
      </BrowserRouter>
  );
}

export default App;
