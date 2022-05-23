import image from './../../assets/images/logo.png'
import styles from './Navbar.module.css'
import { useContext } from 'react';


export default function Navbar(props) {
    const usuario = props.usuario[0];

    return(
        <nav>
            <section className=''>
                <section>
                    <img src={usuario.imagem} />
                </section>
            </section>
        </nav>
    )
};
