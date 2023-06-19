import React from "react";
import { navLinkState } from "../helpers/navLinkState";

export const NuevoProducto = () => {
  navLinkState("#link_productos");

  return (
    <>
      <div>Nuevo Producto</div>
      <h1>Plato</h1>
    </>
  );
};
