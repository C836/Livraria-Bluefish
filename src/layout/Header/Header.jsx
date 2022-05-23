import Carousel from "../../components/Carousel/Carousel";
import styles from "./Header.module.css";

export default function Header(props) {
  return (
    <div className={styles.Header}>

      <Carousel />
    </div>
  );
}
