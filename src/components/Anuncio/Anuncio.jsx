import { useEffect, useRef, useState } from "react";
import styles from "./Anuncio.module.css";
import Button from "../Button/Button";
import imageExists from "./../../utils/filters/imageExists";
import { getId, getUser } from "../../utils/localStorage";
import { decrypt } from "../../utils/encript";

export default function Anuncio(props) {
  const [active, setActive] = useState(false);
  const [background, setBackground] = useState(false);
  const [livro, setLivro] = useState([]);

  const handleClickVoltar = (e) => {
    e.preventDefault();
    setBackground(false);
    setActive(false);
    props.setClicked(false);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    fetch("https://livraria-apistore.herokuapp.com/livros/add", {
      method: "POST",
      headers: new Headers({
        "Content-Type": "application/json",
        Accept: "application/json",
      }),
      body: JSON.stringify({
        isbn: getUser(),
        titulo: e.target.titulo.value,
        autor: e.target.autor.value,
        capa: e.target.capa.value,
        preco: e.target.preco.value,
        vendedor: e.target.vendedor.value,
        genero: e.target.genero.value,
        descricao: e.target.descricao.value,
      }),
    })
    // setBackground(false);
    // setActive(false);
    // props.setClicked(false);
  };

  useEffect(() => {
    if (props.clicked === true) {
      setBackground(true);
      setActive(true);
    }
  }, [props.clicked]);

  const placeholderURL =
    "https://www.maketuwetlands.org.nz/wp-content/uploads/2018/09/placeholder_portrait-1.jpg";
  const [imgSrc, changeSrc] = useState(placeholderURL);

  const handleImgSrcChange = (e) => {
    imageExists(e.target.value, (callback) => {
      changeSrc(callback ? e.target.value : placeholderURL);
    });
  };

  return (
    <>
      <div
        className={`
        ${styles.DetalhesBackground} 
        ${background ? "" : styles.disabled}`}
      />
      <div
        className={`
        ${styles.Anuncio} 
        ${active ? "" : styles.disabled}`}
      >
        <figure>
          <img src={imgSrc} />
        </figure>

        <form onSubmit={handleSubmit}>
          <input name="titulo" placeholder="Titulo" />
          <input name="autor" placeholder="Autor" />
          <input
            onChange={handleImgSrcChange}
            name="capa"
            placeholder="Capa (URL)"
          />
          <input name="preco" placeholder="Preço do livro à vista" />
          <input name="vendedor" placeholder='Vendedor (nome)' />
          <input name="genero" placeholder="Gêneros (ex: Romance, aventura)" />
          <textarea name="descricao" placeholder="Descrição" />

          <span className={styles.ButtonWrapper}>
            <Button
              onClick={handleClickVoltar}
              className={styles.Button}
              backColor={"rgb(200, 200, 200)"}
              border={"10px"}
              texto={"Voltar"}
            />

            <Button
              className={styles.Button}
              cor={"white"}
              backColor={"#1884c4"}
              border={"10px"}
              texto={`Anunciar`}
            />
          </span>
        </form>
      </div>
    </>
  );
}
