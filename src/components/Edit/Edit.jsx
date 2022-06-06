import { useState } from "react";

import styles from "./Edit.module.css";
import pencil from "./../../assets/images/pencil.svg";
import Anuncio from "../Anuncio/Anuncio";

export default function Edit(props) {
  const { info, voltar } = props;
  const [clicked, setClicked] = useState(false);

  const handleEdit = (e) => {
      console.log(info[0].id)
    setClicked(true);
  };

  return (
    <>
      <div className={styles.Edit}>
        <img onClick={handleEdit} src={pencil} />
      </div>

      <Anuncio info={info[0]} clicked={clicked} setClicked={setClicked} />
    </>
  );
}
