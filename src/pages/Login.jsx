import { useState } from "react";
import { Message } from "../ui/components";

export function Login() {
  const [inputValue, setInputValue] = useState("");
  const [showErrorMessage, setShowErrorMessage] = useState(false);

  const onclick = () => {
    if (inputValue.trim().length === 0) {
      setShowErrorMessage(true);
      setTimeout(() => {
        setShowErrorMessage(false);
      }, 3000);
      return;
    }
    alert("consultando");
    setInputValue("");
  };

  const onChange = ({ target }) => {
    setInputValue(target.value);
  };

  return (
    <div className="container-login">
      <div className="box-login">
        <h1>YaListo - Administrador</h1>
        <p>Gestiona tus productos</p>
        <input
          className="input-login"
          type="text"
          placeholder="Identificador del establecimiento"
          value={inputValue}
          onChange={onChange}
        />
        {showErrorMessage && <Message mensaje={"Campos Incompletos"} />}
        <button onClick={onclick} className="login-btn">
          Entrar
        </button>
      </div>
    </div>
  );
}
