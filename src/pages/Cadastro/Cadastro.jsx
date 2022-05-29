import { useState, useRef } from "react";
import Button from "../../components/Button/Button";
import Form from "../../components/Form/Form";
import login from "../../utils/login";
import storage from "../../utils/localStorage";

export default function Cadastro(props) {
  const handleCadastroSubmit = (e) => {
    e.preventDefault();
    fetch("https://livraria-apirest.herokuapp.com/clientes/add", {
      method: "POST",
      headers: new Headers({
        "Content-Type": "application/json",
        Accept: "application/json",
      }),
      body: JSON.stringify({
        nome: e.target.nome.value,
        sobrenome: e.target.sobrenome.value,
        email: e.target.email.value,
        telefone: e.target.telefone.value,
        senha: e.target.senha.value,
      }),
    }).then((data) => console.log("cadastrado"));
  };

  const handleLoginSubmit = (e) => {
    e.preventDefault();
    fetch("https://livraria-apirest.herokuapp.com/clientes/")
      .then((res) => res.json())
      .then((res) =>
        login(
          res.filter((obj) =>
            JSON.stringify(obj)
              .toLowerCase()
              .includes(e.target.email.value.toLowerCase())
          ),
          e.target.senha.value,
          (callback) => {
            storage(callback, "setLogin");
          }
        )
      );
  };

  return (
    <>
      <Form
        cadastroSubmit={handleCadastroSubmit}
        loginSubmit={handleLoginSubmit}
      />
    </>
  );
}
