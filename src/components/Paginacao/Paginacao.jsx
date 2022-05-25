import styles from "./Paginacao.module.css";
import arrow from "./../../assets/images/arrow.svg";

export default function Paginacao(props) {
  const handleButtonClick = (e) => {
    const result = props.pagina + Number(e.target.name);
    props.setPagina(result !== 0 ? result : 1);
  };

  return (
    <section className={styles.Paginacao}>
      <img src={arrow} name={-1} onClick={handleButtonClick} className={props.pagina===1 ? styles.disabled : ''} />
      <p>Página {props.pagina}</p>
      <img src={arrow} name={+1} onClick={handleButtonClick} />
    </section>
  );
}
