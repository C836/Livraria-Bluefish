import LoadingCircle from "../../components/LoadingCircle/LoadingCircle";
import styles from "./Loading.module.css";

export default function Loading(props) {
  const { loaded } = props;

  return (
    <div
      className={styles.Loading}
      style={{ display: loaded ? "inline-block" : "none" }}
    >
      <LoadingCircle loaded={loaded} />
    </div>
  );
}