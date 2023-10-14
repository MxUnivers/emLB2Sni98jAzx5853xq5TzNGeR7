import React from 'react'
import { useState } from 'react';
import { AiOutlineSearch } from 'react-icons/ai';
import { BsHouseDoor } from 'react-icons/bs';
import { CiLocationOn } from 'react-icons/ci';
import LoadingCompo1 from '../../components/loading/LoadingCompo1';
import { useEffect } from 'react';
import { CandidatGetAll } from '../../action/api/candidat/CandidatAction';
import { getAndCheckLocalStorage } from '../../utlis/storage/localvalueFunction';
import { localvalue } from '../../utlis/storage/localvalue';
import CandidatCard from '../../components/candidat/profile/CandidatCard';
import { useFetchEntreprise } from '../../action/api/employeur/EmployeurAction';
import Select from "react-select";
import { competences } from '../../utlis/options/candidatOption';
const CandidatPage = () => {


    var idEntreprise = getAndCheckLocalStorage(localvalue.recruteurID);

    const [selectCompetences, setselectCompetences] = useState();
    const handleSelectCompetence = (selectOptions) => {
        setselectCompetences(selectOptions);
        if (selectOptions && selectOptions.length > 0) {
            const selectedCompetenceValues = selectOptions.map(option => option.value);
            const filteredCandidates = candidatAll2.filter(candidate => {
                return candidate.competences.some(competence => selectedCompetenceValues.includes(competence.value));
            });
            setcandidatAll(filteredCandidates);
        } else {
            setcandidatAll(candidatAll2);
        }

    }



    const [isLoading, setisLoading] = useState(true)
    const [candidatAll, setcandidatAll] = useState([])
    const [candidatAll2, setcandidatAll2] = useState([])
    const [showMsg, setshowMsg] = useState(false);
    const handleShowMsg = () => setshowMsg(true);
    const handleCloseMsg = () => setshowMsg(false);
    useEffect(() => {
        CandidatGetAll(setcandidatAll, setcandidatAll2)
            .finally(() => {
                setisLoading(false);
            })
    }, [])



    const { isLoadingEntreprise, errorEnreprise, entreprise } = useFetchEntreprise(idEntreprise);



    return (
        <div class="main-content">



            <div class="main-content">


                <div className='bg-white mt-24 grid gap-10 bg-greyIsh rounded-[10px] p-[3rem] m-5 max-h-screen'>

                    <form action=''>

                        <div className='firstDiv flex justify-between items-center rounded-[8px] gap-[10px] bg-white p-5 shadow-greyIsh-700'>

                            <div className='flex gap-2 items-center'>
                                <AiOutlineSearch className='text-[25px] icon' />
                                <Select
                                    isMulti
                                    options={competences}
                                    value={selectCompetences}
                                    onChange={handleSelectCompetence}
                                    placeholder="choix de vos compétences"
                                    id="settings-language" name="countries"
                                    className="jtAJHOc7mn7b4IKRO59D vpDN1VEJLu5FmLkr5WCk __9sbu0yrzdhGIkLWNXl gx_pYWtAG2cJIqhquLbx mveJTCIb2WII7J4sY22F GdTcGtoKP5_bET3syLDl LceKfSImrGKQrtDGkpBV _Vb9igHms0hI1PQcvp_S t6gkcSf0Bt4MLItXvDJ_ olxDi3yL6f0gpdsOFDhx jqg6J89cvxmDiFpnV56r Mmx5lX7HVdrWCgh3EpTP H7KQDhgKsqZaTUouEUQL OyABRrnTV_kvHV7dJ0uE KpCMWe32PQyrSFbZVput q6szSHqGtBufkToFe_s5"

                                />
                            </div>
                            {
                                /*<button className=' h-full p-5 px-10 rounded-[10px] btn btn-primary text-white cursor-pointer bg-blue-600 hover:bg-blue-500'>rechercher</button> */
                            }
                        </div>
                    </form>



                </div>



                <section class="section">
                    <div class="container-fluid px-5">
                        {
                            isLoading ?
                                (<LoadingCompo1 text={"Candidats trouver les candidats qui vous conviennent le mieux ..."} />)
                                :

                                candidatAll && candidatAll.length > 0 ?
                                    <div class="w-full grid xs:grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 mb-10 ">

                                        {
                                            candidatAll.map((item) => {
                                                return (
                                                    <CandidatCard item={item} entreprise={entreprise} />
                                                )
                                            })
                                        }
                                    </div>

                                    :
                                    <div class="">
                                        <div class="h-screen p-5 border p-5 flex justify-center">
                                            <p>Aucun candidats dans la recommandation</p>
                                        </div>

                                    </div>
                        }
                    </div>



                </section>












            </div>
        </div>
    )
}

export default CandidatPage;