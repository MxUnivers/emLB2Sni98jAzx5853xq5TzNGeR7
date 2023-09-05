import React from 'react'
import NabbarHidden from '../components/NabbarHidden'
import NavbarWeb from '../components/NavbarWeb'
import { Outlet } from 'react-router-dom'
import DarkCompo from '../components/DarkCompo'
import FooterWeb from '../components/FooterWeb'

const Layout = () => {
  return (
    <>
    {/*<NabbarHidden/> */}
    <header>
    <NavbarWeb/>
    </header>
    
    {/*<DarkCompo/> */}
    <Outlet/>
    <FooterWeb/>
    </>
  )
}

export default Layout