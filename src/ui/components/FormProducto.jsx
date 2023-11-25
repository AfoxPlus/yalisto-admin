import { useEffect, useState } from "react";
import { Link, Navigate, useNavigate } from "react-router-dom";
import Swal from "sweetalert2";
import { useProductStore } from "../../hooks";
import { useProductTypesStore } from "../../hooks/useProductTypesStore";

export const FormProducto = ({textButton}) => {

  const navigate = useNavigate()

  const { productTypes, startLoadingProductTypes } = useProductTypesStore()
  const { startCreateProduct, startUpdateProduct, activeProduct  } = useProductStore()
  
  useEffect(() => {
    startLoadingProductTypes()
  }, [])
  
  const [productValues, setProductValues] = useState({
    code: activeProduct?.code || '' ,
    name: activeProduct?.name || '' ,
    description: activeProduct?.description ||'',
    imageUrl: activeProduct?.imageUrl || '',
    stock: activeProduct?.stock || '',
    price: activeProduct?.price || '',
    productType: activeProduct?.productType.code || '',
    showInApp: activeProduct?.showInApp || false
  })

  const onInputChange = ({ target }) => {
    const { name, value } = target;
    setProductValues({
        ...productValues,
        [ name ]: value
    });
}

const onInputChangeCheckBox = ({target})=>{
    const {name, checked} = target;
    console.log(checked);
    setProductValues({
        ...productValues,
        [name]:checked
    })
}

  
    if (textButton==='Actualizar') {
        if (activeProduct===null){        
            // navigate('/productos')
            return <Navigate to={'/productos'}/>
        }
    }

  const newProductSubmit = async(e) => {
    e.preventDefault();
    if (productValues.productType.length === 0 || productValues.name.length < 4 || productValues.imageUrl.length < 5 || productValues.price.length <= 0 || productValues.stock <= 0) {
      Swal.fire('Datos Incompletos', 'Complete los datos requeridos', "warning")
      return;
    }

    await startCreateProduct(productValues)
    //* Validar si se registro el producto correctamente
    
    Swal.fire('Registro Exitoso', 'El producto se ha registrado correctamente.', "success")
    // Navega hacia la pagina de productos
    navigate('/productos')
  }

  const editProductSubmit = async(e) => {
    e.preventDefault();
    if (productValues.productType.length === 0 || productValues.name.length < 4 || productValues.imageUrl.length < 5 || productValues.price.length <= 0 || productValues.stock <= 0) {
      Swal.fire('Datos Incompletos', 'Complete los datos requeridos', "warning")
      return;
    }
    await startUpdateProduct(productValues)
  }

  return (
    <div className="container-form">
      <form onSubmit={(textButton==='Guardar') ? newProductSubmit : editProductSubmit} className="form">
        <div className="tipo">
          <label htmlFor="">Tipo</label>
          <select name="productType" id="tipo" onChange={onInputChange} value={productValues.productType}>
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
            value={productValues.name} 
            onChange={onInputChange} 
          />
        </div>

        <div className="descripcion">
          <label htmlFor="">Descripcion (Opcional)</label>
          <textarea
            name="description"
            id="descripcion"
            value={productValues.description}
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
            value={productValues.imageUrl}
            onChange={onInputChange}
            />
        </div>

        <div className="precio">
          <label htmlFor="">Precio</label>
          <input 
            type="text" 
            name="price" 
            id="precio" 
            value={productValues.price}
            onChange={onInputChange}
          />
        </div>

        <div className="cantidad">
          <label htmlFor="">Cantidad</label>
          <input 
            type="text" 
            name="stock" 
            id="cantidad" 
            value={productValues.stock}
            onChange={onInputChange}
          />
        </div>

        <div className="mostrar_en_aplicativo">
          <input 
            type="checkbox" 
            name="showInApp"
            checked={productValues.showInApp}
            onChange={onInputChangeCheckBox}
          />
          <label htmlFor="">Mostrar en el Aplicativo</label>
        </div>
        <div className="guardar-cancelar">
          <button type="submit">{textButton}</button>
          <Link to={'/productos'}>Cancelar</Link>
        </div>
      </form>
    </div>
  );
};
