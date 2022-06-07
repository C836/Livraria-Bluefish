import { useEffect, useRef, useState, useContext } from "react";
import styles from "./Anuncio.module.css";
import Button from "../Button/Button";
import imageExists from "./../../utils/filters/imageExists";
import Loading from "./../../layout/Loading/Loading";
import Modal from "../Modal/Modal";

export default function Anuncio(props) {
  const { info, clicked, setClicked, voltar } = props;

  const [active, setActive] = useState({
    anuncio: false,
    background: false,
    loading: false,
    modal: false,
  });

  const { anuncio, background, loading, modal } = active;

  const anuncioRef = useRef(null);

  const handleClickVoltar = (e) => {
    e.preventDefault();
    setActive({ ...active, anuncio: false, background: false });
    setClicked(false);
    voltar();
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setActive({ ...active, anuncio: false, loading: true });

    const formValues = e.target;

    fetch(
      info
        ? "https://livraria-apistore.herokuapp.com/livros/update/" + info.id
        : "https://livraria-apistore.herokuapp.com/livros/add",
      {
        method: info ? "PATCH" : "POST",
        headers: new Headers({
          "Content-Type": "application/json",
          Accept: "application/json",
        }),
        body: JSON.stringify({
          titulo: formValues.titulo.value,
          autor: formValues.autor.value,
          capa: formValues.capa.value,
          preco: formValues.preco.value,
          vendedor: formValues.vendedor.value,
          genero: formValues.genero.value,
          descricao: formValues.descricao.value,
        }),
      }
    )
      .then((res) => {
        res.json();
        anuncioRef.current.reset();
        setActive({ ...active, anuncio: false, loading: false, modal: true });
      })
      .then((res) =>
        localStorage.setItem(
          "addedBooks",
          `${localStorage.getItem("addedBooks")},${res.lastID}`
        )
      );
  };

  useEffect(() => {
    if (clicked === true) {
      setActive({ ...active, anuncio: true, background: true });
    }
  }, [clicked]);

  const placeholderURL =
    "https://www.maketuwetlands.org.nz/wp-content/uploads/2018/09/placeholder_portrait-1.jpg";
  const [imgSrc, changeSrc] = useState(placeholderURL);

  const handleImgSrcChange = (e) => {
    imageExists(e.target.value, (callback) => {
      changeSrc(callback ? e.target.value : placeholderURL);
    });
  };

  const handleModelConfirm = () => {
    setActive({ ...active, background: false, modal: false });
    setClicked(false);
    voltar();
  };

  return (
    <>
      <Loading loaded={loading} />
      <div
        className={`
        ${styles.DetalhesBackground} 
        ${background ? "" : styles.disabled}`}
      />
      <Modal
        active={modal}
        confirmar={handleModelConfirm}
        texto={
          info
            ? "Registro atualizado com sucesso"
            : "Registro adicionado com sucesso"
        }
      />
      <div
        className={`
        ${styles.Anuncio}
        ${anuncio ? "" : styles.disabled}`}
      >
        <figure>
          <img src={imgSrc} />
        </figure>

        <form ref={anuncioRef} onSubmit={handleSubmit}>
          <input
            name="titulo"
            placeholder="Titulo"
            defaultValue={info?.titulo}
          />
          <input name="autor" placeholder="Autor" defaultValue={info?.autor} />
          <input
            onChange={handleImgSrcChange}
            name="capa"
            placeholder="Capa (URL)"
            defaultValue={info?.capa}
          />
          <input
            name="preco"
            placeholder="Preço do livro à vista"
            defaultValue={info?.preco}
          />
          <input
            name="vendedor"
            placeholder="Vendedor (nome)"
            defaultValue={info?.vendedor}
          />
          <input
            name="genero"
            placeholder="Gêneros (ex: Romance, aventura)"
            defaultValue={info?.genero}
          />
          <textarea
            name="descricao"
            placeholder="Descrição"
            defaultValue={info?.descricao}
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
