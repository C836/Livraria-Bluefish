import React, { useState, createContext, useEffect } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import AppBackground from "./layout/AppBackground/AppBackground";
import Navbar from "./layout/Navbar/Navbar";
import Home from "./pages/Home/Home";
import Sobre from "./pages/Sobre/Sobre";
import Loading from "./layout/Loading/Loading";

import "./App.css";

function App() {
  return (
    <Router>
      {/* <Loading /> */}
      <div className="App">
        <AppBackground />
        <Navbar />

        <Routes>
          <Route exact path="/" element={<Home />} />
          <Route exact path="/sobre" element={<Sobre />} />
          {/* <Route path='*' exact={true} element={<NotFound />} /> */}
        </Routes>
      </div>
    </Router>
  );
}

export default App;
