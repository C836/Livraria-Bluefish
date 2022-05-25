import { useEffect, useState } from "react";
import Display from "../../components/Display/Display";
import Display_Destaque from "../../components/Display_Destaque/Display_Destaque";
import Header from "../../layout/Header/Header";
import styles from "./Home.module.css";
import useWindowDimensions from "../../utils/useWindowDimensions";
import Navbar from "../../layout/Navbar/Navbar";
import { Category, Categories } from "../../components/Category/Category";
import { livraria } from "../../assets/livraria-api";
import Paginacao from "../../components/Paginacao/Paginacao";
import Filter from "../../components/Filter/Filter";
import ordenar from "../../utils/ordenar";
import filtrarCategoria from "../../utils/filtrarCategoria";

export default function Home() {
  const [destaques, setDestaques] = useState([]);

  const [pagina, setPagina] = useState(1);
  const [exibicao, setExibicao] = useState(20);
  const [ordem, setOrdem] = useState("new");

  const [categoria, setCategoria] = useState("");

  const { width, height } = useWindowDimensions();

  // useEffect(() => {
  //   Promise.all([
  //     fetch("https://livraria-apirest.herokuapp.com/livros/id/1").then((res) =>
  //       res.json()
  //     ),
  //     fetch("https://livraria-apirest.herokuapp.com/livros/id/2").then((res) =>
  //       res.json()
  //     ),
  //   ]).then(res => setDestaques(res));
  // }, []);

  // useEffect(() => {
  //   fetch("https://livraria-apirest.herokuapp.com/livros")
  //     .then((res) => res.json())
  //     .then((res) => atualizarLivros(res));
  // }, [livros]);

  return (
    <div className={styles.Home}>
      <Header />

      <main>
        <section className={styles.Categories}>
          {Categories.map((item, index) => (
            <Category key={index} nome={item.categoria} icone={item.icone} />
          ))}
        </section>

        <section className={styles.Destaque}>
          <Display_Destaque
            capa={
              "https://manualgeek.com.br/wp-content/uploads/2022/05/5149j28fV3L-768x1100.jpg"
            }
            titulo={"Os reinos partidos"}
            autor={"N.K Jemisin"}
            imagem={
              "https://i2.wp.com/impagine.online/wp-content/uploads/2021/09/oscem-milreinos.png?fit=800%2C450&ssl=1"
            }
          />
          <Display_Destaque
            capa={
              "https://manualgeek.com.br/wp-content/uploads/2022/05/5149j28fV3L-768x1100.jpg"
            }
            titulo={"Os reinos partidos"}
            autor={"N.K Jemisin"}
            imagem={
              "https://i2.wp.com/impagine.online/wp-content/uploads/2021/09/oscem-milreinos.png?fit=800%2C450&ssl=1"
            }
          />
        </section>

        <section className={styles.FilterWrapper}>
          <Filter
            pagina={pagina}
            quantidade={livraria.length}
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
          {livraria.length > 0
            ? livraria
                .filter((e) => filtrarCategoria(e, categoria))
                .sort(ordenar("titulo", "id", "preco", ordem))
                .map((item, index) => {
                  if (
                    index < exibicao * pagina &&
                    index > (pagina - 1) * exibicao - 1
                  )
                    return (
                      <>
                        <Display
                          imagem={item.capa}
                          titulo={item.titulo}
                          autor={item.autor}
                          preco={item.preco}
                        />
                      </>
                    );
                })
            : ""}
        </section>
        <section className={styles.PaginacaoWrapper}>
          <Paginacao
            quantidade={livraria.length}
            exibicao={exibicao}
            pagina={pagina}
            setPagina={setPagina}
          />
        </section>
      </main>
    </div>
  );
}
