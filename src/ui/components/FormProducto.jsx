import React from "react";

export const FormProducto = ({textButton}) => {
  return (
    <div className="container-form">
      <form action="" className="form">
        <div className="tipo">
          <label htmlFor="">Tipo</label>
          <select name="tipo" id="tipo">
            <option value="">Carta</option>
            <option value="">Menu</option>
            <option value="">Bebida</option>
          </select>
        </div>

        <div className="nombre">
          <label htmlFor="">Nombre</label>
          <input type="text" name="nombre" />
        </div>

        <div className="descripcion">
          <label htmlFor="">Descripcion</label>
          <textarea
            name="descripcion"
            id="descripcion"
            cols="30"
            rows="10"
          ></textarea>
        </div>

        <div className="imagen_URL">
          <label htmlFor="">Imagen URL</label>
          <input type="text" name="imagen_URL" />
        </div>

        <div className="precio">
          <label htmlFor="">Precio</label>
          <input type="text" name="precio" id="precio" />
        </div>

        <div className="cantidad">
          <label htmlFor="">Cantidad</label>
          <input type="text" name="cantidad" id="cantidad" />
        </div>

        <div className="mostrar_en_aplicativo">
          <input type="checkbox" />
          <label htmlFor="">Mostrar en el Aplicativo</label>
        </div>
        <div className="guardar-cancelar">
          <button>{textButton}</button>
          <button>Cancelar</button>
        </div>
      </form>
    </div>
  );
};
