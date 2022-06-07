import styles from "./Display.module.css";

export default function Display(props) {
  const { setLivro, setClicked, id, imagem, titulo, autor, preco } = props;

  const handleDisplayClick = () => {
    setLivro(id);
    setClicked(true);
  };

  return (
    <div onClick={handleDisplayClick} className={styles.Display}>
      <figure>
        <img src={imagem} alt={titulo} />
      </figure>
      <article>
        <h1>
          {titulo.split("").length > 35 ? titulo.slice(0, 35) + "..." : titulo}
        </h1>
        <p>{autor}</p>
        <h2>R${Number(String(preco).replace(",", ".")).toFixed(2)}</h2>
      </article>
    </div>
  );
}
