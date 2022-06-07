import styles from "./LoadingCircle.module.css";

export default function LoadingCircle(props) {
  const { loaded } = props;

  return (
    <div
      className={styles.LoadingCircle}
      style={{ display: loaded ? "inline-block" : "none" }}
    />
  );
}
