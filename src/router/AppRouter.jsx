import React from 'react'
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { Login } from '../pages';
import { ChildDashboardRoutes } from './ChildDashboardRoutes';
import { DashBoardRoutes } from './DashBoardRoutes';

const routes = [
  {
      path: "/login",
      element: <Login/>
  },
  {
      path: "/",
      element: <DashBoardRoutes/>,
      children: ChildDashboardRoutes
  }
]

const router = createBrowserRouter(routes, { basename: import.meta.env.DEV ? '/' : '/web-admin-yalisto/' })


export const AppRouter = () => {
  return (
    <RouterProvider router={router}/>
  )
}
