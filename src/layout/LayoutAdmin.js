import React from 'react'
import SideBarAdmin from '../component/SideBarAdmin'
import NavbarAdmin from '../component/NavbarAdmin'
import { Outlet } from 'react-router-dom'

const LayoutAdmin = () => {
    return (
        <div>
            <main class="content">
                <SideBarAdmin />
                <NavbarAdmin/>
                <Outlet/>
            </main>
        </div>

    )
}

export default LayoutAdmin