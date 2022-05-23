import styles from "./Display.module.css";

export default function Display(props) {
  return (
    <div className={styles.Display}>
      <figure>
        <img src={props.imagem} alt={props.titulo} />
      </figure>
      <article>
        <h1>{props.titulo}</h1>
        <p>{props.autor}</p>
      </article>
    </div>
  );
}
