import styles from "./Display_Destaque.module.css";

export default function Display_Destaque(props) {
  return (
    <div
      className={styles.Display_Destaque}
      style={{
        background: `linear-gradient(0deg, rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)), 
        url(${props.imagem})`,
        backgroundSize: "cover",
      }}
    >
      <section>
        <figure>
          <img src={props.capa} />
        </figure>
        <aside>
          <h1>{props.titulo}</h1>
          <p>{props.autor}</p>
        </aside>
      </section>
    </div>
  );
}
