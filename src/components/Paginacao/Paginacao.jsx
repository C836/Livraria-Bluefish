import arrow from "./../../assets/images/arrow.svg";
import styles from "./Paginacao.module.css";

export default function Paginacao(props) {
  const handleButtonClick = (e) => {
    const result = props.pagina + Number(e.target.name);
    props.setPagina(result);
  };

  return (
    <section className={styles.Paginacao}>
      <img
        src={arrow}
        name={-1}
        onClick={handleButtonClick}
        className={props.pagina === 1 ? styles.disabled : ""}
      />
      <p>Página {props.pagina}</p>
      <img
        src={arrow}
        name={+1}
        onClick={handleButtonClick}
        className={
          props.exibicao * props.pagina >= props.quantidade
            ? styles.disabled
            : ""
        }
      />
    </section>
  );
}
