import React from "react";
import { Routes, Route } from "react-router-dom";
// IMPORT PAGES
import Home from "./pages/Home";
import About from "./pages/About";
import Resources from "./pages/Resources";
import Portfolio from "./pages/Portfolio";
import Contact from "./pages/Contact";
import Snippets from "./pages/Snippets";
// COMPONENTS
import NavHeader from "./components/Header/NavHeader";
import Footer from "./components/Footer/Footer";
// ----------------
// STARTING PROGRAM
// ----------------
const App = () => {
  return (
    <div className="app-container">
      {/* NAV BAR */}
      <NavHeader />
      {/* ROUTE PAGES */}
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about-me" element={<About />} />
        <Route path="/resources" element={<Resources />} />
        <Route path="/portfolio" element={<Portfolio />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/snippets" element={<Snippets />} />
      </Routes>
      {/* FOOTER */}
      <Footer />
    </div>
  );
};

export default App;
