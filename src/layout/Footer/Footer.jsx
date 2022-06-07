import "./Footer.css";
import logo from "./../../assets/images/logoWhite.png";

export default function Footer() {
  return (
    <footer class="footer">
      <div class="footer__addr">
        <a target={"_blank"} href="https://github.com/C836/Livraria-Bluefish" class="footer__logo" >
          <img src={logo} alt="Bluefish" />
          <p>Bluefish livraria</p>
        </a>

        <h2>Contact</h2>

        <address>
          5534 Somewhere In. The World 22193-10212
          <br />
        </address>
      </div>

      <ul class="footer__nav">
        <li class="nav__item">
        </li>

        <li class="nav__item nav__item--extra">
          <h2 class="nav__title">Equipe</h2>

          <ul class="nav__ul nav__ul--extra">
            <li>
              <a href="https://www.linkedin.com/in/gabriel-lopes8/">Gabriel Lopes</a>
            </li>

            <li>
              <a href="https://www.linkedin.com/in/madalenabrito/">Madalena Brito</a>
            </li>

            <li>
              <a href="https://www.linkedin.com/in/tiagocpmedeiros/">Tiago Medeiros</a>
            </li>

            <li>
              <a href="https://www.linkedin.com/in/rafael-henrique-santos-b96a32216/">Rafael Henrique</a>
            </li>
          </ul>
        </li>

        <li class="nav__item">
          <h2 class="nav__title">Site</h2>

          <ul class="nav__ul">
            <li>
              <a href="#">Mais vendidos</a>
            </li>

            <li>
              <a href="#categorias">Categorias</a>
            </li>

            <li>
              <a href="#catalogo">Catálogo</a>
            </li>
          </ul>
        </li>
      </ul>

      <div class="legal">
        <a href="https://github.com/C836/Livraria-Bluefish/blob/main/LICENSE">&copy; 2022 All rights reserved.</a>
      </div>
    </footer>
  );
}
