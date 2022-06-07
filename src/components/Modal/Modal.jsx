import Button from "./../Button/Button";
import styles from "./Modal.module.css";

export default function Modal(props) {
  const { active, texto, confirmar, voltar } = props;

  return (
    <div
      className={styles.Modal}
      style={{ display: active ? "inline-block" : "none" }}
    >
      <p>{texto}</p>
      <span>
        {voltar && <Button texto={"Voltar"} border={"10px"} onClick={voltar} />}
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
