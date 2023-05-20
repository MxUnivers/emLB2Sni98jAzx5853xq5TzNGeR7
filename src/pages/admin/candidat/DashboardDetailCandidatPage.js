import React, { useEffect, useState } from 'react';
import { routing } from '../../../utlis/routing';
import { CandidatGetById } from '../../../action/api/candidat/CandidatAction';
import { localvalue, localvalueGet, localvalueGetCandidat } from '../../../utlis/storage/localvalue';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBackspace, faEnvelope, faPhone } from '@fortawesome/free-solid-svg-icons';
import { Retour } from '../../../utlis/url/ListFunction';
import AvancedLoaderProfile from '../../../components/chargement/profile/AvancedLoaderProfile';

const DashboardDetailCandidatPage = () => {

    const [candidat, setcandidat] = useState();

    useEffect(() => {
        CandidatGetById(localStorage.getItem(localvalue.candidat.idCandidatDetail), setcandidat);
    }, [])


    return (
        <div>
            <div class="breadcrumb-area">
                <h1>Candidat</h1>
                <ol class="breadcrumb">
                    <li class="item"><a href={`/${routing.candidatDashboard.path}`}>Tableau de board</a></li>
                    <li class="item">offre d{"'"}emplois</li>
                </ol>
            </div>
            <div class="dashboard-jobs-box">
                <h2>
                    <button onClick={Retour} class="btn btn bg-blue-400 text-white"><FontAwesomeIcon icon={faBackspace} className="ml-2" /> retour</button>
                </h2>
                {
                    candidat ?
                        <div className="flex flex-col justify-center items-center mt-8">
                            <img src={candidat.coverPicture} alt="avatar" className="rounded-full w-24 h-24 object-cover" />
                            <h1 className="font-bold text-2xl mt-4">{candidat.nom} {candidat.prenom}</h1>
                            <p className="text-gray-600 mt-2">{candidat.poste}</p>
                            <div className="flex mt-4">
                                <div className="mr-8">
                                    <p className="font-medium text-gray-600"><FontAwesomeIcon icon={faEnvelope} className="ml-2" /> Email</p>
                                    <p className="text-gray-700">{candidat.email}</p>
                                </div>
                                <div>
                                    <p className="font-medium text-gray-600"> <FontAwesomeIcon icon={faPhone} className="ml-2" />Téléphone</p>
                                    <p className="text-gray-700">{candidat.telephone}</p>
                                </div>
                            </div>
                            <div className="flex mt-4">

                                <div className="mr-8">
                                    <p className="font-medium text-gray-600">Compétences</p>
                                    <ul>
                                        {candidat.competences && candidat.competences ?
                                            (
                                                candidat.competences.map((competence) => (
                                                    <li className="text-gray-700">{competence}</li>
                                                ))
                                            ) :
                                            <div class="py-1 px-2 bg-gray-200 rounded-lg text-center text-gray-500">
                                            </div>
                                        }
                                    </ul>
                                </div>
                                <div>
                                    <p className="font-medium text-gray-600">Langues</p>
                                    <ul>
                                        {candidat.langues && candidat.length > 0 ?
                                            (
                                                candidat.langues.map((langue) => (
                                                    <li className="text-gray-700">{langue}</li>
                                                ))
                                            ) :
                                            <div class="bg-white shadow-sm py-1 px-2 rounded-lg text-center">Aucune langue</div>
                                        }
                                    </ul>
                                </div>
                            </div>
                            <div className="flex mt-4">
                                <div className="mr-8">
                                    <p className="font-medium text-gray-600">Formation</p>
                                    <ul>
                                        <li className="text-gray-700">{candidat.level_school}</li>
                                    </ul>
                                </div>
                                <div>
                                    <p className="font-medium text-gray-600">Expériences</p>
                                    <ul>
                                        <li className="text-gray-700">{candidat.years_experiences}</li>
                                    </ul>
                                </div>
                            </div>
                            <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded mt-8">
                                Envoyer un message <FontAwesomeIcon icon={faEnvelope} className="ml-2" />
                            </button>
                            <button className="bg-gray-500 hover:bg-gray-700 text-white font-bold py-2 px-4 rounded ml-4 mt-8">
                                Appeler <FontAwesomeIcon icon={faPhone} className="ml-2" />
                            </button>
                        </div>
                        :
                        <AvancedLoaderProfile/>
                }
            </div>
        </div>
    )
}

export default DashboardDetailCandidatPage;