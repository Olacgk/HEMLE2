import React from "react"
import {BrowserRouter, Route, Routes} from "react-router-dom";
import About from "./components/About";
import Podcasts from "./pages/podcasts";

const App = () => {
  return (
      <BrowserRouter>
          <Routes>
              <Route path="/" element={<Podcasts />} />
              <Route path="/about" element={<About />} />
          </Routes>
      </BrowserRouter>
  );
}

export default App;
