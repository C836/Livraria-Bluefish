import React, { useState, createContext } from "react";
import Home from "./pages/Home/Home";
import "./App.css";
import Navbar from "./layout/Navbar/Navbar";

const usuarioContext = createContext();

function App() {
  const [usuario, atualizarUsuario] = useState({
    nome: "Gabriel",
    imagem:
      "https://filestore.community.support.microsoft.com/api/images/6061bd47-2818-4f2b-b04a-5a9ddb6f6467?upload=true",
  });

  return (
    <usuarioContext.Provider value={usuario}>
      <div className="App">
        <Navbar usuario={[usuario, atualizarUsuario]}/>
        <Home />
      </div>
    </usuarioContext.Provider>
  );
}

export default App;
