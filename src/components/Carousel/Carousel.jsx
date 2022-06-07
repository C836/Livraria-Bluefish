import "./Carousel.css";
import Carousel_Display from "./Carousel_Display/Carousel_Display";
import { useEffect, useState } from "react";

export default function Carousel(props) {
  const [carItems, setCar] = useState([]);
  const { setLivro, setClicked } = props;

  function getIndex(num) {
    return [num === 1 ? 4 : num - 1, num === 4 ? 1 : num + 1];
  }

  useEffect(() => {
    fetch("https://livraria-apistore.herokuapp.com/best")
      .then((res) => res.json())
      .then((res) => setCar(res));
  }, []);

  return (
    <section className={"CarouselWrapper"}>
      <section className="carousel" aria-label="Gallery">
        <ol className="carousel__viewport">
          {carItems.map((item, index) => (
            <li
              id={"carousel__slide" + (index + 1)}
              tabIndex="0"
              className="carousel__slide"
            >
              <Carousel_Display
                id={item.id}
                titulo={item.titulo}
                capa={item.capa}
                descricao={item.descricao}
                setLivro={setLivro}
                setClicked={setClicked}
              />
              <div className="carousel__snapper">
                <a
                  href={"#carousel__slide" + getIndex(index + 1)[0]}
                  className="carousel__prev"
                />
                <a
                  href={"#carousel__slide" + getIndex(index + 1)[1]}
                  className="carousel__next"
                />
              </div>
            </li>
          ))}
        </ol>
      </section>
      <aside className="carousel__navigation">
        <ol className="carousel__navigation-list">
          <li className="carousel__navigation-item">
            <a
              href="#carousel__slide1"
              className="carousel__navigation-button"
            ></a>
          </li>
          <li className="carousel__navigation-item">
            <a
              href="#carousel__slide2"
              className="carousel__navigation-button"
            ></a>
          </li>
          <li className="carousel__navigation-item">
            <a
              href="#carousel__slide3"
              className="carousel__navigation-button"
            ></a>
          </li>
          <li className="carousel__navigation-item">
            <a
              href="#carousel__slide4"
              className="carousel__navigation-button"
            ></a>
          </li>
        </ol>
      </aside>
    </section>
  );
}
