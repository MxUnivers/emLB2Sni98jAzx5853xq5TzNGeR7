
import NavbarAdmin from '../../components/admin/NavbarAdmin';
import SideMenuBarAdmin from '../../components/admin/SideMenuBarAdmin';
import { Navigate, Outlet } from 'react-router-dom';
import FooterAdmin from '../../components/admin/FooterAdmin';
import { localvalue } from '../../utlis/storage/localvalue';
import { typeadmin } from '../../utlis/storage/account';
import HeaderWeb from '../../components/web/HeaderWeb';

const LayoutAdmin = () => {

  var typeAdmin = localStorage.getItem(localvalue.typeAdmin);
  var emailAdmin;
  var tokenAdmin;

  // candidat
  if (typeAdmin == typeadmin.candidat) {
    emailAdmin = localStorage.getItem(localvalue.candidat.emailCandidat);
    tokenAdmin = localStorage.getItem(localvalue.candidat.tokenCandidat);
  } else if (typeAdmin == typeadmin.employeur) {
    emailAdmin = localStorage.getItem(localvalue.emloyeur.emailEmployeur);
    tokenAdmin = localStorage.getItem(localvalue.emloyeur.tokenEmployeur);
  }
  else {
    return;
  }
  var dataItem = {
    emailAdmin,
    typeAdmin,
    tokenAdmin
  }

  if (tokenAdmin == null || "") {
    return (
      <Navigate to={'/'} />
    )
  }
  return (
    <div>
    
    

      <SideMenuBarAdmin />
      <div class="main-dashboard-content d-flex flex-column">
        {
          /*
          <NavbarAdmin data={dataItem} />
          */
        }
        <HeaderWeb/>
        <Outlet />
        <FooterAdmin />
      </div>
    </div>
  )

}

export default LayoutAdmin;