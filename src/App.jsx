import React from "react";
import "./App.css";
import AppBackground from "./layout/AppBackground/AppBackground";
import Footer from "./layout/Footer/Footer";
import Navbar from "./layout/Navbar/Navbar";
import Home from "./pages/Home/Home";
import StartPage from "./layout/StartPage/Loading";
import { useState, useEffect, createContext } from "react";

export const LoadContext = createContext();

function App() {
  const [loaded, setLoaded] = useState(false);

  useEffect(() => {
    setTimeout(()=>{setLoaded(true)},2000)
  },[]);

  return (
    <div style={{ position: !loaded && "fixed" }} className="App">
      <LoadContext.Provider value={loaded}>
        <StartPage />
        <AppBackground />
        <Navbar />
        <Home />
        <Footer />
      </LoadContext.Provider>
    </div>
  );
}

export default App;
