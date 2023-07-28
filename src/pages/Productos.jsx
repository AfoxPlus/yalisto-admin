import { ButtonAdd, ButtonLogout, InputSearch } from "../ui/components";
import { ItemProducto } from "../ui/components/ItemProducto";
import { useProductStore } from "../hooks";
import { useEffect } from "react";

export const Productos = () => {

  const {products, startLoadingProducts} = useProductStore()

  useEffect(() => {
    startLoadingProducts()
  }, [])
  

  // console.log(products);

  return (
    <>
      <div className="flex-space-between">
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
            {products.map((product) => (
                <ItemProducto key={product.code} {...product}/>
            ))}
          </tbody>
        </table>
      </div>
    </>
  );
};
