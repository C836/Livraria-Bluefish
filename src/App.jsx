import React, { useState, createContext, useEffect } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import AppBackground from "./layout/AppBackground/AppBackground";
import Navbar from "./layout/Navbar/Navbar";
import Home from "./pages/Home/Home";
import Cadastro from "./pages/Cadastro/Cadastro";
import Sobre from "./pages/Sobre/Sobre";
import Loading from "./layout/Loading/Loading";

import "./App.css";

const usuarioContext = createContext();

function App() {
  const [usuario, atualizarUsuario] = useState({});

  useEffect(()=>{
    atualizarUsuario(JSON.parse(localStorage.getItem("usuario")))
  },[])

  return (
    <Router>
      <usuarioContext.Provider value={usuario}>
        {/* <Loading /> */}
        <div className="App">
          <AppBackground />
          <Navbar usuario={[usuario, atualizarUsuario]} />

          <Routes>
            <Route exact path="/" element={<Home />} />
            <Route
              exact
              path="/cadastro"
              element={<Cadastro usuario={[usuario, atualizarUsuario]} />}
            />
            <Route exact path="/sobre" element={<Sobre />} />
            {/* <Route path='*' exact={true} element={<NotFound />} /> */}
          </Routes>
        </div>
      </usuarioContext.Provider>
    </Router>
  );
}

export default App;
