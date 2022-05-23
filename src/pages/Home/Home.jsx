import { useEffect, useState } from "react";
import Display from "../../components/Display/Display";
import Display_Destaque from "../../components/Display_Destaque/Display_Destaque";
import Header from "../../layout/Header/Header";
import styles from "./Home.module.css";
import useWindowDimensions from "../../utils/useWindowDimensions";

export default function Home() {
  const [livros, atualizarLivros] = useState({});
  const { width, height } = useWindowDimensions();

  useEffect(() => {
    fetch("https://livraria-apirest.herokuapp.com/livros")
      .then((res) => res.json())
      .then((res) => atualizarLivros(res));
  }, []);

  return (
    <div className={styles.Home}>

      <div
        className={styles.Grid}
        style={{
          gridTemplateColumns: `repeat(5,1fr)`,
        }}
      >
        {livros.length > 0
          ? livros.map((item, index) => (
              <>
                <Display
                  imagem={item.capa}
                  titulo={item.titulo}
                  autor={item.autor}
                />
              </>
            ))
          : ""}
      </div>

      {/* <Display />
            <Display />
            <Display /> */}

      <Header />
    </div>
  );
}
