import styles from "./Filter.module.css";
import useWindowDimensions from "../../utils/useWindowDimensions";

export default function Filter(props) {
  const { width, height } = useWindowDimensions();

  const handleExibicaoChange = (e) => {
    props.setExibicao(e.target.value);
  };

  const handleOrdemChange = (e) => {
    props.setOrdem(e.target.value);
  };
  return (
    <div className={styles.Filter}>
      {width > 750 && (
        <p>
          {`Exibindo
        ${String(Number(props.exibicao) * (props.pagina - 1)).slice(0, -1)}1 - 
        ${props.exibicao * props.pagina} de 
        ${props.quantidade} itens`}
        </p>
      )}

      <section>
        <label htmlFor="exibicao">Exibir:⠀</label>
        <select
          onChange={handleExibicaoChange}
          value={props.exibicao}
          name="exibicao"
        >
          <option value={10}>10</option>
          <option value={20}>20</option>
          <option value={30}>30</option>
          <option value={40}>40</option>
        </select>

        <label htmlFor="ordem">⠀⠀⠀Ordenar por:⠀</label>
        <select onChange={handleOrdemChange} value={props.ordem} name="ordem">
          <option value={"new"}>Mais novos</option>
          <option value={"old"}>Mais antigos</option>
          <option value={"az"}>Alfabeticamente, A-Z</option>
          <option value={"za"}>Alfabeticamente, Z-A</option>
          <option value={"less"}>Menor preço</option>
          <option value={"more"}>Maior preço</option>
        </select>
      </section>
    </div>
  );
}
