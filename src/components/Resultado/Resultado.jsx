import styles from "./Resultado.module.css";
import Detalhes_Livro from "../Detalhes_Livro/Detalhes_Livro";
import { useState } from "react";

export default function Resultado(props) {
  const { resultClick } = props;

  const { id, capa, titulo, autor, preco } = props;

  return (
    <div className={styles.Resultado} onClick={resultClick} id={id}>
      <figure>
        <img src={capa} />
      </figure>

      <aside>
        <h1>{titulo.length > 30 ? titulo.slice(0, 30) + "..." : titulo}</h1>
        <p>{autor}</p>
        <h2>R${Number(String(preco).replace(",", ".")).toFixed(2)}</h2>
      </aside>
    </div>
  );
}
