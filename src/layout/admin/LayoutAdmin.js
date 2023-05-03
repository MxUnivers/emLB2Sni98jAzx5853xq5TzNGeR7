import React, { useEffect } from 'react';
import NavbarAdmin from '../../components/admin/NavbarAdmin';
import SideMenuBarAdmin from '../../components/admin/SideMenuBarAdmin';
import { Navigate, Outlet } from 'react-router-dom';
import FooterAdmin from '../../components/admin/FooterAdmin';
import { localvalue } from '../../utlis/storage/localvalue';
import { typeadmin } from '../../utlis/storage/account';
import { routing } from '../../utlis/routing';

const LayoutAdmin = () => {

  var typeAdmin = localStorage.getItem(localvalue.typeAdmin);
  var emailAdmin;
  var tokenAdmin;

  // candidat
  useEffect(() => {
    if (typeAdmin == typeadmin.candidat) {
      emailAdmin = localStorage.getItem(localvalue.candidat.emailCandidat);
      tokenAdmin = localStorage.getItem(localvalue.candidat.tokenCandidat);
    } else {
      emailAdmin = localStorage.getItem(localvalue.emloyeur.emailEmployeur);
      tokenAdmin = localStorage.getItem(localvalue.emloyeur.tokenEmployeur);
    }
  })


  var dataItem = {
    emailAdmin,
    typeAdmin,
    tokenAdmin
  }


  return (
    <div>
      <SideMenuBarAdmin />
      <div class="main-dashboard-content d-flex flex-column">
        <NavbarAdmin data={dataItem} />
        <Outlet />
        <FooterAdmin />
      </div>
    </div>
  )

}

export default LayoutAdmin;