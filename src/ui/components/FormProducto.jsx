import React from "react";
import { useEffect } from "react";
import { useState } from "react";
import { Link } from "react-router-dom";
import Swal from "sweetalert2";
import { useForm, useProductStore } from "../../hooks";
import { useProductTypesStore } from "../../hooks/useProductTypesStore";

let newProductFields = {
  code: '',
  name: '',
  description: '',
  imageUrl: '',
  stock: '',
  price: '',
  productType: '',
  showInApp: false
}

export const FormProducto = ({textButton}) => {
  const { productTypes, startLoadingProductTypes } = useProductTypesStore()
  const { startCreateProduct, startUpdateProduct, activeProduct  } = useProductStore()
  
  useEffect(() => {
    startLoadingProductTypes()
    console.log('ejecutandose');
  }, [])
  
  console.log(activeProduct);

  let {onInputChange, onResetForm, onInputChangeCheckBox, name, description, imageUrl, stock, price, productType, showInApp, code } =  useForm(newProductFields);
  
    if (textButton==='Actualizar') {
        if (activeProduct===null){        
            Swal.fire('Error', 'No existen datos para editar, Dirigirse a la página de inicio', "error");
            return <Link className="btn-regresar" to={'/productos'}>Ir a productos</Link>
        }

          code = activeProduct.code
          name = activeProduct.name
          description = activeProduct.description
          imageUrl = activeProduct.imageUrl
          stock = activeProduct.stock
          productType = activeProduct.productType.code
          price = activeProduct.price
          showInApp = activeProduct.showInApp
          console.log(activeProduct.showInApp); 

    }

  const newProductSubmit = async(e) => {
    e.preventDefault();
    if (productType.length === 0 || name.length < 4 || imageUrl.length < 5 || price.length <= 0 || stock <= 0) {
      Swal.fire('Datos Incompletos', 'Complete los datos requeridos', "warning")
      return;
    }

    await startCreateProduct({name, description, imageUrl, stock, price, showInApp, productType})
    // console.log({name, description, imageUrl, stock, price, showInApp, productType});
  }

  const editProductSubmit = async(e) => {
    e.preventDefault();
    if (productType.length === 0 || name.length < 4 || imageUrl.length < 5 || price.length <= 0 || stock <= 0) {
      Swal.fire('Datos Incompletos', 'Complete los datos requeridos', "warning")
      return;
    }
    await startUpdateProduct({name, description, imageUrl, stock, price, showInApp, productType})
  }

  return (
    <div className="container-form">
      <form onSubmit={(textButton==='Guardar') ? newProductSubmit : editProductSubmit} className="form">
        <div className="tipo">
          <label htmlFor="">Tipo</label>
          <select name="productType" id="tipo" onChange={onInputChange}>
          <option key={-1} value=''>Seleccione una opción</option>
            {
              productTypes.map(({id, name}) => (
                <option key={id} value={id}>{name}</option>
                )
              )
            }
          </select>
        </div>

        <div className="nombre">
          <label htmlFor="">Nombre</label>
          <input 
            type="text" 
            name="name" 
            value={name} 
            onChange={onInputChange} 
          />
        </div>

        <div className="descripcion">
          <label htmlFor="">Descripcion (Opcional)</label>
          <textarea
            name="description"
            id="descripcion"
            value={description}
            onChange={onInputChange}
            cols="30"
            rows="10"
          ></textarea>
        </div>

        <div className="imagen_URL">
          <label htmlFor="">Imagen URL</label>
          <input 
            type="text" 
            name="imageUrl"
            value={imageUrl}
            onChange={onInputChange}
            />
        </div>

        <div className="precio">
          <label htmlFor="">Precio</label>
          <input 
            type="text" 
            name="price" 
            id="precio" 
            value={price}
            onChange={onInputChange}
          />
        </div>

        <div className="cantidad">
          <label htmlFor="">Cantidad</label>
          <input 
            type="text" 
            name="stock" 
            id="cantidad" 
            value={stock}
            onChange={onInputChange}
          />
        </div>

        <div className="mostrar_en_aplicativo">
          <input 
            type="checkbox" 
            name="showInApp"
            checked={showInApp}
            onChange={onInputChangeCheckBox}
          />
          <label htmlFor="">Mostrar en el Aplicativo</label>
        </div>
        <div className="guardar-cancelar">
          <button type="submit">{textButton}</button>
          <button type="button" onClick={onResetForm}>Cancelar</button>
        </div>
      </form>
    </div>
  );
};
