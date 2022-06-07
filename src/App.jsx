import React, { useState, createContext, useEffect } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import AppBackground from "./layout/AppBackground/AppBackground";
import Navbar from "./layout/Navbar/Navbar";
import Home from "./pages/Home/Home";
import Loading from "./layout/Loading/Loading";

import "./App.css";

const addedBooksContext = createContext(null)

function App() {
  const [addedBooks, setAddedBooks] = useState([]);

  const [user, setUser] = useState("Jesse Hall");

  return (
    <addedBooksContext.Provider value={[addedBooks, setAddedBooks]}>
      <Router>
        {/* <Loading /> */}
        <div className="App">
          
          <AppBackground />
          <Navbar addedBooks={[addedBooks, setAddedBooks]}/>

          <Routes>
            <Route exact path="/" element={<Home />} />
            {/* <Route path='*' exact={true} element={<NotFound />} /> */}
          </Routes>
        </div>
      </Router>
    </addedBooksContext.Provider>
  );
}

export default App;
export { addedBooksContext }
