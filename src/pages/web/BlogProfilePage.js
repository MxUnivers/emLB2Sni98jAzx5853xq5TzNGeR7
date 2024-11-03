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
import BlogCard from '../../components/blog/BlogCard'







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
                                                    if(getAndCheckLocalStorage(localvalue.candidatID) == item.idcustomerId){
                                                        return <BlogCard item={item} />
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
