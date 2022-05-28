import Button from "../Button/Button";
import login from "../../utils/login";

export default function Form(props) {

  return (
    <>
      <form onSubmit={props.cadastroSubmit}>
        <label>nome</label>
        <input type={"text"} name="nome" />
        <label>sobrenome</label>
        <input type={"text"} name="sobrenome" />
        <label>telefone</label>
        <input type={"text"} name="telefone" />
        <label>email</label>
        <input type={"text"} name="email" />
        <label>senha</label>
        <input type={"text"} name="senha" />
        <Button texto="Cadastro" />
      </form>

      <form onSubmit={props.loginSubmit}>
        <label>email</label>
        <input type={"text"} name="email" />
        <label>senha</label>
        <input type={"text"} name="senha" />
        <Button texto="Login" />
      </form>
    </>
  );
}
