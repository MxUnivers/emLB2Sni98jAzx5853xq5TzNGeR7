import React from 'react'
import useFetchCandidat from '../../action/api/candidat/CandidatAction'
import { getAndCheckLocalStorage } from '../../utlis/storage/localvalueFunction'
import { localvalue } from '../../utlis/storage/localvalue'
import BlogAll, { BlogGetAllCategoryCandidat } from '../../action/api/blog/BlogAction'
import LoadingCompo1 from '../../components/loading/LoadingCompo1'
import moment from 'moment'
import { useNavigate } from 'react-router-dom'
import { routing } from '../../utlis/routing'

const BlogProfilePage = () => {
    const navigate = useNavigate();

    var idCandidat = getAndCheckLocalStorage(localvalue.candidatID);
    const { Loading, error, candidat } = useFetchCandidat(idCandidat);
    const { isLoadingBlog, errorBlog, blogs, blogs2 } = BlogAll()

    const { isLoading, errorPost, category, category2 } = BlogGetAllCategoryCandidat(idCandidat);

    return (
        <div class="main-content">
            <div class="page-content mt-28">




                <div class="EWLTGduHCjFnjN6tLCXV Atl0coQVHTfJeIp5DBNr ">
                    <div class="_wYiJGbRZyFZeCc8y7Sf hD0sTTDgbxakubcHVW2X _Ybd3WwuTVljUT4vEaM3 mveJTCIb2WII7J4sY22F mngKhi_Rv06PF57lblDI _YxZw_O8dWkTljptcO7z SWDELhWFjL8JxEtm91_o _1jTZ8KXRZul60S6czNi dark:bg-white">
                        <div class="rvdRhGyExrNYTA6euxsF xu6Xcz2CnxX04u4eQAne SQf297smyJVNzzOO3iQL LvH1cgobxEYMRPVAp8WW ">
                            <img class="TR_P65x9ie7j6uxFo_Cs XO0Hd72IH1CH2AVjcbWM v2F5G_Fm6X1wxdNJdQlJ mveJTCIb2WII7J4sY22F"
                                src={candidat.coverPicture} alt="Jese portrait" />
                            <div>
                                <h2 class="vyo_A8gnQD1QWDPglr3h IOPhczRgtphv6NdNBDjj OyABRrnTV_kvHV7dJ0uE">{candidat.username}</h2>
                                <ul class="gC_jEY75u_oxfOOKnLpH wezTbYJgxYJp5ZDqX67N">
                                    <li class="YRrCJSr_j5nopfm4duUc Q_jg_EPdNf9eDMn1mLI2 c8dCx6gnV43hTOLV6ks5 _43MO1gcdi2Y0RJW1uHL PeR2JZ9BZHYIH8Ea3F36 XIIs8ZOri3wm8Wnj9N_y">
                                        <svg class="fhCwost7CSNRc2WSHLFW E9GV5sZJIbfO_GEQ_moc _o2IXcpM0qnG3JPReKus __9sbu0yrzdhGIkLWNXl OyABRrnTV_kvHV7dJ0uE" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M6 6V5a3 3 0 013-3h2a3 3 0 013 3v1h2a2 2 0 012 2v3.57A22.952 22.952 0 0110 13a22.95 22.95 0 01-8-1.43V8a2 2 0 012-2h2zm2-1a1 1 0 011-1h2a1 1 0 011 1v1H8V5zm1 5a1 1 0 011-1h.01a1 1 0 110 2H10a1 1 0 01-1-1z" clip-rule="evenodd"></path><path d="M2 13.692V16a2 2 0 002 2h12a2 2 0 002-2v-2.308A24.974 24.974 0 0110 15c-2.796 0-5.487-.46-8-1.308z"></path></svg>
                                        {candidat.title_post}
                                    </li>
                                    <li class="YRrCJSr_j5nopfm4duUc Q_jg_EPdNf9eDMn1mLI2 c8dCx6gnV43hTOLV6ks5 _43MO1gcdi2Y0RJW1uHL PeR2JZ9BZHYIH8Ea3F36 XIIs8ZOri3wm8Wnj9N_y">
                                        <svg class="fhCwost7CSNRc2WSHLFW E9GV5sZJIbfO_GEQ_moc _o2IXcpM0qnG3JPReKus __9sbu0yrzdhGIkLWNXl OyABRrnTV_kvHV7dJ0uE" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z" clip-rule="evenodd"></path></svg>
                                        {candidat.adresse}
                                    </li>
                                </ul>
                            </div>
                        </div>
                        <div class="rvdRhGyExrNYTA6euxsF xu6Xcz2CnxX04u4eQAne seNju9ak6k60nJPVDVyn">
                            <div class="HD0QRNT3lUqWQhXP5VK8">
                                <address class="c8dCx6gnV43hTOLV6ks5 yo0GKAXAsUDIWsazc10y _43MO1gcdi2Y0RJW1uHL PeR2JZ9BZHYIH8Ea3F36 XIIs8ZOri3wm8Wnj9N_y">
                                    <div class="XJih04pKHf8Cekga6Hj3">
                                        Email address
                                    </div>
                                    <a class="c8dCx6gnV43hTOLV6ks5 ezMFUVl744lvw6ht0lFe __9sbu0yrzdhGIkLWNXl OyABRrnTV_kvHV7dJ0uE" href={`mailto:${candidat.email}`}>
                                        {candidat.email}
                                    </a>
                                    <div class="XJih04pKHf8Cekga6Hj3">
                                        Pays
                                    </div>
                                    <div class="TR_P65x9ie7j6uxFo_Cs c8dCx6gnV43hTOLV6ks5 ezMFUVl744lvw6ht0lFe __9sbu0yrzdhGIkLWNXl OyABRrnTV_kvHV7dJ0uE">
                                        {candidat.pays}
                                    </div>
                                    <div class="XJih04pKHf8Cekga6Hj3">
                                        Telephone
                                    </div>
                                    <div class="TR_P65x9ie7j6uxFo_Cs c8dCx6gnV43hTOLV6ks5 ezMFUVl744lvw6ht0lFe __9sbu0yrzdhGIkLWNXl OyABRrnTV_kvHV7dJ0uE">
                                        {candidat.telephone}
                                    </div>
                                </address>
                            </div>
                            <div class="_SmdlCf6eUKB_V9S5IDj HD0QRNT3lUqWQhXP5VK8">
                                <h3 class="TR_P65x9ie7j6uxFo_Cs d3C8uAdJKNl1jzfE9ynq IOPhczRgtphv6NdNBDjj __9sbu0yrzdhGIkLWNXl OyABRrnTV_kvHV7dJ0uE">About</h3>
                                <p class="c8dCx6gnV43hTOLV6ks5 _43MO1gcdi2Y0RJW1uHL PeR2JZ9BZHYIH8Ea3F36 XIIs8ZOri3wm8Wnj9N_y">
                                    Dedicated, passionate, and accomplished Full Stack Developer with 9+ years of progressive experience working as an Independent Contractor for Google and developing and growing my educational social network that helps others learn programming, web design, game development, networking.
                                </p>
                            </div>
                        </div>
                    </div>
                    <div class="_wYiJGbRZyFZeCc8y7Sf hD0sTTDgbxakubcHVW2X _Ybd3WwuTVljUT4vEaM3 mveJTCIb2WII7J4sY22F mngKhi_Rv06PF57lblDI _YxZw_O8dWkTljptcO7z SWDELhWFjL8JxEtm91_o _1jTZ8KXRZul60S6czNi">
                        <div class="FF0B1uH_gtoM9lki9mia">
                            <h3 class="vyo_A8gnQD1QWDPglr3h IOPhczRgtphv6NdNBDjj OyABRrnTV_kvHV7dJ0uE">Cateogire de publications </h3>
                            <ul class="YRrCJSr_j5nopfm4duUc hP1M5IgfjJiY8_B1VUN1 XJih04pKHf8Cekga6Hj3">
                                {
                                    category.map((item) => {
                                        return (
                                            <li class="Dnqe3vvw22y12_oWDYvR LNUrv_nGG839SRkGqY8B UptwuMAvsdRjvAaYNP6r d3C8uAdJKNl1jzfE9ynq ezMFUVl744lvw6ht0lFe _Cj_M6jt2eLjDgkBBNgI Qkdk47eO_FsOcXfaC9zb W5n_NSFnC6y2nqoHw_5x TR_P65x9ie7j6uxFo_Cs fhCwost7CSNRc2WSHLFW">{item}</li>
                                        )
                                    })
                                }

                            </ul>
                        </div>
                    </div>

                    <div class="container-fluid w-full justify-center">
                        <div class="flex flex-row px-5 container ">
                        <input  name="title" id="new-password"
                        class="fzhbbDQ686T8arwvi_bJ jtAJHOc7mn7b4IKRO59D pXhVRBC8yaUNllmIWxln vpDN1VEJLu5FmLkr5WCk __9sbu0yrzdhGIkLWNXl gx_pYWtAG2cJIqhquLbx mveJTCIb2WII7J4sY22F GdTcGtoKP5_bET3syLDl LceKfSImrGKQrtDGkpBV _Vb9igHms0hI1PQcvp_S t6gkcSf0Bt4MLItXvDJ_ olxDi3yL6f0gpdsOFDhx jqg6J89cvxmDiFpnV56r Mmx5lX7HVdrWCgh3EpTP H7KQDhgKsqZaTUouEUQL OyABRrnTV_kvHV7dJ0uE KpCMWe32PQyrSFbZVput q6szSHqGtBufkToFe_s5"
                        placeholder="titre de votre publication " />
                            <div class="YRrCJSr_j5nopfm4duUc Q_jg_EPdNf9eDMn1mLI2 zjZIaeYZzHaaBqxD5KzF EU43bH15DCmsqkGyVBGj SNt2jJ6mOxoWkDWNP3rs">
                                <button
                                    onClick={() => {
                                        navigate(`/${routing.blog_post}`)
                                    }}
                                    type="button" data-modal-toggle="add-user-modal" class="bg-blue-700 _k0lTW0vvzboctTxDi2R Q_jg_EPdNf9eDMn1mLI2 Nm7xMnguzOx6J5Ao7yCU Ce_ecllpQM9Lc4yCjD_9 _Cj_M6jt2eLjDgkBBNgI b9aD6g2qw84oyZNsMO8j c8dCx6gnV43hTOLV6ks5 ezMFUVl744lvw6ht0lFe ijrOHNoSVGATsWYKl4Id y6GKdvUrd7vp_pxsFb57 g40_g3BQzYCOX5eZADgY mveJTCIb2WII7J4sY22F YoPCmQ0E_V5W0GGmSIdm _dylIDxYTN3qgvD4U597 KmgKPWh7pHX4ztLneO0T icxWjIgUd9_dzYucx1nx d8_fVOcgDmbt7UdpfeLK WuKugQzwTT7o1wwBck2R _ZsTMX_gz275093orLWM">
                                    <svg class="YIUegm7fh_CpJbivTu6B MnxxlQlR1H0xJuMEE8Yr fhCwost7CSNRc2WSHLFW ZEPNZzATe5nPnS0shmrF" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M10 5a1 1 0 011 1v3h3a1 1 0 110 2h-3v3a1 1 0 11-2 0v-3H6a1 1 0 110-2h3V6a1 1 0 011-1z" clip-rule="evenodd"></path></svg>
                                    Poster
                                </button>
                            </div>
                        </div>

                    </div>





                    {
                        isLoadingBlog ?
                            (
                                <LoadingCompo1 text={"Chargement de publications..."} />
                            ) :
                            error ?
                                <p>Une erreur est surveneue </p> :
                                (<div class="uLPch_bqyJDXwe5tynMV M1YFStHQ2scEHZzvz7XX NM7Z1HBVjN_86WhEcXan _wYiJGbRZyFZeCc8y7Sf _8jcPkGLarEkE2SxNmlU Td37IMFwOi4Zt3Vhv3cT qDsn8ha5_HppqMcLKJwF wBVMFkIGfrKshbvi2gS1 _lTTGxW9MVI40FyDCtmr ywL5uTZPlgVihxkmcsCL">
                                    {blogs.map((item) => {
                                        if (idCandidat == item.idcustomerId) {
                                            return (
                                                <div class="_wYiJGbRZyFZeCc8y7Sf UYOSZJ1_pv3B5nt1ujCP _Ybd3WwuTVljUT4vEaM3 mveJTCIb2WII7J4sY22F mngKhi_Rv06PF57lblDI _1jTZ8KXRZul60S6czNi li3V2nWsIccF5bigdJK_ mLcQlleCsw78f8JnJ0rz wlDQu3XsiQM08HEeTqes">
                                                    <div class="YRrCJSr_j5nopfm4duUc Q_jg_EPdNf9eDMn1mLI2 d4louhNic5PFgJGRKqn6">
                                                        <div class="VQS2tmQ_zFyBOC2tkmto">
                                                            <img class="hlT3pgfpx11BUFMWNdhc Mln3CkDzLcoVQAC3Uqsd RpVwy4sO7Asb86CncKJ_" src={item.customerPhoto} alt="Neil Sims" />
                                                        </div>
                                                        <div class="_74lpPUMEtHf6F0_fjLe G4dLHP1O7x3gaD0_p7Kc">
                                                            <p class="c8dCx6gnV43hTOLV6ks5 yM_AorRf2jSON3pDsdrz __9sbu0yrzdhGIkLWNXl vfNYjqjYMlN1XskEucCt OyABRrnTV_kvHV7dJ0uE">{item.customerName}</p>
                                                            <p class="c8dCx6gnV43hTOLV6ks5 _43MO1gcdi2Y0RJW1uHL PeR2JZ9BZHYIH8Ea3F36 vfNYjqjYMlN1XskEucCt XIIs8ZOri3wm8Wnj9N_y">
                                                                {moment(item.createdAt).format("DD/MM/YYYY")} {moment(item.createdAt).format("HH:MM")}
                                                            </p>
                                                        </div>
                                                        <a href="#" class="_k0lTW0vvzboctTxDi2R Nm7xMnguzOx6J5Ao7yCU sQaK4IH7BIQSgBTGX8Pe PeR2JZ9BZHYIH8Ea3F36 Y3FxyuXtj2gecrGXvLEI SA5DoMHfwOFtY4h_qzuM OPrb_iG5WDy_7F05BDOX dMTOiA3mf3FTjlHu6DqW XIIs8ZOri3wm8Wnj9N_y ZnBoTVi7VOJdCLSSU62n _7KA5gD55t2lxf9Jkj20">
                                                            <svg class="YIUegm7fh_CpJbivTu6B MnxxlQlR1H0xJuMEE8Yr" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path d="M10 6a2 2 0 110-4 2 2 0 010 4zM10 12a2 2 0 110-4 2 2 0 010 4zM10 18a2 2 0 110-4 2 2 0 010 4z"></path></svg>
                                                        </a>
                                                    </div>
                                                    <div class="UYOSZJ1_pv3B5nt1ujCP">
                                                        <p class="d3C8uAdJKNl1jzfE9ynq _43MO1gcdi2Y0RJW1uHL PeR2JZ9BZHYIH8Ea3F36 XIIs8ZOri3wm8Wnj9N_y">
                                                            {item.title}
                                                        </p>

                                                        {
                                                            item && item.coverPicture ?
                                                                <div class="YRrCJSr_j5nopfm4duUc hP1M5IgfjJiY8_B1VUN1">
                                                                    <img class="fScvmu_bLBCkoXb3Xml3 oADHwEO31S0aPXWCcSfQ hD0sTTDgbxakubcHVW2X y7LTF_4HCOoAzmZm_v8k mveJTCIb2WII7J4sY22F"
                                                                        src={item.coverPicture} alt="task screenshot" />
                                                                </div> :
                                                                null
                                                        }

                                                    </div>
                                                    <div class="YRrCJSr_j5nopfm4duUc i8v96MUlFwGv9qJUkAx7 e2hrZSYddULUFUtJ9wBR pVSXSlnJdgskzP7BxPBe EpUSgjHdM6oyMXUiK_8_ qUWbS_LTZujDB4XCd11V _fGhMnSfYmaGrv7DvZ00">
                                                        <a href="#" class="YRrCJSr_j5nopfm4duUc Q_jg_EPdNf9eDMn1mLI2 c8dCx6gnV43hTOLV6ks5 ezMFUVl744lvw6ht0lFe PeR2JZ9BZHYIH8Ea3F36 oJZU4OQzzfXeLbF7UKZ_ ZnBoTVi7VOJdCLSSU62n XIIs8ZOri3wm8Wnj9N_y dMTOiA3mf3FTjlHu6DqW">
                                                            <svg class="E9GV5sZJIbfO_GEQ_moc _o2IXcpM0qnG3JPReKus _x10ClrjYfqGxZTMmpBl" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M18 13V5a2 2 0 00-2-2H4a2 2 0 00-2 2v8a2 2 0 002 2h3l3 3 3-3h3a2 2 0 002-2zM5 7a1 1 0 011-1h8a1 1 0 110 2H6a1 1 0 01-1-1zm1 3a1 1 0 100 2h3a1 1 0 100-2H6z" clip-rule="evenodd"></path></svg>
                                                            7 Comments
                                                        </a>
                                                        <a href="#" class="YRrCJSr_j5nopfm4duUc Q_jg_EPdNf9eDMn1mLI2 c8dCx6gnV43hTOLV6ks5 ezMFUVl744lvw6ht0lFe PeR2JZ9BZHYIH8Ea3F36 oJZU4OQzzfXeLbF7UKZ_ ZnBoTVi7VOJdCLSSU62n XIIs8ZOri3wm8Wnj9N_y dMTOiA3mf3FTjlHu6DqW">
                                                            <svg class="E9GV5sZJIbfO_GEQ_moc _o2IXcpM0qnG3JPReKus _x10ClrjYfqGxZTMmpBl" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M3.172 5.172a4 4 0 015.656 0L10 6.343l1.172-1.171a4 4 0 115.656 5.656L10 17.657l-6.828-6.829a4 4 0 010-5.656z" clip-rule="evenodd"></path></svg>
                                                            457 Likes
                                                        </a>
                                                    </div>
                                                    <div>
                                                        <form action="#">
                                                            <label for="write-message" class="_DVAfiyo21kM68EUVzEQ">Comment</label>
                                                            <input type="text" id="write-message" placeholder="Write comment" class="jtAJHOc7mn7b4IKRO59D pXhVRBC8yaUNllmIWxln vpDN1VEJLu5FmLkr5WCk __9sbu0yrzdhGIkLWNXl c8dCx6gnV43hTOLV6ks5 mveJTCIb2WII7J4sY22F GdTcGtoKP5_bET3syLDl LceKfSImrGKQrtDGkpBV _Vb9igHms0hI1PQcvp_S t6gkcSf0Bt4MLItXvDJ_ olxDi3yL6f0gpdsOFDhx jqg6J89cvxmDiFpnV56r Mmx5lX7HVdrWCgh3EpTP H7KQDhgKsqZaTUouEUQL OyABRrnTV_kvHV7dJ0uE KpCMWe32PQyrSFbZVput q6szSHqGtBufkToFe_s5" />
                                                        </form>
                                                    </div>
                                                </div>
                                            )
                                        }
                                    })}
                                </div>
                                )
                    }





                </div>






            </div>
        </div>
    )
}

export default BlogProfilePage;
