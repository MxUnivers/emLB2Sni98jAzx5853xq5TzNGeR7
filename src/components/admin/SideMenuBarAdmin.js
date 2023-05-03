import React from 'react'
import { routing } from '../../utlis/routing';
import SideMenuBarCandidatAdmin from './candidat/SideMenuBarCandidatAdmin';
import SideMenuBarEmployeurAdmin from './employer/SideMenuBarEmployeurAdmin';
import { localvalue } from '../../utlis/storage/localvalue';

const SideMenuBarAdmin = () => {
    // var typeAdmin = localStorage.getItem(localvalue.typeAdmin);
    var typeAdmin = "employeur";
    return (
        <div class="sidemenu-area">
            <div class="sidemenu-header">
                <a href="candidates-dashboard.html" class="navbar-brand d-flex align-items-center">
                    <img src="assets/images/logo.png" alt="image" />
                </a>

                <div class="responsive-burger-menu d-block d-lg-none">
                    <span class="top-bar"></span>
                    <span class="middle-bar"></span>
                    <span class="bottom-bar"></span>
                </div>
            </div>



            {/* Side bar pour le  Candidat */}
            {
                /*
                typeAdmin == "candidat" ?
                    <SideMenuBarCandidatAdmin /> :
                    null
                */
            }
            {
                typeAdmin == "employeur" ?
                    <SideMenuBarEmployeurAdmin />
                    : null
            }

        </div>
    )
}

export default SideMenuBarAdmin;