import React, { useEffect, useState } from 'react';
import 'react-tabs/style/react-tabs.css';
import { FaCheckCircle, FaExclamationCircle } from "react-icons/fa";
import { Button, Modal } from 'react-bootstrap';
import { localvalue } from '../../../utlis/storage/localvalue';
import { CandidatureById, CandidatureOfCandidat } from '../../../action/api/candidatures/CandidatureAction';
import { TbEye } from "react-icons/tb";
import JobOfferLoader from '../../chargement/job/JobOffreLoader';
import { HiOutlineMail } from 'react-icons/hi';
import { GrTextWrap } from "react-icons/gr";







const CandidaturesForCandidat = () => {
    var idAdmin = localStorage.getItem(localvalue.candidat.idCandidat);
    const [candidatures, setcandidatures] = useState([]);
    const [candidatures2, setcandidatures2] = useState([]);

    const [candidature, setcandidature] = useState();

    useEffect(() => {
        CandidatureOfCandidat(idAdmin, setcandidatures, setcandidatures2)
    }, []);



    const [showModal, setShowModal] = useState(false);

    const handleCloseModal = () => {
        setShowModal(false);
    };

    const handleShowModal = () => {
        setShowModal(true);
    };


    return (
        <div>
            {
                /*
                <Tabs>
                <TabList>
                    <Tab>
                        <button class="bg-teal-500 hover:bg-teal-700 flex space-x-1 text-white font-bold py-1 px-3 rounded m-1">
                            Annonces
                        </button>
                    </Tab>
                    <Tab>
                        <button class="bg-teal-500 hover:bg-teal-700 flex space-x-1 text-white font-bold py-1 px-3 rounded m-1">
                            offres
                        </button>
                    </Tab>
                </TabList>
                <TabPanel>
                */
            }
            <table className="min-w-full divide-y divide-gray-200">
                <thead className="bg-gray-100">
                    <tr>
                        <th className="py-3 px-4 text-left">Titre</th>
                        <th className="py-3 px-4 text-left">Statut</th>
                        <th className="py-3 px-4 text-left"></th>
                    </tr>
                </thead>
                <tbody className="bg-white divide-y divide-gray-200">
                    {
                        candidatures.map((item) => {
                            return (
                                <tr class="hover:bg-teal-100">
                                    <td className="py-2 px-4">
                                        <span className="flex items-center">
                                            {
                                                item.status == "Acceptée" ?
                                                    <FaCheckCircle className="text-green-500 mr-2" />
                                                    : null
                                            }
                                            {
                                                item.status == "En attente" ?
                                                    <FaExclamationCircle className="text-yellow-500 mr-2" />
                                                    : null
                                            }
                                            {
                                                item.status == "Refusée" ?
                                                    <FaCheckCircle className="text-red-500 mr-2" />
                                                    : null
                                            }
                                            {item.titre}
                                        </span>
                                    </td>
                                    <td className="py-2 px-4">
                                        {
                                            item.status == "En attente" ?
                                                <span className="flex items-center">
                                                    <span className="inline-block h-3 w-3 rounded-full bg-yellow-500 mr-2"></span>
                                                    {item.status}
                                                </span> : null
                                        }
                                        {
                                            item.status == "Acceptée" ?
                                                <span className="flex items-center">
                                                    <span className="inline-block h-3 w-3 rounded-full bg-green-500 mr-2"></span>
                                                    {item.status}
                                                </span> : null
                                        }
                                        {
                                            item.status == "Refusée" ?
                                                <span className="flex items-center">
                                                    <span className="inline-block h-3 w-3 rounded-full bg-red-500 mr-2"></span>
                                                    {item.status}
                                                </span> : null
                                        }
                                    </td>
                                    <td className="py-2 px-4">
                                        <Button variant='outline-dark' className="flex space-x-3 items-center justify-center "
                                            onClick={() => {
                                                handleShowModal();
                                                CandidatureById(item._id, setcandidature);
                                            }} >
                                            <span className="inline-block h-3 w-3 rounded-full mr-2"><TbEye size={20} /></span>
                                            <span>details</span>
                                        </Button>
                                    </td>
                                </tr>
                            )
                        })
                    }

                    {/* Ajoutez d'autres lignes ici */}
                </tbody>
            </table>
            {
                /*
                </TabPanel>
        <TabPanel>2</TabPanel>
    </Tabs>
                */
            }



            <Modal show={showModal} onHide={handleCloseModal} centered={true}>
                <Modal.Header closeButton>
                    <Modal.Title>Details de la candidature</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    {
                        candidature ?
                            <div className="w-full flex flex-col justify-center items-center mb-4">
                                <div class="w-full flex p-2 bg-teal-400  "><GrTextWrap size={30} /> <span class="p-2">{candidature.titre}</span></div>
                                <div class="w-full flex-grow">
                                    {
                                        /*
                                        <h2 className="text-2xl font-bold">
                                        {candidature.titre}
                                    </h2>
                                        */
                                    }
                                    <div class="p-1 ">
                                        {
                                            candidature.status == "En attente" ?
                                                <span className="flex items-center">
                                                    <span className="inline-block h-3 w-3 rounded-full bg-yellow-500 mr-2"></span>
                                                    {candidature.status}
                                                </span> : null
                                        }
                                        {
                                            candidature.status == "Acceptée" ?
                                                <span className="flex items-center">
                                                    <span className="inline-block h-3 w-3 rounded-full bg-green-500 mr-2"></span>
                                                    {candidature.status}
                                                </span> : null
                                        }
                                        {
                                            candidature.status == "Refusée" ?
                                                <span className="flex items-center">
                                                    <span className="inline-block h-3 w-3 rounded-full bg-red-500 mr-2"></span>
                                                    {candidature.status}
                                                </span> : null
                                        }
                                    </div>
                                </div>
                            </div> :
                            <JobOfferLoader />
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

export default CandidaturesForCandidat;