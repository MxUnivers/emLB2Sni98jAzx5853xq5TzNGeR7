import React from 'react'
import { useState } from 'react';
import Select from "react-select";
import { competences, languages_school, level_School, salaires_School, years_experience_school } from '../../../utlis/options/candidatOption';
import { useDispatch, useSelector } from 'react-redux';
import useFetchCandidat, { CandidatEditCompetence } from '../../../action/api/candidat/CandidatAction';
import { getAndCheckLocalStorage } from '../../../utlis/storage/localvalueFunction';
import { localvalue } from '../../../utlis/storage/localvalue';
import { useEffect } from 'react';
import { toast } from 'react-toastify';



const CandidatCompetence = () => {

    var idCandidat = getAndCheckLocalStorage(localvalue.candidatID);

    const { isLoading, error, candidat } = useFetchCandidat(idCandidat);



    const [selectCompetences, setselectCompetences] = useState();
    const [description, setdescription] = useState();
    const [selectLangues, setselectLangues] = useState();
    const [years_experience, setyears_experience] = useState();
    const [level_school, setlevel_school] = useState();
    const [salaire, setsalaire] = useState();

    useEffect(() => {
        if (candidat && candidat.competences) {
            setselectCompetences(candidat.competences);
        }
        if (candidat && candidat.years_experience) {
            setyears_experience(candidat.years_experience)
        }
        if (candidat && candidat.salaire) {
            setsalaire(candidat.salaire)
        }
        if (candidat && candidat.level_school) {
            setlevel_school(candidat.level_school)
        }
        if (candidat && candidat.langues) {
            setselectLangues(candidat.langues)
        }
        if (candidat && candidat.description) {
            setdescription(candidat.description)
        }
    }, [candidat]);

    const handleSelectLang = (selectOptions) => {
        setselectLangues(selectOptions);
    }
    const handleSelectCompetence = (selectOptions) => {
        setselectCompetences(selectOptions);
    }


    // state de redux
    const dispatch = useDispatch();
    const loading = useSelector((state) => state.reducer.loading);
    const err = useSelector((state) => state.reducer.error);

    const handleSubmit = (event) => {
        event.preventDefault();
        dispatch(CandidatEditCompetence(
            idCandidat,salaire,level_school,years_experience,selectCompetences,
            setselectLangues,description,
        toast));
    }


    return (
        <div
            class=" _Ybd3WwuTVljUT4vEaM3 mngKhi_Rv06PF57lblDI mveJTCIb2WII7J4sY22F _wYiJGbRZyFZeCc8y7Sf _YxZw_O8dWkTljptcO7z SWDELhWFjL8JxEtm91_o _1jTZ8KXRZul60S6czNi hD0sTTDgbxakubcHVW2X w-full dark:bg-white dark:text-gray-700">
            <h3 class="hD0sTTDgbxakubcHVW2X vyo_A8gnQD1QWDPglr3h IOPhczRgtphv6NdNBDjj OyABRrnTV_kvHV7dJ0uE font-semibold dark:bg-white dark:text-gray-700">
                Profile
            </h3>

            <form onSubmit={handleSubmit}  class="w-full dark:bg-white dark:text-gray-700">

                <div class="hD0sTTDgbxakubcHVW2X ">
                    <label for="settings-language"
                        class="_Vb9igHms0hI1PQcvp_S TR_P65x9ie7j6uxFo_Cs c8dCx6gnV43hTOLV6ks5 ezMFUVl744lvw6ht0lFe __9sbu0yrzdhGIkLWNXl OyABRrnTV_kvHV7dJ0uE dark:bg-white dark:text-gray-700">
                        Compétences
                    </label>
                    <Select
                        isMulti
                        options={competences}
                        value={selectCompetences}
                        onChange={handleSelectCompetence}
                        placeholder="choix de vos compétences"
                        id="settings-language" name="countries"
                        class="jtAJHOc7mn7b4IKRO59D vpDN1VEJLu5FmLkr5WCk __9sbu0yrzdhGIkLWNXl gx_pYWtAG2cJIqhquLbx mveJTCIb2WII7J4sY22F GdTcGtoKP5_bET3syLDl LceKfSImrGKQrtDGkpBV _Vb9igHms0hI1PQcvp_S t6gkcSf0Bt4MLItXvDJ_ olxDi3yL6f0gpdsOFDhx jqg6J89cvxmDiFpnV56r Mmx5lX7HVdrWCgh3EpTP H7KQDhgKsqZaTUouEUQL OyABRrnTV_kvHV7dJ0uE KpCMWe32PQyrSFbZVput q6szSHqGtBufkToFe_s5"

                    />
                </div>

                <div class="hD0sTTDgbxakubcHVW2X">
                    <label for="settings-language"
                        class="_Vb9igHms0hI1PQcvp_S TR_P65x9ie7j6uxFo_Cs c8dCx6gnV43hTOLV6ks5 ezMFUVl744lvw6ht0lFe __9sbu0yrzdhGIkLWNXl OyABRrnTV_kvHV7dJ0uE dark:bg-white dark:text-gray-700">
                        Langues
                    </label>
                    <Select
                        isMulti
                        options={languages_school}
                        value={selectLangues}
                        onChange={handleSelectLang}
                        placeholder="choix de vos langues"
                        id="settings-language" name="countries"
                        class="jtAJHOc7mn7b4IKRO59D vpDN1VEJLu5FmLkr5WCk __9sbu0yrzdhGIkLWNXl gx_pYWtAG2cJIqhquLbx mveJTCIb2WII7J4sY22F GdTcGtoKP5_bET3syLDl LceKfSImrGKQrtDGkpBV _Vb9igHms0hI1PQcvp_S t6gkcSf0Bt4MLItXvDJ_ olxDi3yL6f0gpdsOFDhx jqg6J89cvxmDiFpnV56r Mmx5lX7HVdrWCgh3EpTP H7KQDhgKsqZaTUouEUQL OyABRrnTV_kvHV7dJ0uE KpCMWe32PQyrSFbZVput q6szSHqGtBufkToFe_s5 "

                    />
                </div>


                <div class="EyjJPKD7jgGRBhaLpRVI">
                    <label for="settings-timezone"
                        class="_Vb9igHms0hI1PQcvp_S TR_P65x9ie7j6uxFo_Cs c8dCx6gnV43hTOLV6ks5 ezMFUVl744lvw6ht0lFe __9sbu0yrzdhGIkLWNXl OyABRrnTV_kvHV7dJ0uE dark:bg-white dark:text-gray-700">
                        Niveau d{"'"}étude
                    </label>
                    <select onChange={(e) => { setlevel_school(e.target.value) }} id="settings-timezone" name="countries"
                        class="jtAJHOc7mn7b4IKRO59D vpDN1VEJLu5FmLkr5WCk __9sbu0yrzdhGIkLWNXl gx_pYWtAG2cJIqhquLbx mveJTCIb2WII7J4sY22F GdTcGtoKP5_bET3syLDl LceKfSImrGKQrtDGkpBV _Vb9igHms0hI1PQcvp_S t6gkcSf0Bt4MLItXvDJ_ olxDi3yL6f0gpdsOFDhx jqg6J89cvxmDiFpnV56r Mmx5lX7HVdrWCgh3EpTP H7KQDhgKsqZaTUouEUQL OyABRrnTV_kvHV7dJ0uE KpCMWe32PQyrSFbZVput q6szSHqGtBufkToFe_s5 dark:bg-white dark:text-gray-700">
                        <option>-- Choix --</option>
                        {
                            isLoading ? (<div class="animate-pulse w-36 h-8 rounded-sm" />)
                                : error ? (<div>...</div>) :
                                    candidat ?
                                        level_School.map((item) => {
                                            return (
                                                <option selected={item.value == candidat.level_school ? true : false} value={item.value} >{item.label}</option>
                                            )
                                        })
                                        : null
                        }
                    </select>
                </div>


                <div class="EyjJPKD7jgGRBhaLpRVI">
                    <label for="settings-timezone"
                        class="_Vb9igHms0hI1PQcvp_S TR_P65x9ie7j6uxFo_Cs c8dCx6gnV43hTOLV6ks5 ezMFUVl744lvw6ht0lFe __9sbu0yrzdhGIkLWNXl OyABRrnTV_kvHV7dJ0uE dark:bg-white dark:text-gray-700">
                        Année d{"'"}expériences (travail)
                    </label>

                    <select onChange={(e) => { setyears_experience(e.target.value) }} id="settings-timezone" name="countries"
                        class="jtAJHOc7mn7b4IKRO59D vpDN1VEJLu5FmLkr5WCk __9sbu0yrzdhGIkLWNXl gx_pYWtAG2cJIqhquLbx mveJTCIb2WII7J4sY22F GdTcGtoKP5_bET3syLDl LceKfSImrGKQrtDGkpBV _Vb9igHms0hI1PQcvp_S t6gkcSf0Bt4MLItXvDJ_ olxDi3yL6f0gpdsOFDhx jqg6J89cvxmDiFpnV56r Mmx5lX7HVdrWCgh3EpTP H7KQDhgKsqZaTUouEUQL OyABRrnTV_kvHV7dJ0uE KpCMWe32PQyrSFbZVput q6szSHqGtBufkToFe_s5 dark:bg-white dark:text-gray-700">
                        <option>-- Choix --</option>
                        {
                            isLoading ? (<div class="animate-pulse w-36 h-8 rounded-sm" />)
                                : error ? (<div>...</div>) :
                                    candidat ?
                                        years_experience_school.map((item) => {
                                            return (
                                                <option selected={item == candidat.years_experience ? true : false} value={item} >{item}</option>
                                            )
                                        })
                                        : null
                        }
                    </select>
                </div>
                <div class="EyjJPKD7jgGRBhaLpRVI">
                    <label for="settings-timezone"
                        class="_Vb9igHms0hI1PQcvp_S TR_P65x9ie7j6uxFo_Cs c8dCx6gnV43hTOLV6ks5 ezMFUVl744lvw6ht0lFe __9sbu0yrzdhGIkLWNXl OyABRrnTV_kvHV7dJ0uE dark:bg-white dark:text-gray-700">
                        Salire percus
                    </label>
                    <select onChange={(e) => { setsalaire(e.target.value) }} id="settings-timezone" name="countries"
                        class="jtAJHOc7mn7b4IKRO59D vpDN1VEJLu5FmLkr5WCk __9sbu0yrzdhGIkLWNXl gx_pYWtAG2cJIqhquLbx mveJTCIb2WII7J4sY22F GdTcGtoKP5_bET3syLDl LceKfSImrGKQrtDGkpBV _Vb9igHms0hI1PQcvp_S t6gkcSf0Bt4MLItXvDJ_ olxDi3yL6f0gpdsOFDhx jqg6J89cvxmDiFpnV56r Mmx5lX7HVdrWCgh3EpTP H7KQDhgKsqZaTUouEUQL OyABRrnTV_kvHV7dJ0uE KpCMWe32PQyrSFbZVput q6szSHqGtBufkToFe_s5 dark:bg-white dark:text-gray-700">
                        <option>-- Choix --</option>
                        {
                            isLoading ? (<div class="animate-pulse w-36 h-8 rounded-sm" />)
                                : error ? (<div>...</div>) :
                                    candidat ?
                                        salaires_School.map((item) => {
                                            return (
                                                <option selected={item == candidat.salaire ? true : false} value={item} >{item}</option>
                                            )
                                        })
                                        : null
                        }
                    </select>
                </div>


                <div class="_P4crYcwEj3d10LO5o8N DlUdveMmz1SkMYd217vD">
                    <label for="new-password"
                        class="_Vb9igHms0hI1PQcvp_S TR_P65x9ie7j6uxFo_Cs c8dCx6gnV43hTOLV6ks5 ezMFUVl744lvw6ht0lFe __9sbu0yrzdhGIkLWNXl OyABRrnTV_kvHV7dJ0uE dark:bg-white dark:text-gray-700">
                        Description sur vous (profile)</label>
                    <textarea rows={5} value={description} onChange={(e) => { setdescription(e.target.value) }}
                        type="text" name="new-password" id="new-password"
                        class="fzhbbDQ686T8arwvi_bJ jtAJHOc7mn7b4IKRO59D pXhVRBC8yaUNllmIWxln vpDN1VEJLu5FmLkr5WCk __9sbu0yrzdhGIkLWNXl gx_pYWtAG2cJIqhquLbx mveJTCIb2WII7J4sY22F GdTcGtoKP5_bET3syLDl LceKfSImrGKQrtDGkpBV _Vb9igHms0hI1PQcvp_S t6gkcSf0Bt4MLItXvDJ_ olxDi3yL6f0gpdsOFDhx jqg6J89cvxmDiFpnV56r Mmx5lX7HVdrWCgh3EpTP H7KQDhgKsqZaTUouEUQL OyABRrnTV_kvHV7dJ0uE KpCMWe32PQyrSFbZVput q6szSHqGtBufkToFe_s5 dark:bg-white dark:text-gray-700"
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

export default CandidatCompetence;
