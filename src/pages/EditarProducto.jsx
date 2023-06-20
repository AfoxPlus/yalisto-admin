import { navLinkState } from "../helpers/navLinkState";
import { ButtonLogout, FormProducto } from "../ui/components";

export const EditarProducto = () => {
  navLinkState("#link_productos");

  return (
    <>
      <div className="flex-space-between">
        <div className="ruta">
          <p>
            Productos / <span>Editar</span>
          </p>
        </div>
        <ButtonLogout />
      </div>
      <div className="flex-space-between">
        <h1>Editar Producto</h1>
      </div>
      <FormProducto textButton={"Actualizar"} />
    </>
  );
};
