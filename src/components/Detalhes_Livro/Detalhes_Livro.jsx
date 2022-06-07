import { useEffect, useState } from "react";
import getApi from "../../utils/getApi";
import styles from "./Detalhes_Livro.module.css";
import Star_Rating from "./../Star_Rating/Star_Rating";
import Button from "../Button/Button";
import isMounted from "./../../utils/isMounted";
import LoadingCircle from "../LoadingCircle/LoadingCircle";
import Delete from "../Delete/Delete";
import Edit from "../Edit/Edit";

export default function Detalhes_Livro(props) {
  const [active, setActive] = useState(false);
  const [background, setBackground] = useState(false);
  const [livro, setLivro] = useState([]);

  const handleClickVoltar = () => {
    setBackground(false);
    setActive(false);
    props.setClicked(false);
  };

  const isMount = isMounted();

  useEffect(() => {
    if (props.clicked === true) {
      if (!isMount) setBackground(true);
      getApi(props.id)
        .then((res) => setLivro(res))
        .then(() => {
          if (!isMount) {
            setActive(true);
          }
        });
    }
  }, [props.clicked]);

  const [idList, setIdList] = useState(null);

  useEffect(() => {
    if (localStorage.getItem("addedBooks")) {
      setIdList(localStorage.getItem("addedBooks").split(","));
    }
  }, []);

  return (
    livro[0] && (
      <>
        <div
          className={`
        ${styles.DetalhesBackground} 
        ${background ? "" : styles.disabled}`}
        >
          <LoadingCircle loaded={props.clicked} />
        </div>
        <div
          className={`
        ${styles.Detalhes_Livro} 
        ${active ? "" : styles.disabled}`}
        >
          {idList?.find((e) => e === String(livro[0].id)) && (
            <>
              <Delete id={livro[0].id} close={handleClickVoltar} />
              <Edit voltar={handleClickVoltar} info = {livro} />
            </>
          )}

          <figure>
            <img src={livro[0].capa} />
          </figure>

          <aside>
            <h1>{livro[0].titulo}</h1>
            <h3>{livro[0].autor}</h3>

            <figure className={styles.Rating}>
              {livro[0].avaliacao !== null && (
                <Star_Rating avaliacao={livro[0].avaliacao} />
              )}
            </figure>

            <h4 className={styles.Vendedor}>
              {"Vendido por:⠀"}
              {livro[0].vendedor ? (
                <div>{livro[0].vendedor}</div>
              ) : (
                <span>{"Livraria Bluefish ✓"}</span>
              )}
            </h4>

            <p>{livro[0].descricao}</p>

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
                texto={`Adicionar⠀-⠀R$${livro[0].preco}`}
                type={"addTo"}
              />
            </span>
          </aside>
        </div>
      </>
    )
  );
}
