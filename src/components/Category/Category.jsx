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
  return (
    <div className={styles.Category}>
      <img src={props.icone} />
      <p>{props.nome}</p>
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
    categoria: "Ficçao científica",
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
