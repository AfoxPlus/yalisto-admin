import { Navigate } from "react-router-dom";
import { EditarProducto, Letrero, NuevoProducto, Platos, Productos } from "../pages";
import { AgregarPlato } from "../pages/AgregarPlato";

export const ChildDashboardRoutes = [
    {
        index: true,
        element: <Navigate to={'/productos'}/>
    },
    {
        path: "/letrero",
        element: <Letrero/>
    },
    {
        path: "/platos",
        element: <Platos/>
    },
    {
        path: "/productos",
        element: <Productos/>
    },
    {
        path: "/agregarPlato",
        element: <AgregarPlato/>
    },
    {
        path: "/nuevoProducto",
        element: <NuevoProducto/>
    },
    {
        path: "/editarProducto",
        element: <EditarProducto/>
    },
]