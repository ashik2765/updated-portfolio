import React from 'react'
import { Outlet } from 'react-router-dom'
import NavBar from '../Home/NavBar'
import Footer from '../Footer/Footer'

export default function MainLayout() {
    return (
        <div>
            <NavBar></NavBar>
            <Outlet></Outlet>
            <Footer></Footer>
        </div>
    )
}
