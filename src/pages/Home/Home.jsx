import { useEffect, useState } from "react";
import Display from "../../components/Display/Display";
import Display_Destaque from "../../components/Display_Destaque/Display_Destaque";
import Header from "../../layout/Header/Header";
import styles from "./Home.module.css";
import useWindowDimensions from "../../utils/useWindowDimensions";
import Navbar from "../../layout/Navbar/Navbar";
import { Category, Categories } from "../../components/Category/Category";

export default function Home() {
  //const [livros, atualizarLivros] = useState({});

  //-----------------------------
 

  //-----------------------------

  const [categoria, setCategoria] = useState("");
  const { width, height } = useWindowDimensions();

  useEffect(() => {
    fetch("https://livraria-apirest.herokuapp.com/livros")
      .then((res) => res.json())
      .then((res) => atualizarLivros(res));
  }, []);

  return (
    <div className={styles.Home}>
      {/* <Display />
            <Display />
            <Display /> */}

      <Header />

      <main>
        <section className={styles.Categories}>
          {Categories.map((item, index) => (
            <Category key={index} nome={item.categoria} icone={item.icone} />
          ))}
        </section>


      </main>
    </div>
  );
}
