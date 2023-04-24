import React from 'react';
import SideBarAdmin from '../component/SideBarAdmin'
import NavbarAdmin from '../component/NavbarAdmin'
import { Navigate, Outlet } from 'react-router-dom';
import { localvalue } from '../config/localvalue'
import { routing } from '../config/routing'

const LayoutAdmin = () => {

    var accesstoken = localStorage.getItem(localvalue.tokenAdmin);
    if (accesstoken == null) {
        return (<Navigate to={`/${routing.connexion.path}`} />)
    }
    else {
        return (
            <div>
                <main class="content">
                    <SideBarAdmin />
                    <NavbarAdmin />
                    <Outlet />
                </main>
            </div>

        )
    }
}

export default LayoutAdmin;