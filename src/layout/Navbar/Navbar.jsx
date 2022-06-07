import { useRef, useState } from "react";
import Anuncio from "../../components/Anuncio/Anuncio";
import Detalhes_Livro from "../../components/Detalhes_Livro/Detalhes_Livro";
import Divisor from "../../components/Divisor/Divisor";
import Resultado from "../../components/Resultado/Resultado";
import getApi from "../../utils/getApi";
import logo from "./../../assets/images/logoWhite.png";
import searchIcon from "./../../assets/images/searchIcon.svg";
import Button from "./../../components/Button/Button";
import styles from "./Navbar.module.css";

export default function Navbar(props) {
  const [results, setResults] = useState([]);
  const [search, setSearch] = useState(false);

  const [livro, setLivro] = useState(-1);
  const [clicked, setClicked] = useState(false);

  const [searchInputRef, searchResultsRef] = [useRef(null), useRef(null)];

  const [detalhes, setDetalhes] = useState(false);

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

  const handleResultClick = (e) => {
    setLivro(e.target.id);
    setDetalhes(true);
  };

  window.addEventListener("click", (e) => {
    setSearch(e.target.classList.contains("toggleSearch") ? true : false);
  });

  return (
    <nav className={styles.Navbar}>
      <section>
        <div className={styles.logo}>
          <img src={logo} alt="Bluefish" />
          <p>Bluefish livraria</p>
        </div>

        <div className={styles.Links}>
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
              <>
                <Resultado
                  resultClick={handleResultClick}
                  id={item.id}
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
      <Detalhes_Livro id={livro} clicked={detalhes} setClicked={setDetalhes} />
    </nav>
  );
}
