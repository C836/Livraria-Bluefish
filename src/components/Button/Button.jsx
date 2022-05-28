import styles from "./Button.module.css";
import cart from "./../../assets/images/cart.svg";

export default function Button(props) {
  return (
    <button
      onClick={props.onClick}
      className={styles.Button}
      style={{
        color: props.cor,
        backgroundColor: props.backColor,
        borderRadius: props.border,
      }}
    >
      {props.type === "addTo" ? (
        <img className={styles.ButtonIcon} src={cart} />
      ) : (
        ""
      )}
      {props.texto}
    </button>
  );
}
