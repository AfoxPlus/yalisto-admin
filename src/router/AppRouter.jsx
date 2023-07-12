import React from 'react'
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { Login } from '../pages';
import { ChildDashboardRoutes } from './ChildDashboardRoutes';
import { DashBoardRoutes } from './DashBoardRoutes';
import { PrivateRouter } from './PrivateRouter';
import { PublicRouter } from './PublicRouter';

const routes = [
  {
    path: "/login",
    element: <PublicRouter> <Login/> </PublicRouter>
},
{
    path: "/",
    element: <PrivateRouter> <DashBoardRoutes/> </PrivateRouter>,
    children: ChildDashboardRoutes
}
]

const router = createBrowserRouter(routes, { basename: import.meta.env.DEV ? '/' : '/yalisto-admin/' })


export const AppRouter = () => {
  return (
    <RouterProvider router={router}/>
  )
}
