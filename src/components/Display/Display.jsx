import styles from "./Display.module.css";

export default function Display(props) {
  return (
    <div className={styles.Display}>
      <figure>
        <img src={props.imagem} alt={props.titulo} />
      </figure>
      <article>
        <h1>{props.titulo.split('').length>35? props.titulo.slice(0, 35)+'...' : props.titulo}</h1>
        <p>{props.autor}</p>
        <h2>R${props.preco.toFixed(2)}</h2>
      </article>
    </div>
  );
}
