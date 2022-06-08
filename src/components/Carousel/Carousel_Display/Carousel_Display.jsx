import Button from "./../../Button/Button";
import styles from "./Carousel_Display.module.css";

export default function Carousel_Display(props) {
  const { id, titulo, capa, descricao, setLivro, setClicked } = props;

  const handleButtonClick = () =>{
    setLivro(id);
    setClicked(true);
  }

  return (
    <section className={styles.Carousel_Display}>
      <div>
        <img src={capa} />
      </div>
      <div>
        <h1>{titulo}</h1>
        <p className={styles.Descricao}>{descricao.slice(0, 200) + "..."}</p>
        <Button
        onClick={handleButtonClick}
        texto={"Detalhes"} />
      </div>
    </section>
  );
}
