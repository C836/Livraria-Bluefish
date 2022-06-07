import { useState } from "react";
import Modal from "../Modal/Modal";
import cross from "./../../assets/images/cross.svg";
import styles from "./Delete.module.css";

export default function Delete(props) {
  const { id, close } = props;

  const [confirm, setConfirm] = useState(false);
  const [modal, setModal] = useState(false);

  const handleModal = () => {
    setModal(true);
  };

  const handleDelete = () => {
    fetch("https://livraria-apistore.herokuapp.com/livros/delete/" + id, {
      method: "DELETE",
    })
      .then((res) => res.json())
      .then((res) => setModal(false), close);
  };

  const handleVoltar = () => {
    setModal(false);
  };

  return (
    <div className={styles.Delete}>
      <img onClick={handleModal} src={cross} />
      {modal ? (
        <Modal
          texto={"Tem certeza que deseja apagar este registro?"}
          confirmar={handleDelete}
          voltar={handleVoltar}
        />
      ) : (
        ""
      )}
    </div>
  );
}
