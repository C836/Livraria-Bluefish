import { useState } from "react";
import Anuncio from "../Anuncio/Anuncio";
import pencil from "./../../assets/images/pencil.svg";
import styles from "./Edit.module.css";

export default function Edit(props) {
  const { info, voltar } = props;
  const [clicked, setClicked] = useState(false);

  const handleEdit = (e) => {
    console.log(info[0].id);
    setClicked(true);
    voltar;
  };

  return (
    <>
      <div className={styles.Edit}>
        <img onClick={handleEdit} src={pencil} />
      </div>

      <Anuncio
        info={info[0]}
        voltar={voltar}
        clicked={clicked}
        setClicked={setClicked}
      />
    </>
  );
}
