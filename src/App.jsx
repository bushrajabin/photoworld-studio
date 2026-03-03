import { BrowserRouter, Routes, Route } from "react-router-dom";

import Header from "./components/Header";
import About from "./components/About";
import Portfolio from "./components/Portfolio";
import Booking from "./components/Booking";
import Price from "./components/Price";
import Portrait from "./components/backImages/Portrait";
import Contact from "./components/Contact";
import Options from "./components/Options";
import ModelShoot from "./components/backImages/ModelShoot";
import AlbumShoot from "./components/backImages/AlbumShoot";
import Reels from "./components/backImages/Reels";
function Home() {
  return (
    <>
    <Header/>
      <About />
      <Options />
      <Portfolio />
      <Booking />
      <Price />
      <Contact/>
    </>
  );
}

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/portrait" element={<Portrait />} />
        <Route path="/ModelShoot" element={<ModelShoot />} />
        <Route path="/album" element={<AlbumShoot />} />
        <Route path="/reels" element={<Reels />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;