import React from 'react';
import NavbarAdmin from '../../components/admin/NavbarAdmin';
import SideMenuBarAdmin from '../../components/admin/SideMenuBarAdmin';
import { Outlet } from 'react-router-dom';
import FooterAdmin from '../../components/admin/FooterAdmin';

const LayoutAdmin = () => {
  return (
    <div>
      <SideMenuBarAdmin />
      <div class="main-dashboard-content d-flex flex-column">
        <NavbarAdmin />
        <Outlet />
        <FooterAdmin/>
      </div>
    </div>
  )
}

export default LayoutAdmin;