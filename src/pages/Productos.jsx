import React from "react";
import { Link } from "react-router-dom";
import { ButtonAdd, ButtonLogout, InputSearch } from "../ui/components";
import { productos } from "../api/data";
import { ItemProducto } from "../ui/components/ItemProducto";

export const Productos = () => {
  return (
    <>
      <div className="search-logout">
        <InputSearch />
        <ButtonLogout />
      </div>
      <div className="title-add">
        <h1>Gestionar Productos</h1>
        <ButtonAdd />
      </div>

      <div className="container-table">
        <table>
          <thead>
            <tr>
              <th>Identificador</th>
              <th>Tipo</th>
              <th>Nombre</th>
              <th>Descripción</th>
              <th>Imagen URL</th>
              <th>Precio</th>
              <th>Cantidad</th>
              <th>Opciones</th>
            </tr>
          </thead>
          <tbody>
            {productos.map((producto) => (
                <ItemProducto key={producto.id} {...producto}/>
            ))}
          </tbody>
        </table>
      </div>
    </>
  );
};
