import React from 'react'
import NavbarWeb from '../components/NavbarWeb'
import { Outlet } from 'react-router-dom'
import FooterWeb from '../components/FooterWeb'



const Layout = () => {
  
  return (
    <>
      {/*<NabbarHidden/> */}
      <header>
        <NavbarWeb />
      </header>

      {/*<DarkCompo/> */}
      <Outlet />
      <FooterWeb />
    </>
  )
}

export default Layout