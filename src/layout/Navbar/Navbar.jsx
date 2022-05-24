import logo from './../../assets/images/logoWhite.png'
import styles from './Navbar.module.css'
import { useContext } from 'react';

export default function Navbar(props) {
    const usuario = props.usuario[0];

    return(
        <nav className={styles.Navbar}>
            <section>
                <div className={styles.logo}>
                    <img src={logo} alt="Bluefish" />
                    <p>Bluefish livraria</p>
                </div>
                <div>
                    <p>Meus anúncios</p>
                    <img className={styles.usuarioImagem} src={usuario.imagem} />
                </div>
            </section>
        </nav>
    )
};
