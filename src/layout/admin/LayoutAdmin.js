import React from 'react';
import NavbarAdmin from '../../components/admin/NavbarAdmin';
import SideMenuBarAdmin from '../../components/admin/SideMenuBarAdmin';
import { Outlet } from 'react-router-dom';
import FooterAdmin from '../../components/admin/FooterAdmin';
import { localvalue } from '../../utlis/storage/localvalue';
import { typeadmin } from '../../utlis/storage/account';
import NavbarItemCandidat from '../../components/admin/candidat/NavbarItemCandidat';
import NavbarItemEmployeur from '../../components/admin/employer/NavbarItemEmployeur';

const LayoutAdmin = () => {
  var typeAdmin  = localStorage.getItem(localvalue.typeAdmin);
  var emailAdmin = localStorage.getItem(localvalue.candidat.emailCandidat);
  var tokenAdmin =  localStorage.getItem(localvalue.candidat.tokenCandidat);
  var dataItem = {
    emailAdmin,
    typeAdmin,
    tokenAdmin
  }
  return (
    <div>
      <SideMenuBarAdmin />
      <div class="main-dashboard-content d-flex flex-column">
        <NavbarAdmin data={dataItem}/>
        <Outlet />
        <FooterAdmin/>
      </div>
    </div>
  )
}

export default LayoutAdmin;