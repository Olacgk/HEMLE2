import React from "react"
import {BrowserRouter, Route, Routes} from "react-router-dom";
//import Podcasts from "./pages/podcasts";
import About from "./components/About";
//import Card from "./components/Cartes";
import Infos from "./components/Infos";

//import "./style.css"

const App = () => {
  return (
      <BrowserRouter>
          <Routes>
                <Route path="/" element={ <Infos /> } />
                <Route path="/about" element={ <About /> } />
          </Routes>
      </BrowserRouter>
  );
}

export default App;
