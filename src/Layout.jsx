import React from 'react'
import Navbar from './Componants/Navbar/Navbar'
import { Outlet } from 'react-router-dom'
import Footer from './Pages/Footer/Footer'

function Layout() {
  return (
    <div>
      <Navbar />
      <Outlet />
      <Footer />
    </div>
  )
}

export default Layout
