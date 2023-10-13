import React from 'react'
import { useState } from 'react';
import { localvalue } from '../../../utlis/storage/localvalue';
import { getAndCheckLocalStorage } from '../../../utlis/storage/localvalueFunction';
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { optionPays } from '../../../utlis/options/optionDivers';
import { toast } from 'react-toastify';
import { EntrepriseEditGenerale, useFetchEntreprise } from '../../../action/api/employeur/EmployeurAction';

const CompanyInfo = () => {

    var idEntreprise = getAndCheckLocalStorage(localvalue.recruteurID);

    const { isLoading, error, entreprise } = useFetchEntreprise(idEntreprise);


    const [full_name, setfull_name] = useState()
    const [username, setusername] = useState();
    const [firstname, setfirstname] = useState();
    const [lastname, setlastname] = useState();
    const [email, setemail] = useState();
    const [telephone, settelephone] = useState();
    const [title_post, settitle_post] = useState();
    const [dateNaissance, setdateNaissance] = useState();
    const [adresse, setadresse] = useState();
    const [pays, setpays] = useState();

    useEffect(() => {

        if (entreprise && entreprise.username) {
            setusername(entreprise.username)
        }
        if (entreprise && entreprise.full_name) {
            setfull_name(entreprise.full_name)
        }
        if (entreprise && entreprise.firstname) {
            setfirstname(entreprise.firstname)
        }
        if (entreprise && entreprise.lastname) {
            setlastname(entreprise.lastname)
        }
        if (entreprise && entreprise.email) {
            setemail(entreprise.email)
        }
        if (entreprise && entreprise.telephone) {
            settelephone(entreprise.telephone)
        }
        if (entreprise && entreprise.title_post) {
            settitle_post(entreprise.title_post)
        }
        if (entreprise && entreprise.dateNaissance) {
            setdateNaissance(entreprise.dateNaissance)
        }
        if (entreprise && entreprise.adresse) {
            setadresse(entreprise.adresse)
        }
        if (entreprise && entreprise.pays) {
            setpays(entreprise.pays)
        }
    }, [entreprise])




    // state de redux
    const dispatch = useDispatch();
    const loading = useSelector((state) => state.loading);
    const err = useSelector((state) => state.error);

    const handleSumit = (event) => {
        event.preventDefault();
        dispatch(EntrepriseEditGenerale(idEntreprise,
            full_name,username, firstname, lastname, dateNaissance, email,
            title_post, telephone, toast));
    }

    return (
        <div class="NM7Z1HBVjN_86WhEcXan">
            <div
                class="_Ybd3WwuTVljUT4vEaM3 mngKhi_Rv06PF57lblDI mveJTCIb2WII7J4sY22F _wYiJGbRZyFZeCc8y7Sf _YxZw_O8dWkTljptcO7z SWDELhWFjL8JxEtm91_o _1jTZ8KXRZul60S6czNi hD0sTTDgbxakubcHVW2X">
                <h3 class=" text-xl font-semibold hD0sTTDgbxakubcHVW2X vyo_A8gnQD1QWDPglr3h IOPhczRgtphv6NdNBDjj OyABRrnTV_kvHV7dJ0uE">
                    Information génerale
                </h3>
                <form onSubmit={handleSumit}>
                    <div class="xCPtuxM4_gihvpPwv9bX xcwgeeZbzBfzbYbc32HH Bcw8VuwRWYxPGjWjS6Ig">
                        <div class="_P4crYcwEj3d10LO5o8N DlUdveMmz1SkMYd217vD">
                            <label for="first-name"
                                class="_Vb9igHms0hI1PQcvp_S TR_P65x9ie7j6uxFo_Cs c8dCx6gnV43hTOLV6ks5 ezMFUVl744lvw6ht0lFe __9sbu0yrzdhGIkLWNXl OyABRrnTV_kvHV7dJ0uE">
                                Nom d{"'"}utilisateur</label>
                            <input value={username} onChange={(e) => { setusername(e.target.value) }} type="text" name="first-name" id="first-name"
                                class="fzhbbDQ686T8arwvi_bJ jtAJHOc7mn7b4IKRO59D pXhVRBC8yaUNllmIWxln vpDN1VEJLu5FmLkr5WCk __9sbu0yrzdhGIkLWNXl gx_pYWtAG2cJIqhquLbx mveJTCIb2WII7J4sY22F GdTcGtoKP5_bET3syLDl LceKfSImrGKQrtDGkpBV _Vb9igHms0hI1PQcvp_S t6gkcSf0Bt4MLItXvDJ_ olxDi3yL6f0gpdsOFDhx jqg6J89cvxmDiFpnV56r Mmx5lX7HVdrWCgh3EpTP H7KQDhgKsqZaTUouEUQL OyABRrnTV_kvHV7dJ0uE KpCMWe32PQyrSFbZVput q6szSHqGtBufkToFe_s5"
                                placeholder="Bonnie" required="" />
                        </div>
                        <div class="_P4crYcwEj3d10LO5o8N DlUdveMmz1SkMYd217vD">
                            <label for="first-name"
                                class="_Vb9igHms0hI1PQcvp_S TR_P65x9ie7j6uxFo_Cs c8dCx6gnV43hTOLV6ks5 ezMFUVl744lvw6ht0lFe __9sbu0yrzdhGIkLWNXl OyABRrnTV_kvHV7dJ0uE">
                                Nom de votre entreprise</label>
                            <input value={full_name} onChange={(e) => { setfull_name(e.target.value) }} type="text" name="first-name" id="first-name"
                                class="fzhbbDQ686T8arwvi_bJ jtAJHOc7mn7b4IKRO59D pXhVRBC8yaUNllmIWxln vpDN1VEJLu5FmLkr5WCk __9sbu0yrzdhGIkLWNXl gx_pYWtAG2cJIqhquLbx mveJTCIb2WII7J4sY22F GdTcGtoKP5_bET3syLDl LceKfSImrGKQrtDGkpBV _Vb9igHms0hI1PQcvp_S t6gkcSf0Bt4MLItXvDJ_ olxDi3yL6f0gpdsOFDhx jqg6J89cvxmDiFpnV56r Mmx5lX7HVdrWCgh3EpTP H7KQDhgKsqZaTUouEUQL OyABRrnTV_kvHV7dJ0uE KpCMWe32PQyrSFbZVput q6szSHqGtBufkToFe_s5"
                                placeholder="....." required="" />
                        </div>
                        <div class="_P4crYcwEj3d10LO5o8N DlUdveMmz1SkMYd217vD">
                            <label for="first-name"
                                class="_Vb9igHms0hI1PQcvp_S TR_P65x9ie7j6uxFo_Cs c8dCx6gnV43hTOLV6ks5 ezMFUVl744lvw6ht0lFe __9sbu0yrzdhGIkLWNXl OyABRrnTV_kvHV7dJ0uE">
                                Nom</label>
                            <input value={firstname} onChange={(e) => { setfirstname(e.target.value) }} type="text" name="first-name" id="first-name"
                                class="fzhbbDQ686T8arwvi_bJ jtAJHOc7mn7b4IKRO59D pXhVRBC8yaUNllmIWxln vpDN1VEJLu5FmLkr5WCk __9sbu0yrzdhGIkLWNXl gx_pYWtAG2cJIqhquLbx mveJTCIb2WII7J4sY22F GdTcGtoKP5_bET3syLDl LceKfSImrGKQrtDGkpBV _Vb9igHms0hI1PQcvp_S t6gkcSf0Bt4MLItXvDJ_ olxDi3yL6f0gpdsOFDhx jqg6J89cvxmDiFpnV56r Mmx5lX7HVdrWCgh3EpTP H7KQDhgKsqZaTUouEUQL OyABRrnTV_kvHV7dJ0uE KpCMWe32PQyrSFbZVput q6szSHqGtBufkToFe_s5"
                                placeholder="...." required="" />
                        </div>
                        <div class="_P4crYcwEj3d10LO5o8N DlUdveMmz1SkMYd217vD">
                            <label for="last-name"
                                class="_Vb9igHms0hI1PQcvp_S TR_P65x9ie7j6uxFo_Cs c8dCx6gnV43hTOLV6ks5 ezMFUVl744lvw6ht0lFe __9sbu0yrzdhGIkLWNXl OyABRrnTV_kvHV7dJ0uE">
                                Prénoms</label>
                            <input value={lastname} onChange={(e) => { setlastname(e.target.value) }} type="text" name="last-name" id="last-name"
                                class="fzhbbDQ686T8arwvi_bJ jtAJHOc7mn7b4IKRO59D pXhVRBC8yaUNllmIWxln vpDN1VEJLu5FmLkr5WCk __9sbu0yrzdhGIkLWNXl gx_pYWtAG2cJIqhquLbx mveJTCIb2WII7J4sY22F GdTcGtoKP5_bET3syLDl LceKfSImrGKQrtDGkpBV _Vb9igHms0hI1PQcvp_S t6gkcSf0Bt4MLItXvDJ_ olxDi3yL6f0gpdsOFDhx jqg6J89cvxmDiFpnV56r Mmx5lX7HVdrWCgh3EpTP H7KQDhgKsqZaTUouEUQL OyABRrnTV_kvHV7dJ0uE KpCMWe32PQyrSFbZVput q6szSHqGtBufkToFe_s5"
                                placeholder="..." required="" />
                        </div>


                        <div class="_P4crYcwEj3d10LO5o8N DlUdveMmz1SkMYd217vD">
                            <label for="address"
                                class="_Vb9igHms0hI1PQcvp_S TR_P65x9ie7j6uxFo_Cs c8dCx6gnV43hTOLV6ks5 ezMFUVl744lvw6ht0lFe __9sbu0yrzdhGIkLWNXl OyABRrnTV_kvHV7dJ0uE">
                                Telephone
                            </label>
                            <input value={telephone} onChange={(e) => { settelephone(e.target.value) }} type="number" name="address" id="address"
                                class="fzhbbDQ686T8arwvi_bJ jtAJHOc7mn7b4IKRO59D pXhVRBC8yaUNllmIWxln vpDN1VEJLu5FmLkr5WCk __9sbu0yrzdhGIkLWNXl gx_pYWtAG2cJIqhquLbx mveJTCIb2WII7J4sY22F GdTcGtoKP5_bET3syLDl LceKfSImrGKQrtDGkpBV _Vb9igHms0hI1PQcvp_S t6gkcSf0Bt4MLItXvDJ_ olxDi3yL6f0gpdsOFDhx jqg6J89cvxmDiFpnV56r Mmx5lX7HVdrWCgh3EpTP H7KQDhgKsqZaTUouEUQL OyABRrnTV_kvHV7dJ0uE KpCMWe32PQyrSFbZVput q6szSHqGtBufkToFe_s5"
                                placeholder="....." required="" />
                        </div>
                        <div class="_P4crYcwEj3d10LO5o8N DlUdveMmz1SkMYd217vD">
                            <label for="email"
                                class="_Vb9igHms0hI1PQcvp_S TR_P65x9ie7j6uxFo_Cs c8dCx6gnV43hTOLV6ks5 ezMFUVl744lvw6ht0lFe __9sbu0yrzdhGIkLWNXl OyABRrnTV_kvHV7dJ0uE">
                                Email
                            </label>
                            <input value={email} onChange={(e) => { setemail(e.target.value) }} type="email" name="email" id="email"
                                class="fzhbbDQ686T8arwvi_bJ jtAJHOc7mn7b4IKRO59D pXhVRBC8yaUNllmIWxln vpDN1VEJLu5FmLkr5WCk __9sbu0yrzdhGIkLWNXl gx_pYWtAG2cJIqhquLbx mveJTCIb2WII7J4sY22F GdTcGtoKP5_bET3syLDl LceKfSImrGKQrtDGkpBV _Vb9igHms0hI1PQcvp_S t6gkcSf0Bt4MLItXvDJ_ olxDi3yL6f0gpdsOFDhx jqg6J89cvxmDiFpnV56r Mmx5lX7HVdrWCgh3EpTP H7KQDhgKsqZaTUouEUQL OyABRrnTV_kvHV7dJ0uE KpCMWe32PQyrSFbZVput q6szSHqGtBufkToFe_s5"
                                placeholder="example@company.com" required="" />
                        </div>
                        <div class="_P4crYcwEj3d10LO5o8N DlUdveMmz1SkMYd217vD">
                            <label for="phone-number"
                                class="_Vb9igHms0hI1PQcvp_S TR_P65x9ie7j6uxFo_Cs c8dCx6gnV43hTOLV6ks5 ezMFUVl744lvw6ht0lFe __9sbu0yrzdhGIkLWNXl OyABRrnTV_kvHV7dJ0uE">
                                Naissance
                            </label>
                            <input value={dateNaissance} onChange={(e) => { setdateNaissance(e.target.value) }} type="date" name="phone-number" id="phone-number"
                                class="fzhbbDQ686T8arwvi_bJ jtAJHOc7mn7b4IKRO59D pXhVRBC8yaUNllmIWxln vpDN1VEJLu5FmLkr5WCk __9sbu0yrzdhGIkLWNXl gx_pYWtAG2cJIqhquLbx mveJTCIb2WII7J4sY22F GdTcGtoKP5_bET3syLDl LceKfSImrGKQrtDGkpBV _Vb9igHms0hI1PQcvp_S t6gkcSf0Bt4MLItXvDJ_ olxDi3yL6f0gpdsOFDhx jqg6J89cvxmDiFpnV56r Mmx5lX7HVdrWCgh3EpTP H7KQDhgKsqZaTUouEUQL OyABRrnTV_kvHV7dJ0uE KpCMWe32PQyrSFbZVput q6szSHqGtBufkToFe_s5"
                                placeholder="..." required="" />
                        </div>

                        <div class="_P4crYcwEj3d10LO5o8N DlUdveMmz1SkMYd217vD">
                            <label for="organization"
                                class="_Vb9igHms0hI1PQcvp_S TR_P65x9ie7j6uxFo_Cs c8dCx6gnV43hTOLV6ks5 ezMFUVl744lvw6ht0lFe __9sbu0yrzdhGIkLWNXl OyABRrnTV_kvHV7dJ0uE">
                                Titre du poste
                            </label>
                            <input value={title_post} onChange={(e) => { settitle_post(e.target.value) }} type="text" name="organization" id="organization"
                                class="fzhbbDQ686T8arwvi_bJ jtAJHOc7mn7b4IKRO59D pXhVRBC8yaUNllmIWxln vpDN1VEJLu5FmLkr5WCk __9sbu0yrzdhGIkLWNXl gx_pYWtAG2cJIqhquLbx mveJTCIb2WII7J4sY22F GdTcGtoKP5_bET3syLDl LceKfSImrGKQrtDGkpBV _Vb9igHms0hI1PQcvp_S t6gkcSf0Bt4MLItXvDJ_ olxDi3yL6f0gpdsOFDhx jqg6J89cvxmDiFpnV56r Mmx5lX7HVdrWCgh3EpTP H7KQDhgKsqZaTUouEUQL OyABRrnTV_kvHV7dJ0uE KpCMWe32PQyrSFbZVput q6szSHqGtBufkToFe_s5"
                                placeholder="...." required="" />
                        </div>
                        
                        <div class="_P4crYcwEj3d10LO5o8N DlUdveMmz1SkMYd217vD">

                            <div class="_P4crYcwEj3d10LO5o8N sm:col-full">
                                {
                                    loading ?
                                        <p class="animate-pulse">en cours ...</p>
                                        :
                                        <button
                                            class="py-1 bg-blue-700 y6GKdvUrd7vp_pxsFb57 g40_g3BQzYCOX5eZADgY YoPCmQ0E_V5W0GGmSIdm _dylIDxYTN3qgvD4U597 KmgKPWh7pHX4ztLneO0T ezMFUVl744lvw6ht0lFe mveJTCIb2WII7J4sY22F c8dCx6gnV43hTOLV6ks5 ZjWEEmDsdPvU2GdH53LK cexDVMRjens2nRrMcG96 ijrOHNoSVGATsWYKl4Id d8_fVOcgDmbt7UdpfeLK WuKugQzwTT7o1wwBck2R _ZsTMX_gz275093orLWM"
                                            type="submit">Mise a jour
                                        </button>
                                }
                            </div>
                        </div>
                    </div>
                </form>
            </div>





            {/*Password */}
            
        </div>
    )
}

export default CompanyInfo;
