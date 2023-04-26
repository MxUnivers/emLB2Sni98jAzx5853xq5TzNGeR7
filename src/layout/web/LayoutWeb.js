import React from 'react';
import { Outlet } from 'react-router-dom';
import HeaderWeb from '../../components/web/HeaderWeb';

const LayoutWeb = () => {
    return (
        <div>
            <HeaderWeb/>
            <Outlet/>
        </div>
    )
}

export default LayoutWeb;