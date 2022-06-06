import logo from "./../../assets/images/logoWhite.png";
import searchIcon from "./../../assets/images/searchIcon.svg";
import styles from "./Navbar.module.css";
import { useRef, useState, useContext } from "react";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import Resultado from "../../components/Resultado/Resultado";
import getApi from "../../utils/getApi";
import Divisor from "../../components/Divisor/Divisor";
import Button from "./../../components/Button/Button";
import Anuncio from "../../components/Anuncio/Anuncio";

export default function Navbar(props) {
  const [results, setResults] = useState([]);
  const [search, setSearch] = useState(false);

  const [livro, setLivro] = useState(-1);
  const [clicked, setClicked] = useState(false);

  const [searchInputRef, searchResultsRef] = [useRef(null), useRef(null)];

  const handleAnuncioClick = (e) => {
    setClicked(true);
  };

  const handleResultsChange = (e) => {
    if (e.target.value.length > 1) {
      getApi().then((res) =>
        setResults(
          res.filter((obj) =>
            JSON.stringify(obj)
              .toLowerCase()
              .includes(e.target.value.toLowerCase())
          )
        )
      );
    } else {
      setResults([]);
      return;
    }
  };

  window.addEventListener("click", (e) => {
    setSearch(e.target.classList.contains("toggleSearch") ? true : false);
  });

  return (
    <nav className={styles.Navbar}>
      <section>
        <Link to="/" className={styles.logo}>
          <img src={logo} alt="Bluefish" />
          <p>Bluefish livraria</p>
        </Link>

        <div className={styles.Links}>
          <Link to="/sobre">
            <a style={{ marginRight: "35px" }}>Sobre</a>
          </Link>
          <Button onClick={handleAnuncioClick} texto="Novo Anuncio +" />
        </div>

        <section>
          <Anuncio id={livro} clicked={clicked} setClicked={setClicked} />
        </section>

        <div className={`toggleSearch ${styles.Search}`}>
          <img src={searchIcon} className={styles.SearchIcon} />
          <input
            ref={searchInputRef}
            placeholder="Pesquise por nome ou categoria"
            className={`toggleSearch`}
            onChange={handleResultsChange}
          />
          <div
            ref={searchResultsRef}
            className={`toggleSearch ${styles.resultsWrapper} ${
              search === false || results.length < 1 ? styles.disabled : ""
            }`}
          >
            {results.map((item, index) => (
              <div key={index}>
                <Resultado
                  capa={item.capa}
                  titulo={item.titulo}
                  autor={item.autor}
                  preco={item.preco}
                />
                {index + 1 < results.length ? <Divisor /> : ""}
              </div>
            ))}
          </div>
        </div>
      </section>
    </nav>
  );
}
