import React from "react";
import "./App.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./components/home/Home";
import Help from "./components/Help";
import Header from "./components/Header";
import SOverview from "./components/letterPages/S/SOverview"
import AOverview from "./components/letterPages/A/AOverview"
import TOverview from "./components/letterPages/T/TOverview"
import IOverview from "./components/letterPages/I/IOverview"

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
          <Route path="/a" element={<AOverview />} />
          <Route path="/t" element={<TOverview />} />
          <Route path="/i" element={<IOverview />} />
          {/* <Route path="/I" element={<I />} />
          <Route path="/N" element={<N />} /> */}
        </Routes>
      </BrowserRouter>
    </>
  );
}
export default App;
