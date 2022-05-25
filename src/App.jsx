import React, { useState, createContext } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import Navbar from "./layout/Navbar/Navbar";
import Home from "./pages/Home/Home";
import Sobre from "./pages/Sobre/Sobre";
import Loading from "./layout/Loading/Loading";

import "./App.css";

const usuarioContext = createContext();

function App() {
  const [usuario, atualizarUsuario] = useState({
    nome: "Gabriel",
    imagem:
      "https://filestore.community.support.microsoft.com/api/images/6061bd47-2818-4f2b-b04a-5a9ddb6f6467?upload=true",
  });

  return (
    <Router>
      <usuarioContext.Provider value={usuario}>
        {/* <Loading /> */}
        <div className="App">
          <Navbar usuario={[usuario, atualizarUsuario]} />
          
          <Routes>
            <Route exact path="/" element={<Home />} />
            <Route exact path="/sobre" element={<Sobre />} />
            {/* <Route path='*' exact={true} element={<NotFound />} /> */}
          </Routes>
        </div>
      </usuarioContext.Provider>
    </Router>
  );
}

export default App;
