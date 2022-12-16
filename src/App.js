import React from "react";
import "./App.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./components/home/Home";
import Help from "./components/Help";
import SOverview from "./components/letterPages/S/SOverview"

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/help" element={<Help />} />
          <Route path="/s" element={<SOverview />} />
          {/* <Route path="/A" element={<A />} />
          <Route path="/T" element={<T />} />
          <Route path="/P" element={<P />} />
          <Route path="/I" element={<I />} />
          <Route path="/N" element={<N />} /> */}
        </Routes>
      </BrowserRouter>
    </>
  );
}
export default App;
