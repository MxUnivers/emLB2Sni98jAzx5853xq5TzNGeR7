import React from 'react'
import useFetchCandidat, { CandidatEditCompetence } from '../../action/api/candidat/CandidatAction'
import { getAndCheckLocalStorage, setWithExpiration } from '../../utlis/storage/localvalueFunction'
import { dureeDeVie, localvalue } from '../../utlis/storage/localvalue'
import BlogAll, { BlogGetAllCategoryCandidat } from '../../action/api/blog/BlogAction'
import LoadingCompo1 from '../../components/loading/LoadingCompo1'
import ErrorPrincing from '../../components/empty/ErrorPrincing'
import moment from 'moment'
import { useNavigate } from 'react-router-dom'
import { routing } from '../../utlis/routing'
import { useEffect } from 'react'
import { useState } from 'react'
import { RiEditBoxLine } from "react-icons/ri";
import { AiOutlinePlus } from "react-icons/ai";
import { GrSearch } from "react-icons/gr";
import { statusPACKS } from '../../utlis/config'







const BlogProfilePage = () => {
    const navigate = useNavigate();

    var idCandidat = getAndCheckLocalStorage(localvalue.candidatID);
    const { Loading, error, candidat } = useFetchCandidat(idCandidat);
    const { isLoadingBlog, errorBlog, blogs, blogs2 } = BlogAll()

    const { isLoading, errorPost, category, category2 } = BlogGetAllCategoryCandidat(idCandidat);

    const [username, setusername] = useState();
    const [email, setemail] = useState();
    const [telephone, settelephone] = useState();
    const [coverPicture, setcoverPicture] = useState();
    const [adresse, setadresse] = useState();
    const [firstname, setfirstname] = useState();
    const [title_post, settitle_post] = useState();
    const [pays, setpays] = useState();




    useEffect(() => {
        if (candidat) {
            setusername(candidat.username);
            setcoverPicture(candidat.coverPicture);
            setadresse(candidat.adresse)
            setemail(candidat.email);
            settelephone(candidat.telephone)
            settitle_post(candidat.title_post);
            setpays(candidat.pays);
        }
    }, [candidat])

    return (
        <div className="main-content">
            <div className="page-content mt-28">
                {
                    candidat && candidat.account.pack == statusPACKS[2] ?
                        <>
                            <div className="EWLTGduHCjFnjN6tLCXV Atl0coQVHTfJeIp5DBNr ">
                                <div className="_wYiJGbRZyFZeCc8y7Sf hD0sTTDgbxakubcHVW2X _Ybd3WwuTVljUT4vEaM3 mveJTCIb2WII7J4sY22F mngKhi_Rv06PF57lblDI _YxZw_O8dWkTljptcO7z SWDELhWFjL8JxEtm91_o _1jTZ8KXRZul60S6czNi dark:bg-white">
                                    <div className="rvdRhGyExrNYTA6euxsF xu6Xcz2CnxX04u4eQAne SQf297smyJVNzzOO3iQL LvH1cgobxEYMRPVAp8WW ">

                                        <img className="TR_P65x9ie7j6uxFo_Cs XO0Hd72IH1CH2AVjcbWM v2F5G_Fm6X1wxdNJdQlJ mveJTCIb2WII7J4sY22F"
                                            src={coverPicture} alt="Jese portrait" />

                                        <div>

                                            <h2 className="vyo_A8gnQD1QWDPglr3h IOPhczRgtphv6NdNBDjj OyABRrnTV_kvHV7dJ0uE">{username}</h2>

                                            <ul className="gC_jEY75u_oxfOOKnLpH wezTbYJgxYJp5ZDqX67N">
                                                <li className="YRrCJSr_j5nopfm4duUc Q_jg_EPdNf9eDMn1mLI2 c8dCx6gnV43hTOLV6ks5 _43MO1gcdi2Y0RJW1uHL PeR2JZ9BZHYIH8Ea3F36 XIIs8ZOri3wm8Wnj9N_y">
                                                    <svg className="fhCwost7CSNRc2WSHLFW E9GV5sZJIbfO_GEQ_moc _o2IXcpM0qnG3JPReKus __9sbu0yrzdhGIkLWNXl OyABRrnTV_kvHV7dJ0uE" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M6 6V5a3 3 0 013-3h2a3 3 0 013 3v1h2a2 2 0 012 2v3.57A22.952 22.952 0 0110 13a22.95 22.95 0 01-8-1.43V8a2 2 0 012-2h2zm2-1a1 1 0 011-1h2a1 1 0 011 1v1H8V5zm1 5a1 1 0 011-1h.01a1 1 0 110 2H10a1 1 0 01-1-1z" clip-rule="evenodd"></path><path d="M2 13.692V16a2 2 0 002 2h12a2 2 0 002-2v-2.308A24.974 24.974 0 0110 15c-2.796 0-5.487-.46-8-1.308z"></path></svg>
                                                    {title_post}
                                                </li>
                                                <li className="YRrCJSr_j5nopfm4duUc Q_jg_EPdNf9eDMn1mLI2 c8dCx6gnV43hTOLV6ks5 _43MO1gcdi2Y0RJW1uHL PeR2JZ9BZHYIH8Ea3F36 XIIs8ZOri3wm8Wnj9N_y">
                                                    <svg className="fhCwost7CSNRc2WSHLFW E9GV5sZJIbfO_GEQ_moc _o2IXcpM0qnG3JPReKus __9sbu0yrzdhGIkLWNXl OyABRrnTV_kvHV7dJ0uE" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z" clip-rule="evenodd"></path></svg>
                                                    {adresse}
                                                </li>
                                            </ul>
                                        </div>
                                    </div>
                                    <div className="rvdRhGyExrNYTA6euxsF xu6Xcz2CnxX04u4eQAne seNju9ak6k60nJPVDVyn">
                                        <div className="HD0QRNT3lUqWQhXP5VK8">
                                            <address className="c8dCx6gnV43hTOLV6ks5 yo0GKAXAsUDIWsazc10y _43MO1gcdi2Y0RJW1uHL PeR2JZ9BZHYIH8Ea3F36 XIIs8ZOri3wm8Wnj9N_y">
                                                <div className="XJih04pKHf8Cekga6Hj3">
                                                    Email address
                                                </div>

                                                <a className="c8dCx6gnV43hTOLV6ks5 ezMFUVl744lvw6ht0lFe __9sbu0yrzdhGIkLWNXl OyABRrnTV_kvHV7dJ0uE" href={`mailto:${candidat && candidat.email ? candidat.email : ""}`}>
                                                    {email}
                                                </a>
                                                <div className="XJih04pKHf8Cekga6Hj3">
                                                    Pays
                                                </div>

                                                <div className="TR_P65x9ie7j6uxFo_Cs c8dCx6gnV43hTOLV6ks5 ezMFUVl744lvw6ht0lFe __9sbu0yrzdhGIkLWNXl OyABRrnTV_kvHV7dJ0uE">
                                                    {pays}
                                                </div>

                                                <div className="XJih04pKHf8Cekga6Hj3">
                                                    Telephone
                                                </div>

                                                <div className="TR_P65x9ie7j6uxFo_Cs c8dCx6gnV43hTOLV6ks5 ezMFUVl744lvw6ht0lFe __9sbu0yrzdhGIkLWNXl OyABRrnTV_kvHV7dJ0uE">
                                                    {telephone}
                                                </div>
                                            </address>
                                        </div>
                                        <div className="_SmdlCf6eUKB_V9S5IDj HD0QRNT3lUqWQhXP5VK8">
                                            <h3 className="TR_P65x9ie7j6uxFo_Cs d3C8uAdJKNl1jzfE9ynq IOPhczRgtphv6NdNBDjj __9sbu0yrzdhGIkLWNXl OyABRrnTV_kvHV7dJ0uE">About</h3>
                                            <p className="c8dCx6gnV43hTOLV6ks5 _43MO1gcdi2Y0RJW1uHL PeR2JZ9BZHYIH8Ea3F36 XIIs8ZOri3wm8Wnj9N_y">
                                                Dedicated, passionate, and accomplished Full Stack Developer with 9+ years of progressive experience working as an Independent Contractor for Google and developing and growing my educational social network that helps others learn programming, web design, game development, networking.
                                            </p>
                                        </div>
                                    </div>
                                </div>
                                {
                                    category && category.length > 0 ?
                                        <div className="_wYiJGbRZyFZeCc8y7Sf hD0sTTDgbxakubcHVW2X _Ybd3WwuTVljUT4vEaM3 mveJTCIb2WII7J4sY22F mngKhi_Rv06PF57lblDI _YxZw_O8dWkTljptcO7z SWDELhWFjL8JxEtm91_o _1jTZ8KXRZul60S6czNi">
                                            <div className="FF0B1uH_gtoM9lki9mia">
                                                <h3 className="vyo_A8gnQD1QWDPglr3h IOPhczRgtphv6NdNBDjj OyABRrnTV_kvHV7dJ0uE">Cateogire de publications </h3>
                                                <ul className="YRrCJSr_j5nopfm4duUc hP1M5IgfjJiY8_B1VUN1 XJih04pKHf8Cekga6Hj3">
                                                    {
                                                        category.map((item) => {
                                                            return (
                                                                <li className="text-xs Dnqe3vvw22y12_oWDYvR LNUrv_nGG839SRkGqY8B UptwuMAvsdRjvAaYNP6r d3C8uAdJKNl1jzfE9ynq ezMFUVl744lvw6ht0lFe _Cj_M6jt2eLjDgkBBNgI Qkdk47eO_FsOcXfaC9zb W5n_NSFnC6y2nqoHw_5x TR_P65x9ie7j6uxFo_Cs fhCwost7CSNRc2WSHLFW">{item}</li>
                                                            )
                                                        })
                                                    }

                                                </ul>
                                            </div>
                                        </div> : null
                                }


                                <div className="container-fluid w-full justify-center">
                                    <div className="mt-10  w-full flex max-w-md mx-auto lg:mx-0">
                                        <div className="flex sm:flex-row flex-col gap-5 w-full">
                                            <form action="#"
                                                className="py-1 pl-6 w-full pr-1 flex gap-3 items-center text-gray-600 shadow-lg shadow-gray-200/20  bg-white rounded-full ease-linear focus-within:bg-white  ">
                                                <span className="min-w-max pr-2 border-r border-gray-200">
                                                    <GrSearch className="h-5 w-5" />
                                                </span>
                                                <input type="text" name="" id="" placeholder="recherche "
                                                    className="w-full py-3 outline-none bg-transparent rounded-3xl" />
                                                <button
                                                    onClick={() => {
                                                        navigate(`/${routing.blog_post}`);
                                                    }}
                                                    type='button' className="flex text-white justify-center items-center w-max min-w-max sm:w-max px-6 h-12 rounded-full outline-none relative overflow-hidden border duration-300 ease-linear after:absolute after:inset-x-0 after:aspect-square after:scale-0 after:opacity-70 after:origin-center after:duration-300 after:ease-linear after:rounded-full after:top-0 after:left-0 after:bg-[#172554] hover:after:opacity-100 hover:after:scale-[2.5] bg-blue-600 border-transparent hover:border-[#172554]">
                                                    <span className="hidden sm:flex relative z-[5]">
                                                        Poster
                                                    </span>
                                                    <span className="flex sm:hidden relative z-[5]">
                                                        <AiOutlinePlus className="w-5 h-5" />
                                                    </span>
                                                </button>
                                            </form>
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
                                            (<div className="uLPch_bqyJDXwe5tynMV M1YFStHQ2scEHZzvz7XX NM7Z1HBVjN_86WhEcXan _wYiJGbRZyFZeCc8y7Sf _8jcPkGLarEkE2SxNmlU Td37IMFwOi4Zt3Vhv3cT qDsn8ha5_HppqMcLKJwF wBVMFkIGfrKshbvi2gS1 _lTTGxW9MVI40FyDCtmr ywL5uTZPlgVihxkmcsCL">
                                                {blogs.map((item) => {
                                                    if (idCandidat == item.idcustomerId) {
                                                        return (
                                                            <div className="_wYiJGbRZyFZeCc8y7Sf UYOSZJ1_pv3B5nt1ujCP _Ybd3WwuTVljUT4vEaM3 mveJTCIb2WII7J4sY22F mngKhi_Rv06PF57lblDI _1jTZ8KXRZul60S6czNi li3V2nWsIccF5bigdJK_ mLcQlleCsw78f8JnJ0rz wlDQu3XsiQM08HEeTqes">
                                                                <div className="YRrCJSr_j5nopfm4duUc Q_jg_EPdNf9eDMn1mLI2 d4louhNic5PFgJGRKqn6">
                                                                    <div className="VQS2tmQ_zFyBOC2tkmto">
                                                                        <img className="hlT3pgfpx11BUFMWNdhc Mln3CkDzLcoVQAC3Uqsd RpVwy4sO7Asb86CncKJ_" src={item.customerPhoto} alt="Neil Sims" />
                                                                    </div>
                                                                    <div className="_74lpPUMEtHf6F0_fjLe G4dLHP1O7x3gaD0_p7Kc">
                                                                        <p className="c8dCx6gnV43hTOLV6ks5 yM_AorRf2jSON3pDsdrz __9sbu0yrzdhGIkLWNXl vfNYjqjYMlN1XskEucCt OyABRrnTV_kvHV7dJ0uE">{item.customerName}</p>
                                                                        <p className="c8dCx6gnV43hTOLV6ks5 _43MO1gcdi2Y0RJW1uHL PeR2JZ9BZHYIH8Ea3F36 vfNYjqjYMlN1XskEucCt XIIs8ZOri3wm8Wnj9N_y">
                                                                            {moment(item.createdAt).format("DD/MM/YYYY")} {moment(item.createdAt).format("HH:MM")}
                                                                        </p>
                                                                    </div>
                                                                    <div
                                                                        onClick={() => {
                                                                            setWithExpiration(localvalue.BlogID, item._id, dureeDeVie);
                                                                            navigate(`/${routing.blog_edit}`, { state: { item } })
                                                                        }}
                                                                        className="cursor-pointer _k0lTW0vvzboctTxDi2R Nm7xMnguzOx6J5Ao7yCU sQaK4IH7BIQSgBTGX8Pe PeR2JZ9BZHYIH8Ea3F36 Y3FxyuXtj2gecrGXvLEI SA5DoMHfwOFtY4h_qzuM OPrb_iG5WDy_7F05BDOX dMTOiA3mf3FTjlHu6DqW XIIs8ZOri3wm8Wnj9N_y ZnBoTVi7VOJdCLSSU62n _7KA5gD55t2lxf9Jkj20">
                                                                        <RiEditBoxLine />
                                                                    </div>
                                                                </div>
                                                                <div className="UYOSZJ1_pv3B5nt1ujCP">
                                                                    <h2 className="font-semibold d3C8uAdJKNl1jzfE9ynq _43MO1gcdi2Y0RJW1uHL PeR2JZ9BZHYIH8Ea3F36 XIIs8ZOri3wm8Wnj9N_y">
                                                                        {item.title}
                                                                    </h2>

                                                                    {
                                                                        item && item.coverPicture ?
                                                                            <div className="YRrCJSr_j5nopfm4duUc hP1M5IgfjJiY8_B1VUN1">
                                                                                <img className="fScvmu_bLBCkoXb3Xml3 oADHwEO31S0aPXWCcSfQ hD0sTTDgbxakubcHVW2X y7LTF_4HCOoAzmZm_v8k mveJTCIb2WII7J4sY22F"
                                                                                    src={item.coverPicture} alt="task screenshot" />
                                                                            </div> :
                                                                            null
                                                                    }

                                                                </div>
                                                                <div className="YRrCJSr_j5nopfm4duUc i8v96MUlFwGv9qJUkAx7 e2hrZSYddULUFUtJ9wBR pVSXSlnJdgskzP7BxPBe EpUSgjHdM6oyMXUiK_8_ qUWbS_LTZujDB4XCd11V _fGhMnSfYmaGrv7DvZ00">
                                                                    <a href="#" className="YRrCJSr_j5nopfm4duUc Q_jg_EPdNf9eDMn1mLI2 c8dCx6gnV43hTOLV6ks5 ezMFUVl744lvw6ht0lFe PeR2JZ9BZHYIH8Ea3F36 oJZU4OQzzfXeLbF7UKZ_ ZnBoTVi7VOJdCLSSU62n XIIs8ZOri3wm8Wnj9N_y dMTOiA3mf3FTjlHu6DqW">
                                                                        <svg className="E9GV5sZJIbfO_GEQ_moc _o2IXcpM0qnG3JPReKus _x10ClrjYfqGxZTMmpBl" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M18 13V5a2 2 0 00-2-2H4a2 2 0 00-2 2v8a2 2 0 002 2h3l3 3 3-3h3a2 2 0 002-2zM5 7a1 1 0 011-1h8a1 1 0 110 2H6a1 1 0 01-1-1zm1 3a1 1 0 100 2h3a1 1 0 100-2H6z" clip-rule="evenodd"></path></svg>
                                                                        7 Comments
                                                                    </a>
                                                                    <a href="#" className="YRrCJSr_j5nopfm4duUc Q_jg_EPdNf9eDMn1mLI2 c8dCx6gnV43hTOLV6ks5 ezMFUVl744lvw6ht0lFe PeR2JZ9BZHYIH8Ea3F36 oJZU4OQzzfXeLbF7UKZ_ ZnBoTVi7VOJdCLSSU62n XIIs8ZOri3wm8Wnj9N_y dMTOiA3mf3FTjlHu6DqW">
                                                                        <svg className="E9GV5sZJIbfO_GEQ_moc _o2IXcpM0qnG3JPReKus _x10ClrjYfqGxZTMmpBl" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M3.172 5.172a4 4 0 015.656 0L10 6.343l1.172-1.171a4 4 0 115.656 5.656L10 17.657l-6.828-6.829a4 4 0 010-5.656z" clip-rule="evenodd"></path></svg>
                                                                        457 Likes
                                                                    </a>
                                                                </div>
                                                                <div>
                                                                    <form action="#">
                                                                        <label for="write-message" className="_DVAfiyo21kM68EUVzEQ">Comment</label>
                                                                        <input type="text" id="write-message" placeholder="Write comment" className="jtAJHOc7mn7b4IKRO59D pXhVRBC8yaUNllmIWxln vpDN1VEJLu5FmLkr5WCk __9sbu0yrzdhGIkLWNXl c8dCx6gnV43hTOLV6ks5 mveJTCIb2WII7J4sY22F GdTcGtoKP5_bET3syLDl LceKfSImrGKQrtDGkpBV _Vb9igHms0hI1PQcvp_S t6gkcSf0Bt4MLItXvDJ_ olxDi3yL6f0gpdsOFDhx jqg6J89cvxmDiFpnV56r Mmx5lX7HVdrWCgh3EpTP H7KQDhgKsqZaTUouEUQL OyABRrnTV_kvHV7dJ0uE KpCMWe32PQyrSFbZVput q6szSHqGtBufkToFe_s5" />
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
                        </>
                        :
                        <ErrorPrincing title={"Profile Social"} message={"Oups vous nête pas autorisé à accéder cette fonctionabilté, elle est destiné au Prémium"} route={routing.pricing} />
                }
            </div>
        </div>

    )
}

export default BlogProfilePage;
