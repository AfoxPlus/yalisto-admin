import React from 'react'
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { Login } from '../pages';
import { ChildDashboardRoutes } from './ChildDashboardRoutes';
import { DashBoardRoutes } from './DashBoardRoutes';
import { PrivateRouter } from './PrivateRouter';
import { PublicRouter } from './PublicRouter';

const router = createBrowserRouter([
    {
        path: "/login",
        element: <PublicRouter> <Login/> </PublicRouter>
    },
    {
        path: "/",
        element: <PrivateRouter> <DashBoardRoutes/> </PrivateRouter>,
        children: ChildDashboardRoutes
    }
])


export const AppRouter = () => {
  return (
    <RouterProvider router={router}/>
  )
}
