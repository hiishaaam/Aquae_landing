import React from "react";
import { motion } from "framer-motion";
import NavbarSubsection from "./components/NavbarSubsection";
import { HeroSubsection } from "./components/HeroSubsection";
import DesktopSubsection from "./components/DesktopSubsection";
import DivWrapperSubsection from "./components/DivWrapperSubsection";
import OverlapWrapperSubsection from "./components/OverlapWrapperSubsection";
import Frame from "./components/Frame";
import Footer from "./components/Footer";
import "./App.css";

function App() {
  return (
    <div className="App">
      <NavbarSubsection />
      <main>
        <HeroSubsection />
        <DesktopSubsection />
        <DivWrapperSubsection />
        <OverlapWrapperSubsection />
        <Frame />
      </main>
      <Footer />
    </div>
  );
}

export default App;
