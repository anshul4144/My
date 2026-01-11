import { Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar/Navbar";
import Footer from "./components/Footer/Footer";
import Home from "./pages/Home/Home";
import Services from "./pages/Services/Services";
import SmartHelp from "./pages/SmartHelp/SmartHelp";
import About from "./pages/About/About";
import Portfolio from "./pages/Portfolio/Portfolio";
import Booking from "./pages/Booking/Booking";
function App() {
  return (
    <>
      <Navbar />

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/services" element={<Services />} />
        <Route path="/smart-help" element={<SmartHelp />} />
        <Route path="/about" element={<About />} />
        <Route path="/portfolio" element={<Portfolio/>} />
        <Route path="/booking" element={<Booking />} />
      </Routes>
      <Footer/>
    </>
  );
}

export default App;