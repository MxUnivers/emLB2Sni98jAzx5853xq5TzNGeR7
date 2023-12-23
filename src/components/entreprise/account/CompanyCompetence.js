import React from 'react'
import { useState } from 'react';
import Select from "react-select";
import { useDispatch, useSelector } from 'react-redux';
import { getAndCheckLocalStorage } from '../../../utlis/storage/localvalueFunction';
import { localvalue } from '../../../utlis/storage/localvalue';
import { useEffect } from 'react';
import { toast } from 'react-toastify';
import { EntrepriseEditCompetence, useFetchEntreprise } from '../../../action/api/employeur/EmployeurAction';
import { competences, languages_school, level_School, salaires_School, years_experience_school } from '../../../utlis/options/candidatOption';
import { employers, existence_entreprise, secteursActivite } from '../../../utlis/options/employeurOption';
import { optionPays } from '../../../utlis/options/optionDivers';



const CompanyCompetence = () => {

    var idCompany = getAndCheckLocalStorage(localvalue.recruteurID);

    const { isLoading, error, entreprise } = useFetchEntreprise(idCompany);



    const [selectCompetences, setselectCompetences] = useState();
    const [description, setdescription] = useState();
    const [selectLangues, setselectLangues] = useState();
    const [selecteursActivites, setselecteursActivites] = useState();
    const [years_experience, setyears_experience] = useState();
    const [title_post, settitle_post] = useState();
    const [paysEntreprise, setpaysEntreprise] = useState();
    const [employers_count, setEmployer_count] = useState();
    const [salaire, setsalaire] = useState();

    useEffect(() => {
        if (entreprise && entreprise.title_post) {
            settitle_post(entreprise.title_post)
        }
        if (entreprise && entreprise.secteur_activites) {
            setselectCompetences(entreprise.secteur_activites)
        }
        if (entreprise && entreprise.langues) {
            setselectLangues(entreprise.langues)
        }
        if (entreprise && entreprise.employers_count) {
            setEmployer_count(entreprise.employers_count)
        }
        if (entreprise && entreprise.dateNaissance_entreprise) {
            setyears_experience(entreprise.dateNaissance_entreprise)
        }
        if (entreprise && entreprise.salaire_capital) {
            setsalaire(entreprise.salaire_capital)
        }
        if (entreprise && entreprise.pays_entreprise) {
            setpaysEntreprise(entreprise.pays_entreprise)
        }
        if (entreprise && entreprise.description_entreprise) {
            setdescription(entreprise.description_entreprise)
        }
    }, [entreprise]);

    const handleSelectLang = (selectOptions) => {
        setselectLangues(selectOptions);
    }
    const handleSelectCompetence = (selectOptions) => {
        setselectCompetences(selectOptions);
    }


    // state de redux
    const dispatch = useDispatch();
    const loading = useSelector((state) => state.loading);
    const err = useSelector((state) => state.error);

    const handleSubmit = (event) => {
        event.preventDefault();
        dispatch(EntrepriseEditCompetence(idCompany, salaire, employers_count, paysEntreprise, title_post,selecteursActivites,selectLangues,description,toast));
    }


    return (
        <div
            class=" _Ybd3WwuTVljUT4vEaM3 mngKhi_Rv06PF57lblDI mveJTCIb2WII7J4sY22F _wYiJGbRZyFZeCc8y7Sf _YxZw_O8dWkTljptcO7z SWDELhWFjL8JxEtm91_o _1jTZ8KXRZul60S6czNi hD0sTTDgbxakubcHVW2X">
            <h3 class="hD0sTTDgbxakubcHVW2X vyo_A8gnQD1QWDPglr3h IOPhczRgtphv6NdNBDjj OyABRrnTV_kvHV7dJ0uE font-semibold">
                Profile de votre entreprise
            </h3>

            <form onSubmit={handleSubmit} >

                <div class="_P4crYcwEj3d10LO5o8N DlUdveMmz1SkMYd217vD my-3">
                    <label for="address"
                        class="_Vb9igHms0hI1PQcvp_S TR_P65x9ie7j6uxFo_Cs c8dCx6gnV43hTOLV6ks5 ezMFUVl744lvw6ht0lFe __9sbu0yrzdhGIkLWNXl OyABRrnTV_kvHV7dJ0uE">
                        Titre de votre poste dans votre entreprise
                    </label>
                    <input value={title_post} onChange={(e) => { settitle_post(e.target.value) }} type="text" name="address" id="address"
                        class="fzhbbDQ686T8arwvi_bJ jtAJHOc7mn7b4IKRO59D pXhVRBC8yaUNllmIWxln vpDN1VEJLu5FmLkr5WCk __9sbu0yrzdhGIkLWNXl gx_pYWtAG2cJIqhquLbx mveJTCIb2WII7J4sY22F GdTcGtoKP5_bET3syLDl LceKfSImrGKQrtDGkpBV _Vb9igHms0hI1PQcvp_S t6gkcSf0Bt4MLItXvDJ_ olxDi3yL6f0gpdsOFDhx jqg6J89cvxmDiFpnV56r Mmx5lX7HVdrWCgh3EpTP H7KQDhgKsqZaTUouEUQL OyABRrnTV_kvHV7dJ0uE KpCMWe32PQyrSFbZVput q6szSHqGtBufkToFe_s5"
                        placeholder="Titre du poste" required="" />
                </div>

                <div class="hD0sTTDgbxakubcHVW2X">
                    <label for="settings-language"
                        class="_Vb9igHms0hI1PQcvp_S TR_P65x9ie7j6uxFo_Cs c8dCx6gnV43hTOLV6ks5 ezMFUVl744lvw6ht0lFe __9sbu0yrzdhGIkLWNXl OyABRrnTV_kvHV7dJ0uE">
                        Secteur(s) de votre entreprise
                    </label>
                    <Select
                        isMulti
                        options={secteursActivite}
                        value={selectCompetences}
                        onChange={handleSelectCompetence}
                        placeholder="choix de vos compétences"
                        id="settings-language" name="countries"
                        class="jtAJHOc7mn7b4IKRO59D vpDN1VEJLu5FmLkr5WCk __9sbu0yrzdhGIkLWNXl gx_pYWtAG2cJIqhquLbx mveJTCIb2WII7J4sY22F GdTcGtoKP5_bET3syLDl LceKfSImrGKQrtDGkpBV _Vb9igHms0hI1PQcvp_S t6gkcSf0Bt4MLItXvDJ_ olxDi3yL6f0gpdsOFDhx jqg6J89cvxmDiFpnV56r Mmx5lX7HVdrWCgh3EpTP H7KQDhgKsqZaTUouEUQL OyABRrnTV_kvHV7dJ0uE KpCMWe32PQyrSFbZVput q6szSHqGtBufkToFe_s5"

                    />
                </div>



                <div class="hD0sTTDgbxakubcHVW2X">
                    <label for="settings-language"
                        class="_Vb9igHms0hI1PQcvp_S TR_P65x9ie7j6uxFo_Cs c8dCx6gnV43hTOLV6ks5 ezMFUVl744lvw6ht0lFe __9sbu0yrzdhGIkLWNXl OyABRrnTV_kvHV7dJ0uE">
                        Langues
                    </label>
                    <Select
                        isMulti
                        options={languages_school}
                        value={selectLangues}
                        onChange={handleSelectLang}
                        placeholder="choix de vos langues"
                        id="settings-language" name="countries"
                        class="jtAJHOc7mn7b4IKRO59D vpDN1VEJLu5FmLkr5WCk __9sbu0yrzdhGIkLWNXl gx_pYWtAG2cJIqhquLbx mveJTCIb2WII7J4sY22F GdTcGtoKP5_bET3syLDl LceKfSImrGKQrtDGkpBV _Vb9igHms0hI1PQcvp_S t6gkcSf0Bt4MLItXvDJ_ olxDi3yL6f0gpdsOFDhx jqg6J89cvxmDiFpnV56r Mmx5lX7HVdrWCgh3EpTP H7KQDhgKsqZaTUouEUQL OyABRrnTV_kvHV7dJ0uE KpCMWe32PQyrSFbZVput q6szSHqGtBufkToFe_s5"

                    />
                </div>


                <div class="EyjJPKD7jgGRBhaLpRVI">
                    <label for="settings-timezone"
                        class="_Vb9igHms0hI1PQcvp_S TR_P65x9ie7j6uxFo_Cs c8dCx6gnV43hTOLV6ks5 ezMFUVl744lvw6ht0lFe __9sbu0yrzdhGIkLWNXl OyABRrnTV_kvHV7dJ0uE">
                        Nombre d{"'"}employés
                    </label>
                    <select onChange={(e) => { setEmployer_count(e.target.value) }} id="settings-timezone" name="countries"
                        class="jtAJHOc7mn7b4IKRO59D vpDN1VEJLu5FmLkr5WCk __9sbu0yrzdhGIkLWNXl gx_pYWtAG2cJIqhquLbx mveJTCIb2WII7J4sY22F GdTcGtoKP5_bET3syLDl LceKfSImrGKQrtDGkpBV _Vb9igHms0hI1PQcvp_S t6gkcSf0Bt4MLItXvDJ_ olxDi3yL6f0gpdsOFDhx jqg6J89cvxmDiFpnV56r Mmx5lX7HVdrWCgh3EpTP H7KQDhgKsqZaTUouEUQL OyABRrnTV_kvHV7dJ0uE KpCMWe32PQyrSFbZVput q6szSHqGtBufkToFe_s5">
                        <option>-- Choix --</option>
                        {
                            isLoading ? (<div class="animate-pulse w-36 h-8 rounded-sm" />)
                                : error ? (<div>...</div>) :
                                    entreprise ?
                                        employers.map((item) => {
                                            return (
                                                <option selected={item == entreprise.employers_count ? true : false} value={item} >{item}</option>
                                            )
                                        })
                                        : null
                        }
                    </select>
                </div>




                <div class="EyjJPKD7jgGRBhaLpRVI">
                    <label for="settings-timezone"
                        class="_Vb9igHms0hI1PQcvp_S TR_P65x9ie7j6uxFo_Cs c8dCx6gnV43hTOLV6ks5 ezMFUVl744lvw6ht0lFe __9sbu0yrzdhGIkLWNXl OyABRrnTV_kvHV7dJ0uE">
                        Année d{"'"}existence (Entreprise)
                    </label>

                    <select onChange={(e) => { setyears_experience(e.target.value) }} id="settings-timezone" name="countries"
                        class="jtAJHOc7mn7b4IKRO59D vpDN1VEJLu5FmLkr5WCk __9sbu0yrzdhGIkLWNXl gx_pYWtAG2cJIqhquLbx mveJTCIb2WII7J4sY22F GdTcGtoKP5_bET3syLDl LceKfSImrGKQrtDGkpBV _Vb9igHms0hI1PQcvp_S t6gkcSf0Bt4MLItXvDJ_ olxDi3yL6f0gpdsOFDhx jqg6J89cvxmDiFpnV56r Mmx5lX7HVdrWCgh3EpTP H7KQDhgKsqZaTUouEUQL OyABRrnTV_kvHV7dJ0uE KpCMWe32PQyrSFbZVput q6szSHqGtBufkToFe_s5">
                        <option>-- Choix --</option>
                        {
                            isLoading ? (<div class="animate-pulse w-36 h-8 rounded-sm" />)
                                : error ? (<div>...</div>) :
                                    entreprise ?
                                        existence_entreprise.map((item) => {
                                            return (
                                                <option selected={item == entreprise.dateNaissance_entreprise ? true : false} value={item} >{item}</option>
                                            )
                                        })
                                        : null
                        }
                    </select>
                </div>


                <div class="EyjJPKD7jgGRBhaLpRVI">
                    <label for="settings-timezone"
                        class="_Vb9igHms0hI1PQcvp_S TR_P65x9ie7j6uxFo_Cs c8dCx6gnV43hTOLV6ks5 ezMFUVl744lvw6ht0lFe __9sbu0yrzdhGIkLWNXl OyABRrnTV_kvHV7dJ0uE">
                        Salire Capital de l{"'"}entreprise / an
                    </label>
                    <select onChange={(e) => { setsalaire(e.target.value) }} id="settings-timezone" name="countries"
                        class="jtAJHOc7mn7b4IKRO59D vpDN1VEJLu5FmLkr5WCk __9sbu0yrzdhGIkLWNXl gx_pYWtAG2cJIqhquLbx mveJTCIb2WII7J4sY22F GdTcGtoKP5_bET3syLDl LceKfSImrGKQrtDGkpBV _Vb9igHms0hI1PQcvp_S t6gkcSf0Bt4MLItXvDJ_ olxDi3yL6f0gpdsOFDhx jqg6J89cvxmDiFpnV56r Mmx5lX7HVdrWCgh3EpTP H7KQDhgKsqZaTUouEUQL OyABRrnTV_kvHV7dJ0uE KpCMWe32PQyrSFbZVput q6szSHqGtBufkToFe_s5">
                        <option>-- Choix --</option>
                        {
                            isLoading ? (<div class="animate-pulse w-36 h-8 rounded-sm" />)
                                : error ? (<div>...</div>) :
                                    entreprise ?
                                        salaires_School.map((item) => {
                                            return (
                                                <option selected={item == entreprise.salaire_capital ? true : false} value={item} >{item}</option>
                                            )
                                        })
                                        : null
                        }
                    </select>
                </div>

                {/*pays */}
                <div class="EyjJPKD7jgGRBhaLpRVI">
                    <label for="settings-timezone"
                        class="_Vb9igHms0hI1PQcvp_S TR_P65x9ie7j6uxFo_Cs c8dCx6gnV43hTOLV6ks5 ezMFUVl744lvw6ht0lFe __9sbu0yrzdhGIkLWNXl OyABRrnTV_kvHV7dJ0uE">
                        Pays de votre entreprise
                    </label>
                    <select onChange={(e) => { setpaysEntreprise(e.target.value) }} id="settings-timezone" name="countries"
                        class="jtAJHOc7mn7b4IKRO59D vpDN1VEJLu5FmLkr5WCk __9sbu0yrzdhGIkLWNXl gx_pYWtAG2cJIqhquLbx mveJTCIb2WII7J4sY22F GdTcGtoKP5_bET3syLDl LceKfSImrGKQrtDGkpBV _Vb9igHms0hI1PQcvp_S t6gkcSf0Bt4MLItXvDJ_ olxDi3yL6f0gpdsOFDhx jqg6J89cvxmDiFpnV56r Mmx5lX7HVdrWCgh3EpTP H7KQDhgKsqZaTUouEUQL OyABRrnTV_kvHV7dJ0uE KpCMWe32PQyrSFbZVput q6szSHqGtBufkToFe_s5">
                        <option>-- Choix --</option>
                        {
                            isLoading ? (<div class="animate-pulse w-36 h-8 rounded-sm" />)
                                : error ? (<div>...</div>) :
                                    entreprise ?
                                        optionPays.map((item) => {
                                            return (
                                                <option selected={item.value == entreprise.pays_entreprise ? true : false} value={item.value} >{item.label}</option>
                                            )
                                        })
                                        : null
                        }
                    </select>
                </div>



                <div class="_P4crYcwEj3d10LO5o8N DlUdveMmz1SkMYd217vD">
                    <label for="new-password"
                        class="_Vb9igHms0hI1PQcvp_S TR_P65x9ie7j6uxFo_Cs c8dCx6gnV43hTOLV6ks5 ezMFUVl744lvw6ht0lFe __9sbu0yrzdhGIkLWNXl OyABRrnTV_kvHV7dJ0uE">
                        Description sur vous (profile)</label>
                    <textarea rows={5} value={description} onChange={(e) => { setdescription(e.target.value) }}
                        type="text" name="new-password" id="new-password"
                        class="fzhbbDQ686T8arwvi_bJ jtAJHOc7mn7b4IKRO59D pXhVRBC8yaUNllmIWxln vpDN1VEJLu5FmLkr5WCk __9sbu0yrzdhGIkLWNXl gx_pYWtAG2cJIqhquLbx mveJTCIb2WII7J4sY22F GdTcGtoKP5_bET3syLDl LceKfSImrGKQrtDGkpBV _Vb9igHms0hI1PQcvp_S t6gkcSf0Bt4MLItXvDJ_ olxDi3yL6f0gpdsOFDhx jqg6J89cvxmDiFpnV56r Mmx5lX7HVdrWCgh3EpTP H7KQDhgKsqZaTUouEUQL OyABRrnTV_kvHV7dJ0uE KpCMWe32PQyrSFbZVput q6szSHqGtBufkToFe_s5"
                        placeholder="..." required="" />
                </div>


                <div class="mt-5">
                    {
                        loading ?
                            <p>en cours</p> :
                            <button
                                class="py-1 y6GKdvUrd7vp_pxsFb57 g40_g3BQzYCOX5eZADgY YoPCmQ0E_V5W0GGmSIdm _dylIDxYTN3qgvD4U597 KmgKPWh7pHX4ztLneO0T ezMFUVl744lvw6ht0lFe mveJTCIb2WII7J4sY22F c8dCx6gnV43hTOLV6ks5 ZjWEEmDsdPvU2GdH53LK cexDVMRjens2nRrMcG96 ijrOHNoSVGATsWYKl4Id d8_fVOcgDmbt7UdpfeLK WuKugQzwTT7o1wwBck2R _ZsTMX_gz275093orLWM">
                                Enregistrer
                            </button>
                    }
                </div>
            </form>
        </div>

    )
}

export default CompanyCompetence;
