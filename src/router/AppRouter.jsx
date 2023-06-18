import React from 'react'
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { Login } from '../pages';
import { ChildDashboardRoutes } from './ChildDashboardRoutes';
import { DashBoardRoutes } from './DashBoardRoutes';

const router = createBrowserRouter([
    {
        path: "/login",
        element: <Login/>
    },
    {
        path: "/",
        element: <DashBoardRoutes/>,
        children: ChildDashboardRoutes
    }
])


export const AppRouter = () => {
  return (
    <RouterProvider router={router}/>
  )
}
