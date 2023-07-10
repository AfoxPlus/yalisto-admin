import { useState, useEffect } from "react";
import { Message } from "../ui/components";
import { useForm, useAuthStore } from "../hooks";
import Swal from "sweetalert2";

const loginFormFields = {
  identificador: "",
};

export function Login() {
  const { identificador, onInputChange, onResetForm } = useForm(loginFormFields);
  const [showErrorMessage, setShowErrorMessage] = useState(false);
  const { startLogin, errorMessage } = useAuthStore();

  const loginSubmit = (e) => {
    e.preventDefault();
    if (identificador.trim().length === 0) {
      setShowErrorMessage(true);
      setTimeout(() => {
        setShowErrorMessage(false);
      }, 3000);
      return;
    }
    startLogin({ key: identificador });
    onResetForm();
  };

  useEffect(() => {
    if (errorMessage !== undefined) {
      Swal.fire("Ocurrió un problema", errorMessage, "error");
    }
  }, [errorMessage]);

  return (
    <div className="container-login">
      <form onSubmit={loginSubmit}>
        <div className="box-login">
          <h1>YaListo - Administrador</h1>
          <p>Gestiona tus productos</p>
          <input
            className="input-login"
            type="text"
            placeholder="Identificador del establecimiento"
            name="identificador"
            value={identificador}
            onChange={onInputChange}
          />
          {showErrorMessage && <Message mensaje={"Campo Incompleto"} />}
          <button className="login-btn">Entrar</button>
        </div>
      </form>
    </div>
  );
}
