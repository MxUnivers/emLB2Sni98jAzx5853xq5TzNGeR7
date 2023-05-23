import React from 'react';
import { Outlet } from 'react-router-dom';
import HeaderWeb from '../../components/web/HeaderWeb';

const LayoutWeb = () => {
    return (
        <div>
            <HeaderWeb/>
            <div class="pt-28">
            <Outlet/>
            </div>
            
        </div>
    )
}

export default LayoutWeb;