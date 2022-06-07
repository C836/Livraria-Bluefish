import React from "react";

import AppBackground from "./layout/AppBackground/AppBackground";
import Navbar from "./layout/Navbar/Navbar";
import Home from "./pages/Home/Home";
import Loading from "./layout/Loading/Loading";

import "./App.css";
import Footer from "./layout/Footer/Footer";

function App() {
  return (
    <div className="App">
      <AppBackground />
      <Navbar />
      <Home />
      <Footer />
    </div>
  );
}

export default App;
