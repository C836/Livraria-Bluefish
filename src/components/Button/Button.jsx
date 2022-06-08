import cart from "./../../assets/images/cart.svg";
import styles from "./Button.module.css";

export default function Button(props) {
  return (
    <button
      onClick={props.onClick}
      className={styles.Button}
      style={{
        color: props.cor,
        backgroundColor: props.backColor,
        borderRadius: props.border,
        height: props.height,
      }}
    >
      {props.type === "addTo" ? (
        <img className={styles.ButtonIcon} src={cart} />
      ) : (
        ""
      )}
      <p>{props.texto}</p>
    </button>
  );
}
