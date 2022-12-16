import React from "react";
import "./App.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./components/home/Home";
import Help from "./components/Help";

import BlendingGame from "./components/BlendingGame";
import Header from "./components/Header";
import SOverview from "./components/letterPages/S/SOverview";
import AOverview from "./components/letterPages/A/AOverview";
import TOverview from "./components/letterPages/T/TOverview";
import IOverview from "./components/letterPages/I/IOverview";
import POverview from "./components/letterPages/P/POverview";

function App() {
  return (
    <>
      <BrowserRouter>
        <header>
          <Header />
        </header>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/help" element={<Help />} />
          <Route path="/s" element={<SOverview />} />
          <Route path="/blending" element={<BlendingGame />} />

          <Route path="/a" element={<AOverview />} />
          <Route path="/t" element={<TOverview />} />
          <Route path="/i" element={<IOverview />} />
          <Route path="/p" element={<POverview />} />
          {/* <Route path="/N" element={<N />} /> */}
        </Routes>
      </BrowserRouter>
    </>
  );
}
export default App;
