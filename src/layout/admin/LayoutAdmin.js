import React from 'react';
import SideBarAdmin from '../../components/admin/SideBarAdmin';
import NavbarAdmin from '../../components/admin/NavbarAdmin';
import { Outlet } from 'react-router-dom';

const LayoutAdmin = () => {
  return (
    <div>
      <SideBarAdmin/>
      <NavbarAdmin/>
      <Outlet/>
    </div>
  )
}

export default LayoutAdmin;