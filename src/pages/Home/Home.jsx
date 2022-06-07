import { useEffect, useState, useRef } from "react";
import Display from "../../components/Display/Display";
import Display_Destaque from "../../components/Display_Destaque/Display_Destaque";
import Header from "../../layout/Header/Header";
import styles from "./Home.module.css";
import { Category, Categories } from "../../components/Category/Category";
import Paginacao from "../../components/Paginacao/Paginacao";
import Filter from "../../components/Filter/Filter";
import ordenar from "../../utils/ordenar";
import filtrarCategoria from "../../utils/filtrarCategoria";
import getApi from "../../utils/getApi";
import Detalhes_Livro from "../../components/Detalhes_Livro/Detalhes_Livro";

export default function Home() {
  const [destaques, setDestaques] = useState([]);
  const [livros, setLivros] = useState([]);
  const [livro, setLivro] = useState(-1);
  const [clicked, setClicked] = useState(false);

  const [pagina, setPagina] = useState(1);
  const [exibicao, setExibicao] = useState(20);
  const [ordem, setOrdem] = useState("new");

  const [categoria, setCategoria] = useState("");

  const normalize = (text) => {
    return text
      .split(" ")[0]
      .normalize("NFD")
      .replace(/[\u0300-\u036f]/g, "");
  };

  const livrosFiltrados = livros.filter((e) =>
    filtrarCategoria(e, normalize(categoria))
  );

  useEffect(() => {
    getApi().then((res) => setLivros(res));
  }, [livros]);

  useEffect(() => {
    fetch("https://livraria-apistore.herokuapp.com/destaques")
      .then((res) => res.json())
      .then((res) =>
        setDestaques(
          res.filter(
            (e) =>
              e.genero === normalize(categoria !== "" ? categoria : "aventura")
          )
        )
      );
  }, [categoria]);

  return (
    <div className={styles.Home}>
      <Header setLivro={setLivro} setClicked={setClicked} />

      <main>
        <section className={styles.Categories}>
          {Categories.map((item, index) => (
            <Category
              key={index}
              categoria={categoria.toLowerCase()}
              setCategoria={setCategoria}
              nome={item.categoria}
              icone={item.icone}
            />
          ))}
        </section>

        <section className={styles.Destaque}>
          {destaques.map((item, index) => (
            <Display_Destaque
              key={index}
              id={item.id}
              setLivro={setLivro}
              setClicked={setClicked}
              capa={item.capa}
              titulo={item.nome}
              autor={item.autor}
              imagem={item.background}
            />
          ))}
        </section>

        <section className={styles.FilterWrapper}>
          <Filter
            pagina={pagina}
            quantidade={livrosFiltrados.length}
            exibicao={exibicao}
            setExibicao={setExibicao}
            ordem={ordem}
            setOrdem={setOrdem}
          />
        </section>

        <section
          className={styles.Grid}
          style={{
            gridTemplateColumns: `repeat(5,1fr)`,
          }}
        >
          {livrosFiltrados
            .sort(ordenar("titulo", "id", "preco", ordem))
            .map((item, index) => {
              if (
                index < exibicao * pagina &&
                index > (pagina - 1) * exibicao - 1
              )
                return (
                  <div key={index}>
                    <Display
                      setLivro={setLivro}
                      setClicked={setClicked}
                      id={item.id}
                      imagem={item.capa}
                      titulo={item.titulo}
                      autor={item.autor}
                      preco={item.preco}
                    />
                  </div>
                );
            })}
        </section>

        <section>
          <Detalhes_Livro
            id={livro}
            clicked={clicked}
            setClicked={setClicked}
          />
        </section>

        <section className={styles.PaginacaoWrapper}>
          <Paginacao
            quantidade={livrosFiltrados.length}
            exibicao={exibicao}
            pagina={pagina}
            setPagina={setPagina}
          />
        </section>
      </main>
    </div>
  );
}
