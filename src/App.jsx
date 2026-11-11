import { BrowserRouter, Routes, Route, useLocation } from "react-router-dom";
import WhatsAppButton from "./components/WhatsAppButton";
import Footer from "./components/Footer";
import Admin from "./admin/Admin";

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
      <Footer />
    </>
  );
}

// WhatsApp icon har public page par dikhega, admin page par nahi.
function FloatingWhatsApp() {
  const { pathname } = useLocation();
  if (pathname.startsWith("/admin")) return null;
  return <WhatsAppButton />;
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
        <Route path="/admin" element={<Admin />} />
      </Routes>
      <FloatingWhatsApp />
    </BrowserRouter>
  );
}

export default App;