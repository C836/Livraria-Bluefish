import { useEffect, useRef, useState, useContext } from "react";
import styles from "./Anuncio.module.css";
import Button from "../Button/Button";
import imageExists from "./../../utils/filters/imageExists";
import { getId, getUser } from "../../utils/localStorage";
import { encrypt, decrypt } from "../../utils/encript";

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
    fetch((props.info ? "https://livraria-apistore.herokuapp.com/livros/update/" + props.info.id : "https://livraria-apistore.herokuapp.com/livros/add"), {
      method: props.info ? "PATCH" : "POST",
      headers: new Headers({
        "Content-Type": "application/json",
        "Accept": "application/json",
      }),
      body: JSON.stringify({
        titulo: e.target.titulo.value,
        autor: e.target.autor.value,
        capa: e.target.capa.value,
        preco: e.target.preco.value,
        vendedor: e.target.vendedor.value,
        genero: e.target.genero.value,
        descricao: e.target.descricao.value,
      }),
    })
      .then((res) => res.json())
      .then((res) =>
        {localStorage.setItem(
          "addedBooks",
          `${localStorage.getItem("addedBooks")},${res.lastID}`
        ); }
      );
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

        <form ref={anuncioRef} onSubmit={handleSubmit}>
          <input
            name="titulo"
            placeholder="Titulo"
            defaultValue={props.info?.titulo}
          />
          <input name="autor" placeholder="Autor" defaultValue={props.info?.autor} />
          <input
            onChange={handleImgSrcChange}
            name="capa"
            placeholder="Capa (URL)"
            defaultValue={props.info?.capa}
          />
          <input
            name="preco"
            placeholder="Preço do livro à vista"
            defaultValue={props.info?.preco}
          />
          <input
            name="vendedor"
            placeholder="Vendedor (nome)"
            defaultValue={props.info?.vendedor}
          />
          <input
            name="genero"
            placeholder="Gêneros (ex: Romance, aventura)"
            defaultValue={props.info?.genero}
          />
          <textarea
            name="descricao"
            placeholder="Descrição"
            defaultValue={props.info?.descricao}
          />

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
