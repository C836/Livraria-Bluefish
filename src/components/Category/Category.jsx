import {
  aventura,
  drama,
  ficcao,
  romance,
  terror,
  hq,
  infantis,
} from "./../../assets/images/categories/index";

import styles from "./Category.module.css"

export function Category(props) {
  const {categoria, setCategoria, icone, nome} = props
  const texto = nome.toLowerCase()

  const handleCategoria = () =>{
    setCategoria(nome.toLowerCase())
  }

  return (
    <div onClick={handleCategoria} className={`${styles.Category} ${categoria===texto && styles.selected}`}>
      <img className={categoria===texto && styles.selected} src={icone} />
      <p>{nome}</p>
    </div>
  );
}

export const Categories = [
  {
    categoria: "Aventura",
    icone: aventura,
  },
  {
    categoria: "Drama",
    icone: drama,
  },
  {
    categoria: "Ficção científica",
    icone: ficcao,
  },
  {
    categoria: "Romance",
    icone: romance,
  },
  {
    categoria: "Terror",
    icone: terror,
  },
  {
    categoria: "Hq",
    icone: hq,
  },
  {
    categoria: "Infantis",
    icone: infantis,
  },
];
