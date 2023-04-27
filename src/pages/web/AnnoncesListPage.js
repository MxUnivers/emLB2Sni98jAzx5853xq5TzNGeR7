import React from 'react'
import AnnonceSearch from '../../components/web/annonce/AnnonceSearch';
import FooterWeb from '../../components/web/FooterWeb';
import AnnonceResultSearch from '../../components/web/annonce/AnnonceResultSearch';

const AnnoncesListPage = () => {
    return (
        <div>
            <AnnonceSearch />
            <AnnonceResultSearch/>
            <FooterWeb/>
        </div>
    )
}

export default AnnoncesListPage;