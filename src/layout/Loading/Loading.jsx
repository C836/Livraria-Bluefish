import styles from "./Loading.module.css";
import logo from "./../../assets/images/logoWhite.png";
import LoadingCircle from "../../components/LoadingCircle/LoadingCircle";

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
