import logo from "./../../assets/images/logoWhite.png";
import styles from "./Navbar.module.css";
import { useContext } from "react";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";

export default function Navbar(props) {
  const usuario = props.usuario[0];

  return (
    <nav className={styles.Navbar}>
      <section>
        <Link to="/" className={styles.logo}>
          <img src={logo} alt="Bluefish" />
          <p>Bluefish livraria</p>
        </Link>

        <div>
          <Link to="/sobre">Sobre</Link>
          <p>Meus anúncios</p>
          <img className={styles.usuarioImagem} src={usuario.imagem} />
        </div>
      </section>
    </nav>
  );
}
