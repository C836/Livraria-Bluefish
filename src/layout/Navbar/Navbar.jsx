import logo from "./../../assets/images/logoWhite.png";
import searchIcon from "./../../assets/images/searchIcon.svg";
import styles from "./Navbar.module.css";
import { useRef, useState } from "react";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import Resultado from "../../components/Resultado/Resultado";
import getApi from "../../utils/getApi";
import Divisor from "../../components/Divisor/Divisor";

export default function Navbar(props) {
  const usuario = props.usuario[0];
  const [results, setResults] = useState([]);
  const [search, setSearch] = useState(false);

  const [searchInputRef, searchResultsRef] = [useRef(null), useRef(null)];

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
          <Link to="/sobre">Sobre</Link>
          <p>Meus anúncios</p>
          <img className={styles.usuarioImagem} src={usuario.imagem} />
        </div>

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
              <>
                <Resultado
                  capa={item.capa}
                  titulo={item.titulo}
                  autor={item.autor}
                  preco={item.preco}
                />
                {index + 1 < results.length ? <Divisor /> : ""}
              </>
            ))}
          </div>
        </div>
      </section>
    </nav>
  );
}
