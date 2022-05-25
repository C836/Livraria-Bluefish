import styles from "./Loading.module.css";
import logo from "./../../assets/images/logoWhite.png";

export default function Loading() {
  return (
    <div className={styles.Loading}>
      <figure>
          <img src={logo} />
      </figure>
    </div>
  );
}
