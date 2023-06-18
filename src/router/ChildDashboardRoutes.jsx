import { Navigate } from "react-router-dom";
import { Letrero, Platos, Productos } from "../pages";
import { AgregarPlato } from "../pages/AgregarPlato";

export const ChildDashboardRoutes = [
    {
        index: true,
        element: <Navigate to={'/letrero'}/>
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
]