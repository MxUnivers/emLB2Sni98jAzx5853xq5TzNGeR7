import React from 'react'
import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { CandidatEditPassword } from '../../../action/api/candidat/CandidatAction';
import { toast } from 'react-toastify';
import { getAndCheckLocalStorage } from '../../../utlis/storage/localvalueFunction';
import { localvalue } from '../../../utlis/storage/localvalue';
import { RiLockPasswordFill } from "react-icons/ri";




const CandidatPassword = () => {

    var idCandidat = getAndCheckLocalStorage(localvalue.candidatID);

    const [password, setpassword] = useState();
    const [confirmPassword, setconfirmPassword] = useState();

    const [visible, setvisible] = useState(false);

    // state de redux
    const dispatch = useDispatch();
    const loading = useSelector((state) => state.reducer.loading);
    const err = useSelector((state) => state.reducer.error);


    const handleSubmit = (event) => {

        event.preventDefault();

        if (password == confirmPassword) {
            dispatch(
                CandidatEditPassword(idCandidat, password, toast)
            );
        } else {
            toast.info("Les mot de passe ne sont pas identique");
        }

    }



    return (
        <div
            class="_Ybd3WwuTVljUT4vEaM3 mngKhi_Rv06PF57lblDI mveJTCIb2WII7J4sY22F _wYiJGbRZyFZeCc8y7Sf _YxZw_O8dWkTljptcO7z SWDELhWFjL8JxEtm91_o _1jTZ8KXRZul60S6czNi hD0sTTDgbxakubcHVW2X">
            <h3 class="hD0sTTDgbxakubcHVW2X vyo_A8gnQD1QWDPglr3h IOPhczRgtphv6NdNBDjj OyABRrnTV_kvHV7dJ0uE">
                Authentification </h3>
            <form onSubmit={handleSubmit}>
                <div class="xCPtuxM4_gihvpPwv9bX xcwgeeZbzBfzbYbc32HH Bcw8VuwRWYxPGjWjS6Ig">

                    <div class="_P4crYcwEj3d10LO5o8N DlUdveMmz1SkMYd217vD">
                        <label for="new-password"
                            class="_Vb9igHms0hI1PQcvp_S TR_P65x9ie7j6uxFo_Cs c8dCx6gnV43hTOLV6ks5 ezMFUVl744lvw6ht0lFe __9sbu0yrzdhGIkLWNXl OyABRrnTV_kvHV7dJ0uE">
                            Nouveau de mot de passe</label>
                        <input type={visible == true ? "text" : "password"} value={password} onChange={(e) => { setpassword(e.target.value) }} name="new-password" id="new-password"
                            class="fzhbbDQ686T8arwvi_bJ jtAJHOc7mn7b4IKRO59D pXhVRBC8yaUNllmIWxln vpDN1VEJLu5FmLkr5WCk __9sbu0yrzdhGIkLWNXl gx_pYWtAG2cJIqhquLbx mveJTCIb2WII7J4sY22F GdTcGtoKP5_bET3syLDl LceKfSImrGKQrtDGkpBV _Vb9igHms0hI1PQcvp_S t6gkcSf0Bt4MLItXvDJ_ olxDi3yL6f0gpdsOFDhx jqg6J89cvxmDiFpnV56r Mmx5lX7HVdrWCgh3EpTP H7KQDhgKsqZaTUouEUQL OyABRrnTV_kvHV7dJ0uE KpCMWe32PQyrSFbZVput q6szSHqGtBufkToFe_s5"
                            placeholder="••••••••" required="" />
                    </div>
                    <div class="_P4crYcwEj3d10LO5o8N DlUdveMmz1SkMYd217vD">
                        <label for="confirm-password"
                            class="_Vb9igHms0hI1PQcvp_S TR_P65x9ie7j6uxFo_Cs c8dCx6gnV43hTOLV6ks5 ezMFUVl744lvw6ht0lFe __9sbu0yrzdhGIkLWNXl OyABRrnTV_kvHV7dJ0uE">Confirm
                            Confirmer mot de passe</label>
                        <input type={visible == true ? "text" : "password"} value={confirmPassword} onChange={(e) => { setconfirmPassword(e.target.value) }} name="confirm-password" id="confirm-password"
                            class="fzhbbDQ686T8arwvi_bJ jtAJHOc7mn7b4IKRO59D pXhVRBC8yaUNllmIWxln vpDN1VEJLu5FmLkr5WCk __9sbu0yrzdhGIkLWNXl gx_pYWtAG2cJIqhquLbx mveJTCIb2WII7J4sY22F GdTcGtoKP5_bET3syLDl LceKfSImrGKQrtDGkpBV _Vb9igHms0hI1PQcvp_S t6gkcSf0Bt4MLItXvDJ_ olxDi3yL6f0gpdsOFDhx jqg6J89cvxmDiFpnV56r Mmx5lX7HVdrWCgh3EpTP H7KQDhgKsqZaTUouEUQL OyABRrnTV_kvHV7dJ0uE KpCMWe32PQyrSFbZVput q6szSHqGtBufkToFe_s5"
                            placeholder="••••••••" required="" />
                    </div>
                    <div class="_P4crYcwEj3d10LO5o8N sm:col-full">
                        <div class="flex justify-start items-center space-x-3">
                            <input type="checkbox" checked={visible} onChange={() => { setvisible(!visible) }} name="confirm-password" id="confirm-password"
                                class="h-6 w-6"
                                placeholder="" required="" />
                            <label for="confirm-password"
                                class="text-xs _Vb9igHms0hI1PQcvp_S TR_P65x9ie7j6uxFo_Cs c8dCx6gnV43hTOLV6ks5 ezMFUVl744lvw6ht0lFe __9sbu0yrzdhGIkLWNXl OyABRrnTV_kvHV7dJ0uE">Confirm
                                Affichier mot de passe
                            </label>
                        </div>
                    </div>
                    <div class="_P4crYcwEj3d10LO5o8N sm:col-full">
                        {
                            loading ?
                                <p class="text-gray-500 animate-pulse"></p>
                                :
                                <button
                                    class="flex space-x-2 py-1 bg-blue-700 btn btn-sm y6GKdvUrd7vp_pxsFb57 g40_g3BQzYCOX5eZADgY YoPCmQ0E_V5W0GGmSIdm _dylIDxYTN3qgvD4U597 KmgKPWh7pHX4ztLneO0T ezMFUVl744lvw6ht0lFe mveJTCIb2WII7J4sY22F c8dCx6gnV43hTOLV6ks5 ZjWEEmDsdPvU2GdH53LK cexDVMRjens2nRrMcG96 ijrOHNoSVGATsWYKl4Id d8_fVOcgDmbt7UdpfeLK WuKugQzwTT7o1wwBck2R _ZsTMX_gz275093orLWM"
                                    type="submit">
                                    <RiLockPasswordFill /> <span>Modifier</span>
                                </button>
                        }
                    </div>
                </div>
            </form>
        </div>

    )
}

export default CandidatPassword
