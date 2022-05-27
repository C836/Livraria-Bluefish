import styles from "./Resultado.module.css";

export default function Resultado(props) {
  return (
    <div className={styles.Resultado}>
      <div>
        <figure>
          <img src={props.capa} />
        </figure>

        <aside>
          <h1>
            {props.titulo.length > 30
              ? props.titulo.slice(0, 30) + "..."
              : props.titulo}
          </h1>
          <p>{props.autor}</p>
          <h2>R${Number(props.preco.replace(",", ".")).toFixed(2)}</h2>
        </aside>
      </div>
    </div>
  );
}
