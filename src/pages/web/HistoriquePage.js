import React, { useEffect, useState } from 'react'
import { OffreGetAll } from '../../action/api/offres/OffresAction';
import { CandidatGetById } from '../../action/api/candidat/CandidatAction';
import { localvalue } from '../../utlis/storage/localvalue';
import { BsTelephone, BsVoicemail } from "react-icons/bs";
import { SiGooglemaps } from "react-icons/si";
import { routing } from '../../utlis/routing';
import { AiTwotoneEdit } from "react-icons/ai";
import { typeadmin } from '../../utlis/storage/account';



const HistoriquePage = () => {
    var idProfile = localStorage.getItem(localvalue.candidat.idCandidat);
    var typeAdmin = localStorage.getItem(localvalue.typeAdmin);

    var bgImg = "https://images.pexels.com/photos/4559705/pexels-photo-4559705.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2";

    const [offres, setoffres] = useState([]);
    const [user, setuser] = useState();
    useEffect(() => {
        OffreGetAll(setoffres);
        CandidatGetById(idProfile, setuser);
    }, [])
    return (

        <div>

            <div class="page-banner-area item-bg-two" style={{ backgroundImage: `url('${bgImg}')` }}>
                <div class="d-table">
                    <div class="d-table-cell">
                        <div class="container">
                            <div class="page-banner-content">
                                <h2>Votre profile</h2>
                            </div>
                        </div>
                    </div>
                </div>
            </div>


            {
                /* Ajouter des site  */
            }


            <div className="container mx-auto p-4">


                {
                    user &&
                    <div className="container mx-auto p-4">
                        <div className="flex items-center mb-8">
                            <div>
                                <img
                                    src={user.coverPicture}
                                    alt={user.username}
                                    className="w-16 h-16 object-cover rounded-full mr-4"
                                />
                                <a href={`/${routing.candidatProfile.path}`}
                                    className="bg-blue-500 hover:bg-blue-700 flex space-x-1 text-white font-bold py-1 px-3 rounded"
                                >
                                    <AiTwotoneEdit class="h-7 w-7" /> <span>Modifier...</span>
                                </a>

                            </div>
                            <div>
                                <h1 className="text-2xl font-bold">{user.firstname} </h1>
                                <h2 className="text-lg text-gray-600">{user.lastname}</h2>
                                <p className="text-gray-600 p-3 rounded-lg bg-gray-100">{user.lettre_motivivation}</p>
                            </div>
                        </div>

                        <div className="mb-8">
                            <h3 className="text-xl font-bold mb-4">information contact</h3>
                            <div className="mb-4 shadow-lg p-3 bg-white">
                                <h4 className="text-lg font-normal"><a href={`mailto:${user.email}`}  > <p className='flex space-x-3 items-center '> <BsVoicemail class="text-gray-300" /> <span>{user.email}</span></p></a></h4>
                                <p className="text-gray-600 flex space-x-3 items-center"><BsTelephone class="text-gray-300" /> <span>{user.telephone}</span></p>
                                <p className="text-gray-600 flex space-x-3 items-center"> <SiGooglemaps class="text-gray-400" /> <span>{user.adresse}</span></p>
                            </div>
                        </div>
                        {
                            user && user.competences.length > 0 ?
                                <div className="mb-8">
                                    <h3 className="text-xl font-bold mb-4">Compétences</h3>
                                    <div className="mb-4 shadow-lg p-3 bg-white">

                                        {
                                            user.competences.map((item) => {
                                                return (
                                                    <h4 className="text-lg font-normal"> <p className='flex space-x-3 items-center '> <BsVoicemail class="text-gray-300" /> <span>{item}</span></p></h4>
                                                )
                                            }
                                            )
                                        }

                                    </div>
                                </div>
                                : null
                        }

                    </div>
                }









                {
                    typeAdmin == typeadmin.candidat ?
                        <div class="shadow-md p-3 rounded-lg border">
                            <h1 className="text-2xl font-bold mb-4">Vos offres d{"'"}emplois </h1>
                            {offres.map((offre) => (
                                <div key={offre.id} className="flex items-center mb-8">
                                    <img
                                        src={`${offre.logo}`.length > 15 || `${offre.logo}`.length == "" | null ? offre.logo :
                                            "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQow8AkuhZ9if3JUQJSEbT9hlhVldNECSBNiQ&usqp=CAU"
                                        }
                                        alt={offre.titre}
                                        className="w-16 h-16 object-cover rounded-full mr-4"
                                    />
                                    <div>
                                        <h2 className="text-lg font-bold">{offre.titre}</h2>
                                        <p className="text-gray-600">{offre.entreprise}</p>
                                        <p className="text-gray-600">{offre.date}</p>
                                    </div>
                                </div>
                            ))}
                        </div>
                        : null

                }
            </div>



        </div>


    )
}


export default HistoriquePage;