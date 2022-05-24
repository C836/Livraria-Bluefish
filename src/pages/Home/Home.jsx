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
  const livros = [
    {
      capa: "https://kbimages1-a.akamaihd.net/3b759ac0-1cbf-4573-8bd8-2929cd3c432d/353/569/90/False/biblia-sagrada-catolica.jpg",
      titulo: "Biblia sagrada",
      autor: "varios",
    },
    {
      capa: "https://kbimages1-a.akamaihd.net/3b759ac0-1cbf-4573-8bd8-2929cd3c432d/353/569/90/False/biblia-sagrada-catolica.jpg",
      titulo: "Biblia sagrada",
      autor: "varios",
    },
    {
      capa: "https://kbimages1-a.akamaihd.net/3b759ac0-1cbf-4573-8bd8-2929cd3c432d/353/569/90/False/biblia-sagrada-catolica.jpg",
      titulo: "Biblia sagrada",
      autor: "varios",
    },
    {
      capa: "https://kbimages1-a.akamaihd.net/3b759ac0-1cbf-4573-8bd8-2929cd3c432d/353/569/90/False/biblia-sagrada-catolica.jpg",
      titulo: "Biblia sagrada",
      autor: "varios",
    },
    {
      capa: "https://kbimages1-a.akamaihd.net/3b759ac0-1cbf-4573-8bd8-2929cd3c432d/353/569/90/False/biblia-sagrada-catolica.jpg",
      titulo: "Biblia sagrada",
      autor: "varios",
    },
    {
      capa: "https://kbimages1-a.akamaihd.net/3b759ac0-1cbf-4573-8bd8-2929cd3c432d/353/569/90/False/biblia-sagrada-catolica.jpg",
      titulo: "Biblia sagrada",
      autor: "varios",
    },
    {
      capa: "https://kbimages1-a.akamaihd.net/3b759ac0-1cbf-4573-8bd8-2929cd3c432d/353/569/90/False/biblia-sagrada-catolica.jpg",
      titulo: "Biblia sagrada",
      autor: "varios",
    },
    {
      capa: "https://kbimages1-a.akamaihd.net/3b759ac0-1cbf-4573-8bd8-2929cd3c432d/353/569/90/False/biblia-sagrada-catolica.jpg",
      titulo: "Biblia sagrada",
      autor: "varios",
    },
    {
      capa: "https://kbimages1-a.akamaihd.net/3b759ac0-1cbf-4573-8bd8-2929cd3c432d/353/569/90/False/biblia-sagrada-catolica.jpg",
      titulo: "Biblia sagrada",
      autor: "varios",
    },
    {
      capa: "https://kbimages1-a.akamaihd.net/3b759ac0-1cbf-4573-8bd8-2929cd3c432d/353/569/90/False/biblia-sagrada-catolica.jpg",
      titulo: "Biblia sagrada",
      autor: "varios",
    },
    {
      capa: "https://kbimages1-a.akamaihd.net/3b759ac0-1cbf-4573-8bd8-2929cd3c432d/353/569/90/False/biblia-sagrada-catolica.jpg",
      titulo: "Biblia sagrada",
      autor: "varios",
    },
    {
      capa: "https://kbimages1-a.akamaihd.net/3b759ac0-1cbf-4573-8bd8-2929cd3c432d/353/569/90/False/biblia-sagrada-catolica.jpg",
      titulo: "Biblia sagrada",
      autor: "varios",
    },
    {
      capa: "https://kbimages1-a.akamaihd.net/3b759ac0-1cbf-4573-8bd8-2929cd3c432d/353/569/90/False/biblia-sagrada-catolica.jpg",
      titulo: "Biblia sagrada",
      autor: "varios",
    },
    {
      capa: "https://kbimages1-a.akamaihd.net/3b759ac0-1cbf-4573-8bd8-2929cd3c432d/353/569/90/False/biblia-sagrada-catolica.jpg",
      titulo: "Biblia sagrada",
      autor: "varios",
    },
    {
      capa: "https://kbimages1-a.akamaihd.net/3b759ac0-1cbf-4573-8bd8-2929cd3c432d/353/569/90/False/biblia-sagrada-catolica.jpg",
      titulo: "Biblia sagrada",
      autor: "varios",
    },
    {
      capa: "https://kbimages1-a.akamaihd.net/3b759ac0-1cbf-4573-8bd8-2929cd3c432d/353/569/90/False/biblia-sagrada-catolica.jpg",
      titulo: "Biblia sagrada",
      autor: "varios",
    },
    {
      capa: "https://kbimages1-a.akamaihd.net/3b759ac0-1cbf-4573-8bd8-2929cd3c432d/353/569/90/False/biblia-sagrada-catolica.jpg",
      titulo: "Biblia sagrada",
      autor: "varios",
    },
    {
      capa: "https://kbimages1-a.akamaihd.net/3b759ac0-1cbf-4573-8bd8-2929cd3c432d/353/569/90/False/biblia-sagrada-catolica.jpg",
      titulo: "Biblia sagrada",
      autor: "varios",
    },
    {
      capa: "https://kbimages1-a.akamaihd.net/3b759ac0-1cbf-4573-8bd8-2929cd3c432d/353/569/90/False/biblia-sagrada-catolica.jpg",
      titulo: "Biblia sagrada",
      autor: "varios",
    },
    {
      capa: "https://kbimages1-a.akamaihd.net/3b759ac0-1cbf-4573-8bd8-2929cd3c432d/353/569/90/False/biblia-sagrada-catolica.jpg",
      titulo: "Biblia sagrada",
      autor: "varios",
    },
    {
      capa: "https://kbimages1-a.akamaihd.net/3b759ac0-1cbf-4573-8bd8-2929cd3c432d/353/569/90/False/biblia-sagrada-catolica.jpg",
      titulo: "Biblia sagrada",
      autor: "varios",
    },
    {
      capa: "https://kbimages1-a.akamaihd.net/3b759ac0-1cbf-4573-8bd8-2929cd3c432d/353/569/90/False/biblia-sagrada-catolica.jpg",
      titulo: "Biblia sagrada",
      autor: "varios",
    },
    {
      capa: "https://kbimages1-a.akamaihd.net/3b759ac0-1cbf-4573-8bd8-2929cd3c432d/353/569/90/False/biblia-sagrada-catolica.jpg",
      titulo: "Biblia sagrada",
      autor: "varios",
    },
    {
      capa: "https://kbimages1-a.akamaihd.net/3b759ac0-1cbf-4573-8bd8-2929cd3c432d/353/569/90/False/biblia-sagrada-catolica.jpg",
      titulo: "Biblia sagrada",
      autor: "varios",
    },
    {
      capa: "https://kbimages1-a.akamaihd.net/3b759ac0-1cbf-4573-8bd8-2929cd3c432d/353/569/90/False/biblia-sagrada-catolica.jpg",
      titulo: "Biblia sagrada",
      autor: "varios",
    },
    {
      capa: "https://kbimages1-a.akamaihd.net/3b759ac0-1cbf-4573-8bd8-2929cd3c432d/353/569/90/False/biblia-sagrada-catolica.jpg",
      titulo: "Biblia sagrada",
      autor: "varios",
    },
    {
      capa: "https://kbimages1-a.akamaihd.net/3b759ac0-1cbf-4573-8bd8-2929cd3c432d/353/569/90/False/biblia-sagrada-catolica.jpg",
      titulo: "Biblia sagrada",
      autor: "varios",
    },
    {
      capa: "https://kbimages1-a.akamaihd.net/3b759ac0-1cbf-4573-8bd8-2929cd3c432d/353/569/90/False/biblia-sagrada-catolica.jpg",
      titulo: "Biblia sagrada",
      autor: "varios",
    },
    {
      capa: "https://kbimages1-a.akamaihd.net/3b759ac0-1cbf-4573-8bd8-2929cd3c432d/353/569/90/False/biblia-sagrada-catolica.jpg",
      titulo: "Biblia sagrada",
      autor: "varios",
    },
    {
      capa: "https://kbimages1-a.akamaihd.net/3b759ac0-1cbf-4573-8bd8-2929cd3c432d/353/569/90/False/biblia-sagrada-catolica.jpg",
      titulo: "Biblia sagrada",
      autor: "varios",
    },
    {
      capa: "https://kbimages1-a.akamaihd.net/3b759ac0-1cbf-4573-8bd8-2929cd3c432d/353/569/90/False/biblia-sagrada-catolica.jpg",
      titulo: "Biblia sagrada",
      autor: "varios",
    },
    {
      capa: "https://kbimages1-a.akamaihd.net/3b759ac0-1cbf-4573-8bd8-2929cd3c432d/353/569/90/False/biblia-sagrada-catolica.jpg",
      titulo: "Biblia sagrada",
      autor: "varios",
    },
    {
      capa: "https://kbimages1-a.akamaihd.net/3b759ac0-1cbf-4573-8bd8-2929cd3c432d/353/569/90/False/biblia-sagrada-catolica.jpg",
      titulo: "Biblia sagrada",
      autor: "varios",
    },
    {
      capa: "https://kbimages1-a.akamaihd.net/3b759ac0-1cbf-4573-8bd8-2929cd3c432d/353/569/90/False/biblia-sagrada-catolica.jpg",
      titulo: "Biblia sagrada",
      autor: "varios",
    },
    {
      capa: "https://kbimages1-a.akamaihd.net/3b759ac0-1cbf-4573-8bd8-2929cd3c432d/353/569/90/False/biblia-sagrada-catolica.jpg",
      titulo: "Biblia sagrada",
      autor: "varios",
    },
    {
      capa: "https://kbimages1-a.akamaihd.net/3b759ac0-1cbf-4573-8bd8-2929cd3c432d/353/569/90/False/biblia-sagrada-catolica.jpg",
      titulo: "Biblia sagrada",
      autor: "varios",
    },
    {
      capa: "https://kbimages1-a.akamaihd.net/3b759ac0-1cbf-4573-8bd8-2929cd3c432d/353/569/90/False/biblia-sagrada-catolica.jpg",
      titulo: "Biblia sagrada",
      autor: "varios",
    },
  ];

  //-----------------------------

  const [categoria, setCategoria] = useState("");
  const { width, height } = useWindowDimensions();

  useEffect(() => {
    fetch("https://livraria-apirest.herokuapp.com/livros")
      .then((res) => res.json())
      .then((res) => atualizarLivros(res));
  }, [livros]);

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

        <section
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
        </section>
      </main>
    </div>
  );
}
