import React from 'react'
import { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { getAndCheckLocalStorage } from '../../../utlis/storage/localvalueFunction';
import { localvalue } from '../../../utlis/storage/localvalue';
import { toast } from 'react-toastify';
import { useEffect } from 'react';
import { MdOutlineWeb } from "react-icons/md";
import { MdFacebook } from 'react-icons/md';
import { AiFillInstagram, AiFillLinkedin, AiFillTwitterCircle } from "react-icons/ai";
import { EntrepriseEditSocial, useFetchEntreprise } from '../../../action/api/employeur/EmployeurAction';


const CompanySocial = () => {

    var idEntreprise = getAndCheckLocalStorage(localvalue.recruteurID);
    const { isLoading, error,  entreprise} = useFetchEntreprise(idEntreprise);


    const [facebook_url, setfacebook_url] = useState();
    const [linkedine_url, setlinkedine_url] = useState();
    const [site_web, setsite_web] = useState();
    const [twitter_url, settwitter_url] = useState();
    const [instagram_url, setinstagram_url] = useState();

    useEffect(() => {
        if (entreprise && entreprise.site_web) {
            setsite_web(entreprise.site_web)
        }
        if (entreprise && entreprise.linkedin_url) {
            setlinkedine_url(entreprise.linkedin_url)
        }
        if (entreprise && entreprise.twitter_url) {
            settwitter_url(entreprise.twitter_url)
        }
        if (entreprise && entreprise.instagram_url) {
            setinstagram_url(entreprise.instagram_url)
        }
        if (entreprise && entreprise.facebook_url) {
            setfacebook_url(entreprise.facebook_url)
        }
    }, [entreprise])

    const dispatch = useDispatch();
    const loading = useSelector((state) => state.loading);
    const err = useSelector((state) => state.error);


    const handleSubmit = (event) => {
        event.preventDefault();
        dispatch(
            EntrepriseEditSocial(idEntreprise, facebook_url,
                linkedine_url, twitter_url, instagram_url,
                site_web, toast)
        );
    }





    return (
        <div
            class="_Ybd3WwuTVljUT4vEaM3 mngKhi_Rv06PF57lblDI mveJTCIb2WII7J4sY22F _wYiJGbRZyFZeCc8y7Sf _YxZw_O8dWkTljptcO7z SWDELhWFjL8JxEtm91_o _1jTZ8KXRZul60S6czNi hD0sTTDgbxakubcHVW2X">
            <form onSubmit={handleSubmit} class="FF0B1uH_gtoM9lki9mia">
                <h3 class="vyo_A8gnQD1QWDPglr3h IOPhczRgtphv6NdNBDjj OyABRrnTV_kvHV7dJ0uE">Social accounts</h3>
                <ul class="Zy1Pypi71Xu6guex6urN NIAblPiyeuYQ0zW671xb XpuPpk9eXhVCrleKmXDr">

                    <li class="_9igzqn_6D3Qq5Hcwkfk">
                        <div class="YRrCJSr_j5nopfm4duUc Q_jg_EPdNf9eDMn1mLI2 d4louhNic5PFgJGRKqn6">
                            <div class="VQS2tmQ_zFyBOC2tkmto">
                                <MdOutlineWeb />
                            </div>
                            <div class="_74lpPUMEtHf6F0_fjLe G4dLHP1O7x3gaD0_p7Kc">
                                <span
                                    class="_Vb9igHms0hI1PQcvp_S d3C8uAdJKNl1jzfE9ynq yM_AorRf2jSON3pDsdrz __9sbu0yrzdhGIkLWNXl vfNYjqjYMlN1XskEucCt OyABRrnTV_kvHV7dJ0uE">
                                    Website
                                </span>
                                <a href={`${site_web}`} target='_blank'
                                    class="_Vb9igHms0hI1PQcvp_S c8dCx6gnV43hTOLV6ks5 _43MO1gcdi2Y0RJW1uHL OQflBVxALl1Ntbyc2J2_ vfNYjqjYMlN1XskEucCt oJZU4OQzzfXeLbF7UKZ_ fZf6W_ZtzEh6EEqmWMA9">
                                    {site_web}
                                </a>
                                <input value={site_web} onChange={(e) => { setsite_web(e.target.value) }} type="text" name="first-name" id="first-name"
                                    class="fzhbbDQ686T8arwvi_bJ jtAJHOc7mn7b4IKRO59D pXhVRBC8yaUNllmIWxln vpDN1VEJLu5FmLkr5WCk __9sbu0yrzdhGIkLWNXl gx_pYWtAG2cJIqhquLbx mveJTCIb2WII7J4sY22F GdTcGtoKP5_bET3syLDl LceKfSImrGKQrtDGkpBV _Vb9igHms0hI1PQcvp_S t6gkcSf0Bt4MLItXvDJ_ olxDi3yL6f0gpdsOFDhx jqg6J89cvxmDiFpnV56r Mmx5lX7HVdrWCgh3EpTP H7KQDhgKsqZaTUouEUQL OyABRrnTV_kvHV7dJ0uE KpCMWe32PQyrSFbZVput q6szSHqGtBufkToFe_s5"
                                    placeholder="Bonnie" required="" />
                            </div>
                            <div class="_k0lTW0vvzboctTxDi2R Q_jg_EPdNf9eDMn1mLI2">
                                <a href="#"
                                    class="b9aD6g2qw84oyZNsMO8j _Cj_M6jt2eLjDgkBBNgI R9nujHypnXyuHrBww9QK _hpGev6RXFut0Jm_iRgf c8dCx6gnV43hTOLV6ks5 ezMFUVl744lvw6ht0lFe ijrOHNoSVGATsWYKl4Id __9sbu0yrzdhGIkLWNXl _Ybd3WwuTVljUT4vEaM3 mveJTCIb2WII7J4sY22F pXhVRBC8yaUNllmIWxln vpDN1VEJLu5FmLkr5WCk _7KA5gD55t2lxf9Jkj20 _dylIDxYTN3qgvD4U597 KmgKPWh7pHX4ztLneO0T _1jTZ8KXRZul60S6czNi XIIs8ZOri3wm8Wnj9N_y Mmx5lX7HVdrWCgh3EpTP dMTOiA3mf3FTjlHu6DqW OPrb_iG5WDy_7F05BDOX">Disconnect</a>
                            </div>
                        </div>
                    </li>


                    <li class="_9igzqn_6D3Qq5Hcwkfk">
                        <div class="YRrCJSr_j5nopfm4duUc Q_jg_EPdNf9eDMn1mLI2 d4louhNic5PFgJGRKqn6">
                            <div class="VQS2tmQ_zFyBOC2tkmto">
                                <AiFillLinkedin />
                            </div>
                            <div class="_74lpPUMEtHf6F0_fjLe G4dLHP1O7x3gaD0_p7Kc">
                                <span
                                    class="_Vb9igHms0hI1PQcvp_S d3C8uAdJKNl1jzfE9ynq yM_AorRf2jSON3pDsdrz __9sbu0yrzdhGIkLWNXl vfNYjqjYMlN1XskEucCt OyABRrnTV_kvHV7dJ0uE">
                                    Linkedin
                                </span>
                                <a href={`${linkedine_url}`} target='_blank'
                                    class="_Vb9igHms0hI1PQcvp_S c8dCx6gnV43hTOLV6ks5 _43MO1gcdi2Y0RJW1uHL OQflBVxALl1Ntbyc2J2_ vfNYjqjYMlN1XskEucCt oJZU4OQzzfXeLbF7UKZ_ fZf6W_ZtzEh6EEqmWMA9">
                                    {linkedine_url}
                                </a>
                                <input value={linkedine_url} onChange={(e) => { setlinkedine_url(e.target.value) }} type="text" name="first-name" id="first-name"
                                    class="fzhbbDQ686T8arwvi_bJ jtAJHOc7mn7b4IKRO59D pXhVRBC8yaUNllmIWxln vpDN1VEJLu5FmLkr5WCk __9sbu0yrzdhGIkLWNXl gx_pYWtAG2cJIqhquLbx mveJTCIb2WII7J4sY22F GdTcGtoKP5_bET3syLDl LceKfSImrGKQrtDGkpBV _Vb9igHms0hI1PQcvp_S t6gkcSf0Bt4MLItXvDJ_ olxDi3yL6f0gpdsOFDhx jqg6J89cvxmDiFpnV56r Mmx5lX7HVdrWCgh3EpTP H7KQDhgKsqZaTUouEUQL OyABRrnTV_kvHV7dJ0uE KpCMWe32PQyrSFbZVput q6szSHqGtBufkToFe_s5"
                                    placeholder="Bonnie" required="" />
                            </div>
                            <div class="_k0lTW0vvzboctTxDi2R Q_jg_EPdNf9eDMn1mLI2">
                                <a href="#"
                                    class="b9aD6g2qw84oyZNsMO8j _Cj_M6jt2eLjDgkBBNgI R9nujHypnXyuHrBww9QK _hpGev6RXFut0Jm_iRgf c8dCx6gnV43hTOLV6ks5 ezMFUVl744lvw6ht0lFe ijrOHNoSVGATsWYKl4Id __9sbu0yrzdhGIkLWNXl _Ybd3WwuTVljUT4vEaM3 mveJTCIb2WII7J4sY22F pXhVRBC8yaUNllmIWxln vpDN1VEJLu5FmLkr5WCk _7KA5gD55t2lxf9Jkj20 _dylIDxYTN3qgvD4U597 KmgKPWh7pHX4ztLneO0T _1jTZ8KXRZul60S6czNi XIIs8ZOri3wm8Wnj9N_y Mmx5lX7HVdrWCgh3EpTP dMTOiA3mf3FTjlHu6DqW OPrb_iG5WDy_7F05BDOX">Disconnect</a>
                            </div>
                        </div>
                    </li>


                    <li class="_9igzqn_6D3Qq5Hcwkfk">
                        <div class="YRrCJSr_j5nopfm4duUc Q_jg_EPdNf9eDMn1mLI2 d4louhNic5PFgJGRKqn6">
                            <div class="VQS2tmQ_zFyBOC2tkmto">
                                <MdFacebook />
                            </div>
                            <div class="_74lpPUMEtHf6F0_fjLe G4dLHP1O7x3gaD0_p7Kc">
                                <span
                                    class="_Vb9igHms0hI1PQcvp_S d3C8uAdJKNl1jzfE9ynq yM_AorRf2jSON3pDsdrz __9sbu0yrzdhGIkLWNXl vfNYjqjYMlN1XskEucCt OyABRrnTV_kvHV7dJ0uE">
                                    Facebook
                                </span>
                                <a href={`${facebook_url}`} target='_blank'
                                    class="_Vb9igHms0hI1PQcvp_S c8dCx6gnV43hTOLV6ks5 _43MO1gcdi2Y0RJW1uHL OQflBVxALl1Ntbyc2J2_ vfNYjqjYMlN1XskEucCt oJZU4OQzzfXeLbF7UKZ_ fZf6W_ZtzEh6EEqmWMA9">
                                    {facebook_url}
                                </a>
                                <input value={facebook_url} onChange={(e) => { setfacebook_url(e.target.value) }} type="text" name="first-name" id="first-name"
                                    class="fzhbbDQ686T8arwvi_bJ jtAJHOc7mn7b4IKRO59D pXhVRBC8yaUNllmIWxln vpDN1VEJLu5FmLkr5WCk __9sbu0yrzdhGIkLWNXl gx_pYWtAG2cJIqhquLbx mveJTCIb2WII7J4sY22F GdTcGtoKP5_bET3syLDl LceKfSImrGKQrtDGkpBV _Vb9igHms0hI1PQcvp_S t6gkcSf0Bt4MLItXvDJ_ olxDi3yL6f0gpdsOFDhx jqg6J89cvxmDiFpnV56r Mmx5lX7HVdrWCgh3EpTP H7KQDhgKsqZaTUouEUQL OyABRrnTV_kvHV7dJ0uE KpCMWe32PQyrSFbZVput q6szSHqGtBufkToFe_s5"
                                    placeholder="Bonnie" required="" />
                            </div>
                            <div class="_k0lTW0vvzboctTxDi2R Q_jg_EPdNf9eDMn1mLI2">
                                <a href="#"
                                    class="b9aD6g2qw84oyZNsMO8j _Cj_M6jt2eLjDgkBBNgI R9nujHypnXyuHrBww9QK _hpGev6RXFut0Jm_iRgf c8dCx6gnV43hTOLV6ks5 ezMFUVl744lvw6ht0lFe ijrOHNoSVGATsWYKl4Id __9sbu0yrzdhGIkLWNXl _Ybd3WwuTVljUT4vEaM3 mveJTCIb2WII7J4sY22F pXhVRBC8yaUNllmIWxln vpDN1VEJLu5FmLkr5WCk _7KA5gD55t2lxf9Jkj20 _dylIDxYTN3qgvD4U597 KmgKPWh7pHX4ztLneO0T _1jTZ8KXRZul60S6czNi XIIs8ZOri3wm8Wnj9N_y Mmx5lX7HVdrWCgh3EpTP dMTOiA3mf3FTjlHu6DqW OPrb_iG5WDy_7F05BDOX">Disconnect</a>
                            </div>
                        </div>
                    </li>


                    <li class="_9igzqn_6D3Qq5Hcwkfk">
                        <div class="YRrCJSr_j5nopfm4duUc Q_jg_EPdNf9eDMn1mLI2 d4louhNic5PFgJGRKqn6">
                            <div class="VQS2tmQ_zFyBOC2tkmto">
                                <AiFillInstagram />
                            </div>
                            <div class="_74lpPUMEtHf6F0_fjLe G4dLHP1O7x3gaD0_p7Kc">
                                <span
                                    class="_Vb9igHms0hI1PQcvp_S d3C8uAdJKNl1jzfE9ynq yM_AorRf2jSON3pDsdrz __9sbu0yrzdhGIkLWNXl vfNYjqjYMlN1XskEucCt OyABRrnTV_kvHV7dJ0uE">
                                    Instagram
                                </span>
                                <a href={`${instagram_url}`} target='_blank'
                                    class="_Vb9igHms0hI1PQcvp_S c8dCx6gnV43hTOLV6ks5 _43MO1gcdi2Y0RJW1uHL OQflBVxALl1Ntbyc2J2_ vfNYjqjYMlN1XskEucCt oJZU4OQzzfXeLbF7UKZ_ fZf6W_ZtzEh6EEqmWMA9">
                                    {instagram_url}
                                </a>
                                <input value={instagram_url} onChange={(e) => { setinstagram_url(e.target.value) }} type="text" name="first-name" id="first-name"
                                    class="fzhbbDQ686T8arwvi_bJ jtAJHOc7mn7b4IKRO59D pXhVRBC8yaUNllmIWxln vpDN1VEJLu5FmLkr5WCk __9sbu0yrzdhGIkLWNXl gx_pYWtAG2cJIqhquLbx mveJTCIb2WII7J4sY22F GdTcGtoKP5_bET3syLDl LceKfSImrGKQrtDGkpBV _Vb9igHms0hI1PQcvp_S t6gkcSf0Bt4MLItXvDJ_ olxDi3yL6f0gpdsOFDhx jqg6J89cvxmDiFpnV56r Mmx5lX7HVdrWCgh3EpTP H7KQDhgKsqZaTUouEUQL OyABRrnTV_kvHV7dJ0uE KpCMWe32PQyrSFbZVput q6szSHqGtBufkToFe_s5"
                                    placeholder="Bonnie" required="" />
                            </div>
                            <div class="_k0lTW0vvzboctTxDi2R Q_jg_EPdNf9eDMn1mLI2">
                                <a href="#"
                                    class="b9aD6g2qw84oyZNsMO8j _Cj_M6jt2eLjDgkBBNgI R9nujHypnXyuHrBww9QK _hpGev6RXFut0Jm_iRgf c8dCx6gnV43hTOLV6ks5 ezMFUVl744lvw6ht0lFe ijrOHNoSVGATsWYKl4Id __9sbu0yrzdhGIkLWNXl _Ybd3WwuTVljUT4vEaM3 mveJTCIb2WII7J4sY22F pXhVRBC8yaUNllmIWxln vpDN1VEJLu5FmLkr5WCk _7KA5gD55t2lxf9Jkj20 _dylIDxYTN3qgvD4U597 KmgKPWh7pHX4ztLneO0T _1jTZ8KXRZul60S6czNi XIIs8ZOri3wm8Wnj9N_y Mmx5lX7HVdrWCgh3EpTP dMTOiA3mf3FTjlHu6DqW OPrb_iG5WDy_7F05BDOX">Disconnect</a>
                            </div>
                        </div>
                    </li>



                    <li class="_9igzqn_6D3Qq5Hcwkfk">
                        <div class="YRrCJSr_j5nopfm4duUc Q_jg_EPdNf9eDMn1mLI2 d4louhNic5PFgJGRKqn6">
                            <div class="VQS2tmQ_zFyBOC2tkmto">
                                <AiFillTwitterCircle />
                            </div>
                            <div class="_74lpPUMEtHf6F0_fjLe G4dLHP1O7x3gaD0_p7Kc">
                                <span
                                    class="_Vb9igHms0hI1PQcvp_S d3C8uAdJKNl1jzfE9ynq yM_AorRf2jSON3pDsdrz __9sbu0yrzdhGIkLWNXl vfNYjqjYMlN1XskEucCt OyABRrnTV_kvHV7dJ0uE">
                                    Twitter
                                </span>
                                <a href={`${twitter_url}`} target='_blank'
                                    class="_Vb9igHms0hI1PQcvp_S c8dCx6gnV43hTOLV6ks5 _43MO1gcdi2Y0RJW1uHL OQflBVxALl1Ntbyc2J2_ vfNYjqjYMlN1XskEucCt oJZU4OQzzfXeLbF7UKZ_ fZf6W_ZtzEh6EEqmWMA9">
                                    {twitter_url}
                                </a>
                                <input value={twitter_url} onChange={(e) => { settwitter_url(e.target.value) }} type="text" name="first-name" id="first-name"
                                    class="fzhbbDQ686T8arwvi_bJ jtAJHOc7mn7b4IKRO59D pXhVRBC8yaUNllmIWxln vpDN1VEJLu5FmLkr5WCk __9sbu0yrzdhGIkLWNXl gx_pYWtAG2cJIqhquLbx mveJTCIb2WII7J4sY22F GdTcGtoKP5_bET3syLDl LceKfSImrGKQrtDGkpBV _Vb9igHms0hI1PQcvp_S t6gkcSf0Bt4MLItXvDJ_ olxDi3yL6f0gpdsOFDhx jqg6J89cvxmDiFpnV56r Mmx5lX7HVdrWCgh3EpTP H7KQDhgKsqZaTUouEUQL OyABRrnTV_kvHV7dJ0uE KpCMWe32PQyrSFbZVput q6szSHqGtBufkToFe_s5"
                                    placeholder="Bonnie" required="" />
                            </div>
                            <div class="_k0lTW0vvzboctTxDi2R Q_jg_EPdNf9eDMn1mLI2">
                                <a href="#"
                                    class="b9aD6g2qw84oyZNsMO8j _Cj_M6jt2eLjDgkBBNgI R9nujHypnXyuHrBww9QK _hpGev6RXFut0Jm_iRgf c8dCx6gnV43hTOLV6ks5 ezMFUVl744lvw6ht0lFe ijrOHNoSVGATsWYKl4Id __9sbu0yrzdhGIkLWNXl _Ybd3WwuTVljUT4vEaM3 mveJTCIb2WII7J4sY22F pXhVRBC8yaUNllmIWxln vpDN1VEJLu5FmLkr5WCk _7KA5gD55t2lxf9Jkj20 _dylIDxYTN3qgvD4U597 KmgKPWh7pHX4ztLneO0T _1jTZ8KXRZul60S6czNi XIIs8ZOri3wm8Wnj9N_y Mmx5lX7HVdrWCgh3EpTP dMTOiA3mf3FTjlHu6DqW OPrb_iG5WDy_7F05BDOX">Disconnect</a>
                            </div>
                        </div>
                    </li>




                </ul>
                <div>
                    {
                        loading ?
                            <p class="text-gray-500 animate-pulse">en cours ..</p>
                            :
                            <button
                                class="py-1  y6GKdvUrd7vp_pxsFb57 g40_g3BQzYCOX5eZADgY YoPCmQ0E_V5W0GGmSIdm _dylIDxYTN3qgvD4U597 KmgKPWh7pHX4ztLneO0T ezMFUVl744lvw6ht0lFe mveJTCIb2WII7J4sY22F c8dCx6gnV43hTOLV6ks5 ZjWEEmDsdPvU2GdH53LK cexDVMRjens2nRrMcG96 ijrOHNoSVGATsWYKl4Id d8_fVOcgDmbt7UdpfeLK WuKugQzwTT7o1wwBck2R _ZsTMX_gz275093orLWM">
                                Mise à jour
                            </button>
                    }
                </div>
            </form>
        </div>

    )
}

export default CompanySocial