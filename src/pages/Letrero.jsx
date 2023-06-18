import { Link } from "react-router-dom";

export const Letrero = () => {

  return (
    <div className="container">
      <div className="search-logout">
        <input className="search" type="text" />
        <button className="logout">Salir</button>
      </div>
      <div className="title-add">
        <h1>Platos para hoy 13 de Junio 2023</h1>
        <Link to={"/agregarPlato"}>Agregar</Link>
      </div>
    </div>
  );
};
