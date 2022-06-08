import { useEffect, useState, useContext } from "react";
import { LoadContext } from "../../App";
import "./Carousel.css";
import Carousel_Display from "./Carousel_Display/Carousel_Display";

export default function Carousel(props) {
  const { setLivro, setClicked } = props;
  const loaded = useContext(LoadContext)

  const [carItems, setCar] = useState([]);

  function getIndex(num) {
    return [num === 1 ? 4 : num - 1, num === 4 ? 1 : num + 1];
  }

  useEffect(() => {
    fetch("https://livraria-apistore.herokuapp.com/best")
      .then((res) => res.json())
      .then((res) => setCar(res));
  }, []);

  return (
    <section style={{display: !loaded && "none"}} className={"CarouselWrapper"}>
      <section className="carousel" aria-label="Gallery">
        <ol className="viewport">
          {carItems.map((item, index) => (
            <li
              id={"slide" + (index + 1)}
              tabIndex="0"
              className="slide"
            >
              <Carousel_Display
                id={item.id}
                titulo={item.titulo}
                capa={item.capa}
                descricao={item.descricao}
                setLivro={setLivro}
                setClicked={setClicked}
              />
              <div className="snapper">
                <a
                  href={"#slide" + getIndex(index + 1)[0]}
                  className="prev"
                />
                <a
                  href={"#slide" + getIndex(index + 1)[1]}
                  className="next"
                />
              </div>
            </li>
          ))}
        </ol>
      </section>
    </section>
  );
}
