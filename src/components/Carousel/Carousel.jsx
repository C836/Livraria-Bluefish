import "./Carousel.css";
import Carousel_Display from "./Carousel_Display/Carousel_Display";

export default function Carousel(props) {
  return (
    <section className={"CarouselWrapper"}>
      <section className="carousel" aria-label="Gallery">
        <ol className="carousel__viewport">
          <li id="carousel__slide1" tabIndex="0" className="carousel__slide">
            <Carousel_Display />
            <div className="carousel__snapper">
              <a href="#carousel__slide4" className="carousel__prev" />
              <a href="#carousel__slide2" className="carousel__next" />
            </div>
          </li>
          <li id="carousel__slide2" tabIndex="0" className="carousel__slide">
            <Carousel_Display />
            <div className="carousel__snapper">
              <a href="#carousel__slide1" className="carousel__prev" />
              <a href="#carousel__slide3" className="carousel__next" />
            </div>
          </li>
          <li id="carousel__slide3" tabIndex="0" className="carousel__slide">
            <Carousel_Display />
            <div className="carousel__snapper">
              <a href="#carousel__slide2" className="carousel__prev" />
              <a href="#carousel__slide4" className="carousel__next" />
            </div>
          </li>
          <li id="carousel__slide4" tabIndex="0" className="carousel__slide">
            <Carousel_Display />
            <div className="carousel__snapper">
              <a href="#carousel__slide3" className="carousel__prev" />
              <a href="#carousel__slide1" className="carousel__next" />
            </div>
          </li>
        </ol>
      </section>
      <aside onClick={(e)=>console.log(e)} className="carousel__navigation">
        <ol className="carousel__navigation-list">
          <li className="carousel__navigation-item">
            <a href="#carousel__slide1" className="carousel__navigation-button">
              Go to slide 1
            </a>
          </li>
          <li className="carousel__navigation-item">
            <a href="#carousel__slide2" className="carousel__navigation-button">
              Go to slide 2
            </a>
          </li>
          <li className="carousel__navigation-item">
            <a href="#carousel__slide3" className="carousel__navigation-button">
              Go to slide 3
            </a>
          </li>
          <li className="carousel__navigation-item">
            <a href="#carousel__slide4" className="carousel__navigation-button">
              Go to slide 4
            </a>
          </li>
        </ol>
      </aside>
    </section>
  );
}
