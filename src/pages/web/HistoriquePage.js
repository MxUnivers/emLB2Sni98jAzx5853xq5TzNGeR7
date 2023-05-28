import React, { useEffect, useState } from 'react'
import { OffreGetAll, OffreGetById } from '../../action/api/offres/OffresAction';
import { CandidatGetById } from '../../action/api/candidat/CandidatAction';
import { localvalue } from '../../utlis/storage/localvalue';
import { BsTelephone, BsVoicemail } from "react-icons/bs";
import { SiGooglemaps } from "react-icons/si";
import { routing } from '../../utlis/routing';
import { AiTwotoneEdit } from "react-icons/ai";
import { typeadmin } from '../../utlis/storage/account';
import { Tab, TabList, TabPanel, Tabs } from 'react-tabs';
import 'react-tabs/style/react-tabs.css';
import CandidaturesForCandidat from '../../components/web/candidat/CandidaturesForCandidat';
import { useNavigate } from 'react-router-dom';
import localforage from 'localforage';
import { Button, Modal } from 'react-bootstrap';
import AvancedLoaderProfile from '../../components/chargement/profile/AvancedLoaderProfile';
import moment from 'moment';
import { FaGooglePlay } from "react-icons/fa";








const HistoriquePage = () => {

    const navigation = useNavigate();


    var idProfile = localStorage.getItem(localvalue.candidat.idCandidat);
    var typeAdmin = localStorage.getItem(localvalue.typeAdmin);

    var bgImg = "https://images.pexels.com/photos/4559705/pexels-photo-4559705.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2";

    const [dataOffre, setdataOffre] = useState();
    const [offres, setoffres] = useState([]);
    const [user, setuser] = useState();
    useEffect(() => {
        OffreGetAll(setoffres);
        CandidatGetById(idProfile, setuser);
    }, []);



    const [showModal, setShowModal] = useState(false);
    const handleCloseModal = () => {
        setShowModal(false);
    };
    const handleOpenModal = () => {
        setShowModal(true);
    };
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






                {/*     *********************************        Candidat          $$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$ */}
                <Tabs>
                    <TabList class="flex flex-row my-2 border-b">
                        <Tab><button
                            class="bg-blue-500 hover:bg-blue-700 flex space-x-1 text-white font-bold py-1 px-3 rounded m-1"
                        >Offres d{"'"}emplois</button></Tab>
                        <Tab><button
                            class="bg-blue-500 hover:bg-blue-700 flex space-x-1 text-white font-bold py-1 px-3 rounded m-1"
                        >
                            {
                                typeAdmin == typeadmin.candidat && user ?
                                    `Postulés (${user.offresPostulees.length})` :
                                    null
                            }
                        </button></Tab>

                        <Tab>
                            <button class="bg-blue-600 hover:bg-blue-700 text-white rounded-lg py-1 px-3 m-1 ">Candidatures ...</button>
                        </Tab>


                    </TabList>
                    {
                        typeAdmin == typeadmin.candidat ?
                            <TabPanel>
                                <h1 className="text-2xl font-bold mb-4">Vos offres d{"'"}emplois </h1>
                                <div class="shadow-md p-3 rounded-lg border">
                                    {offres.map((offre) => (
                                        <a type='button' href={`#detail-sur-l'offre-${String(offre.titre).replaceAll(" ", "-")}`} key={offre._id} className="flex items-center mb-8 hover:bg-gray-50"
                                            onClick={() => {
                                                handleOpenModal();
                                                OffreGetById(offre._id, setdataOffre);
                                            }}
                                        >
                                            <img
                                                src={`${offre.logo}`.length > 15 || `${offre.logo}`.length == "" | null ? offre.logo :
                                                    "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQow8AkuhZ9if3JUQJSEbT9hlhVldNECSBNiQ&usqp=CAU"
                                                }
                                                alt={offre.titre}
                                                className="w-16 h-16 object-cover rounded-full mr-4"
                                            />
                                            <div>
                                                <a className="text-lg font-bold"
                                                >{offre.titre}</a>
                                                <p className="text-gray-600">{offre.entreprise}</p>
                                                <p className="text-gray-600">{offre.date}</p>
                                            </div>
                                        </a>
                                    ))}
                                </div>
                            </TabPanel>
                            : null
                    }
                    {
                        typeAdmin == typeadmin.candidat ?
                            <TabPanel>
                                <h1 className="text-2xl font-bold mb-4"> Listes vos postes aux candidatures </h1>
                                <div class="shadow-md p-3 rounded-lg border">
                                    {
                                        user &&
                                        user.offresPostulees.map((offre) => (
                                            <div key={offre._id} className="flex items-center mb-8 hover:bg-gray-50" onClick={() => {

                                            }}>
                                                <img
                                                    src={`${offre.logo}`.length > 15 || `${offre.logo}`.length == "" | null ? offre.logo :
                                                        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQow8AkuhZ9if3JUQJSEbT9hlhVldNECSBNiQ&usqp=CAU"
                                                    }
                                                    alt={offre.titre}
                                                    className="w-16 h-16 object-cover rounded-full mr-4"
                                                />
                                                <div>
                                                    <h2 className="text-lg font-bold">
                                                        <a href={`/${routing.detailOffre.path}`}
                                                            onClick={() => {
                                                                localStorage.setItem(`${localvalue.offreDetail.id}`, `${offre._id}`);
                                                            }}
                                                        >{offre.titre}</a>
                                                    </h2>
                                                    <p className="text-gray-600">{offre.entreprise}</p>
                                                    <p className="text-gray-600">{offre.date}</p>
                                                </div>
                                            </div>
                                        ))
                                    }
                                </div>
                            </TabPanel>
                            : null
                    }
                    <TabPanel>
                        <CandidaturesForCandidat />
                    </TabPanel>
                </Tabs>
            </div>



            {/* Modal Offre d'emplois  */}


            <Modal show={showModal} onHide={handleCloseModal}>
                <Modal.Header closeButton>
                    <Modal.Title>Details sur l{"'"}offre d{"'"}emplois</Modal.Title>
                </Modal.Header>
                <Modal.Body>

                    {
                        dataOffre ?
                            <div className="max-w-3xl mx-auto px-4">
                                <h1 className="text-3xl font-bold mb-4">{dataOffre.titre}</h1>
                                <p className="text-gray-600 mb-4">Lieu | Date postée {moment(dataOffre.dateDebut).format("DD/MM/YYYY")}</p>
                                <a href={`https://play.google.com/store/apps?hl=fr&gl=US`} target='_blank'  >
                                    <Button variant='outline-secondary' class="btn flex flex-row justify-center items-center space-x-3"><span>Télécharger l{"'"}application</span> <FaGooglePlay class=" text-green-600 hover:text-white" size={30} /></Button>
                                </a>
                                <div className="bg-white p-6 rounded shadow mb-4">
                                    <h2 className="text-xl font-bold mb-2">Détails du poste</h2>
                                    <p className="text-gray-700 mb-4">{dataOffre.description}</p>
                                    <ul className="list-disc list-inside">
                                        <li>Niveau d{"'"}expérience requis {dataOffre.years_experience}</li>
                                        <li>Type de contrat {dataOffre.typeContrat}</li>
                                        <li>Horaires de travail</li>
                                        <li>Salaire {dataOffre.salaire} </li>
                                    </ul>

                                    <Button variant="outline-primary" onClick={handleOpenModal}>
                                        Postuler
                                    </Button>
                                </div>
                                {
                                    dataOffre && dataOffre.candidatPostulees.length > 0 ?

                                        (
                                            <div className="bg-white p-6 rounded shadow mb-4">
                                                <h2 className="text-xl font-bold mb-2">Candidats disponibles</h2>

                                                <ul className="list-disc list-inside">
                                                    {

                                                        dataOffre.candidatPostulees.map((item) => {
                                                            return (
                                                                <li>Nom du candidat 1 {item.firtname} {item.lastname} {item.email} </li>
                                                            )
                                                        })

                                                    }

                                                </ul>
                                            </div>
                                        ) :
                                        null
                                }
                                <div className="bg-white p-6 rounded shadow mb-4">
                                    <h2 className="text-xl font-bold mb-2">Comment postuler</h2>
                                    <p className="text-gray-700 mb-4">Instructions pour postuler à l'offre d'emploi...</p>
                                </div>
                                {
                                    /*
                                    <div className="bg-white p-6 rounded shadow mb-4">
                                    <h2 className="text-xl font-bold mb-2">Informations supplémentaires</h2>
                                    <p className="text-gray-700 mb-4">Informations supplémentaires sur l'offre d'emploi...</p>
                                </div>
                                    */
                                }
                            </div>
                            :
                            <AvancedLoaderProfile />
                    }
                </Modal.Body>
                <Modal.Footer>
                    <Button variant="outline-secondary" onClick={handleCloseModal}>
                        Fermer
                    </Button>
                </Modal.Footer>
            </Modal>



        </div>


    )


}


export default HistoriquePage;