import { useEffect, useState } from "react";
import styles from "./Anuncio.module.css";
import Button from "../Button/Button";

export default function Anuncio(props) {
  const [active, setActive] = useState(false);
  const [background, setBackground] = useState(false);
  const [livro, setLivro] = useState([]);

  const handleClickVoltar = (e) => {
    e.preventDefault()
    setBackground(false);
    setActive(false);
    props.setClicked(false);
  };

  const handleClickAnunciar = (e) => {
    e.preventDefault()
    alert("venda");
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
          <img src="https://www.maketuwetlands.org.nz/wp-content/uploads/2018/09/placeholder_portrait-1.jpg" />
        </figure>

        <form>
          <input name="titulo" placeholder="Titulo" />
          <input name="autor" placeholder="Autor" />
          <input name="capa" placeholder="Capa (URL)" />
          <input name="preco" placeholder="Preço do livro à vista" />
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
              onClick={handleClickAnunciar}
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
