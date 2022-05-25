import { useEffect, useLayoutEffect, useRef, useState } from "react";
import styles from "./Sobre.module.css";

export default function () {
  const [teste, setTeste ] = useState([])

  useEffect(()=>{
    fetch('https://livraria-apirest.herokuapp.com/livros')
    .then(res=>res.json())
    .then(res=> setTeste(res))
  },[])
  return (
    <div className={styles.Sobre}>
      <section className={styles.Header}>
        <h1>Levamos cultura para cada canto do Brasil!</h1>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer
          vulputate tristique orci quis ultrices. Mauris augue lectus, consequat
          at justo in, interdum vulputate turpis. Mauris ornare lectus eu elit
          ultrices dignissim. Sed eget metus tempus, dignissim quam vestibulum,
          ullamcorper mi.
        </p>
      </section>
    </div>
  );
}
