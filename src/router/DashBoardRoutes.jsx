import React from 'react'
import { Outlet } from 'react-router-dom';
import { Navbar } from "../ui/components";

export const DashBoardRoutes = () => {
  return (
    <div className='container-dashboard'>
        <Navbar/> 
        <div className='container'>
            <Outlet/>
        </div>
    </div>
  )
}
