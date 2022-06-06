import styles from "./Modal.module.css";
import Button from "./../Button/Button";

export default function Modal(props) {
  const { texto, confirmar, voltar } = props;

  return (
    <div className={styles.Modal}>
      <p>{texto}</p>
      <span>
        <Button texto={"Voltar"} border={"10px"} onClick={voltar} />
        <Button
          texto={"Confirmar"}
          cor={"white"}
          backColor={"#1884c4"}
          border={"10px"}
          onClick={confirmar}
        />
      </span>
    </div>
  );
}
