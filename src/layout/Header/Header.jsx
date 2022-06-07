import Carousel from "../../components/Carousel/Carousel";
import styles from "./Header.module.css";

export default function Header(props) {
  const {setLivro, setClicked } = props

  return (
    <div className={styles.Header}>
      <Carousel setLivro={setLivro} setClicked={setClicked} />
    </div>
  );
}
