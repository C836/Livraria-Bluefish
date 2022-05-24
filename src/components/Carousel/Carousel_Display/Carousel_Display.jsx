import Button from "./../../Button/Button";
import styles from "./Carousel_Display.module.css"

export default function Carousel_Display(props) {
  return (
    <section className={styles.Carousel_Display}>
      <div>
        <img src="https://http2.mlstatic.com/D_NQ_NP_617917-MLB32140972589_092019-O.jpg" />
      </div>
      <div>
        <h1>Lorem ipsum dolor sit</h1>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam tempus
          magna sed lectus feugiat pharetra. Ut dignissim facilisis diam, vitae
          tincidunt lacus rutrum rhoncus.
        </p>
        <Button texto={"Detalhes"} />
      </div>
    </section>
  );
}
