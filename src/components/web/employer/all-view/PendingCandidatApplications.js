import React from 'react'
import { useEffect } from 'react';
import { useState } from 'react';
import { Button, Modal } from 'react-bootstrap';
import { CandidatureAuthorized, CandidaturesEntreprises } from '../../../../action/api/candidatures/CandidatureAction';
import { localvalue } from '../../../../utlis/storage/localvalue';
import { AnnonceGetById } from '../../../../action/api/annonces/AnnoncesAction';
import JobOfferLoader from '../../../chargement/job/JobOffreLoader';
import { CandidatGetById } from '../../../../action/api/candidat/CandidatAction';
import { IoIosArrowRoundBack } from 'react-icons/io';
import { HiCalendar, HiLocationMarker, HiOutlineMail, HiPhone } from 'react-icons/hi';
import { AiOutlineSend } from 'react-icons/ai';
import { ToastContainer, toast } from 'react-toastify';
import { useDispatch, useSelector } from 'react-redux';

const PendingCandidatApplications = () => {
  var idAdmin = localStorage.getItem(localvalue.emloyeur.idEmployeur);

  // const applications = [
  //   { id: 1, name: "John Doe", position: "Développeur frontend", experience: "3 ans" },
  //   { id: 2, name: "Jane Smith", position: "Développeur backend", experience: "5 ans" },
  //   { id: 3, name: "Michael Johnson", position: "Designer UI/UX", experience: "2 ans" },
  //   // Ajoutez ici les autres candidatures acceptées
  // ];

  const [applications, setapplications] = useState([]);
  const [applications2, setapplications2] = useState([]);
  const [annonce, setannonce] = useState();
  const [candidat, setcandidat] = useState();
  const [idCandidature, setidCandidature] = useState();
  const [message, setMessage] = useState();

  useEffect(() => {
    CandidaturesEntreprises(idAdmin, setapplications, setapplications2);
  }, [])



  const [showModal, setShowModal] = useState(false);
  const [modalProfile, setmodalProfile] = useState(false);



  // modal pour le candidat
  const handleShowProfileCandidat = () => {
    setmodalProfile(true);
  }
  const handleCloseProfileCandidat = () => {
    setmodalProfile(false);
  }




  const handleClose = () => {
    setShowModal(false);
  };
  const handleShow = (id, idCandidat) => {
    setShowModal(true);
    AnnonceGetById(id, setannonce);
    CandidatGetById(idCandidat, setcandidat);
  };
  const dispatch = useDispatch();
  const loading = useSelector((state) => state.loading);
  const error = useSelector((state) => state.error);


  const handleSumit = (event) => {
    event.preventDefault();
    // type en fonction des offres de employeurs

    dispatch(CandidatureAuthorized(idCandidature, toast));
  };




  return (
    <div className="container mx-auto py-8">
      <ToastContainer />



      <div className="bg-gray-300 py-4  my-2 rounded-lg">
        <h1 className="text-2xl font-bold text-white text-center">Candidatures en attente</h1>
      </div>
      <div className="w-full">

        {
          applications && applications.length > 0 ?
            (
              <table className="min-w-full bg-white border border-gray-300">
                <thead>
                  <tr>
                    <th className="py-2 px-4 border-b">ID</th>
                    <th className="py-2 px-4 border-b">Nom</th>
                    <th className="py-2 px-4 border-b">Poste</th>
                    <th className="py-2 px-4 border-b">Expérience</th>
                  </tr>
                </thead>
                <tbody>
                  {
                    applications.map((application) => (
                      <tr key={application._id}>
                        <td className="py-2 px-4 border-b">{application._id}</td>
                        <td className="py-2 px-4 border-b">{application.titre}</td>
                        <td className="py-2 px-4 border-b">{application.status}</td>
                        <td className="py-2 px-4 border-b">{application.date}</td>
                        <td className="py-2 px-4 border-b">
                          <Button variant="outline-primary"
                            onClick={() => {
                              setidCandidature(application._id);
                              handleShow(application.idAnnonce, application.idCandidat)
                            }}>
                            Consulter
                          </Button>
                        </td>
                      </tr>
                    ))}
                </tbody>
              </table>
            )
            :
            <div class="w-full bg-gray-200 flex justify-center items-center py-5 px-3">.....</div>
        }
      </div>



      <Modal size="lg" show={showModal} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Candidature </Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <div className="p-4 bg-white shadow-md">
            {/**candidat */}
            {
              candidat ?
                (
                  <div class="bg-gray-100 py-2 px-5 rounded-lg">
                    <h3 className="text-lg font-bold mt-8 mb-4">Candidat</h3>
                    <div> <img src={candidat.coverPicture} class="h-20 w-20 rounded-full" /></div>
                    <p className="text-gray-600 mb-2">
                      Nom du candidat : {candidat.firstname} {candidat.lastname}
                    </p>
                    <p className="text-gray-600 mb-2">
                      Email du candidat : {candidat.email}
                    </p>
                    <p className="text-gray-600 mb-2">
                      Téléphone du candidat : {candidat.telephone}
                    </p>
                    <div>
                      <button class="bg-blue-600 text-white px-2 py-2 rounded-lg hover:bg-blue-700 active:bg-blue-800" onClick={() => {
                        handleClose();
                        handleShowProfileCandidat()
                      }}>voire plus </button>
                    </div>
                    <form className="mb-4">
                      <label htmlFor="message" className="block text-sm font-medium text-gray-700">
                        Message
                      </label>
                      <textarea
                        id="message"
                        value={message}
                        onChange={(e) => setMessage(e.target.value)}
                        className="mt-1 px-4 py-2 block w-full border border-gray-300 rounded-md focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
                        rows="4"
                        placeholder="Votre message"
                        required
                      ></textarea>
                      <button type="submit" class="w-full bg-blue-400  bg-blue-600 flex space-x-3 justify-center items-center rounded-2xl py-2 px-2  text-white"><span>envoyer</span> <AiOutlineSend size={25} /> </button>
                    </form>

                  </div>
                ) :
                <div>Candidat en vours ... </div>
            }
            {
              annonce ?
                (
                  <div>
                    <h2 className="text-xl font-bold mb-4">{annonce.titre}</h2>
                    <p className="text-gray-600 mb-2">
                      Description de l{"'"}annonce : {annonce.description}
                    </p>
                    <p className="text-gray-600 mb-2">Secteur d{"'"}activités : {annonce.secteur_activites}</p>
                    <p className="text-gray-600 mb-2">Lieu : {annonce.lieu}</p>
                  </div>
                ) :
                <JobOfferLoader />
            }



            {/* Afficher d'autres détails du candidat si nécessaire */}
          </div>

        </Modal.Body>
        <Modal.Footer>
          <form class="space-x-5" onSubmit={handleSumit}>
            <Button variant="outline-secondary" onClick={handleClose}>
              Fermer
            </Button>
            {
              loading ?
                <p >candidature en cours ... </p> :
                <Button type='submit' variant="outline-success" >
                  Valider cette candidature
                </Button>
            }
          </form>
        </Modal.Footer>
      </Modal>















      {/* modal de Informations candidat */}

      <Modal show={modalProfile} onHide={handleCloseProfileCandidat} centered>
        <Modal.Header closeButton>
          <Modal.Title>Profil du candidat</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <div>
            <button class="bg-blue-600 text-white hover:bg-blue-700 rounded-lg p-1 px-1"
              onClick={() => {
                handleCloseProfileCandidat();
                setShowModal(true);
              }}
            ><IoIosArrowRoundBack /> retour</button>
          </div>
          {
            candidat ?
              <div className="flex flex-col space-y-2 items-center mb-4">
                <img src={candidat.coverPicture} alt="Photo de profil" className="w-12 h-12 rounded-full mr-3" />
                <div>
                  <h2 className="text-xl font-bold">
                    {candidat.firstname} {candidat.lastname}
                  </h2>
                  <div className="flex items-center">
                    <HiOutlineMail className="mr-2" />
                    <p className="text-gray-600">{candidat.email}</p>
                  </div>
                  <div className="flex items-center">
                    <HiPhone className="mr-2" />
                    <p className="text-gray-600">{candidat.telephone}</p>
                  </div>
                  <div className="flex items-center">

                    <HiCalendar className="mr-2" />
                    <p className="text-gray-600">naissance  : {candidat.dateNaissance}</p>
                  </div>
                  {
                    candidat.langues == "" ?
                      <div class="bg-gray-200 rounded-lg p-3 px-1 py-1">
                      </div> :
                      <div className="flex items-center">
                        <HiOutlineMail className="mr-2" />
                        <p className="text-gray-600">{candidat.langues}</p>
                      </div>

                  }
                </div>
                <h3 className="text-lg font-bold mb-2">Informations supplémentaires :</h3>

                <div class="flex-wrap justify-start space-x-3 space-y-3">
                  <div className="flex items-center">
                    <p>pays</p>
                    <HiOutlineMail className="mr-2" />
                    <p className="text-gray-600">{candidat.pays}</p>
                  </div>
                  <div className="flex items-center">
                    <p>ville</p>
                    <HiOutlineMail
                      className="mr-2" />
                    <p className="text-gray-600">{candidat.ville}</p>
                  </div>
                  <div className="flex items-center">

                    <HiLocationMarker className="mr-2" />
                    <p className="text-gray-600">{candidat.address}</p>
                  </div>

                </div>

                <div className="mb-4">
                  <label htmlFor="message" className="block text-sm font-medium text-gray-700">
                    Message
                  </label>
                  <textarea
                    id="message"
                    value={message}
                    onChange={(e) => setMessage(e.target.value)}
                    className="mt-1 px-4 py-2 block w-full border border-gray-300 rounded-md focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
                    rows="4"
                    placeholder="Votre message"
                    required
                  ></textarea>
                  <button class="w-full bg-blue-400  bg-blue-600 flex space-x-3 justify-center items-center rounded-2xl py-2 px-2  text-white"><span>envoyer</span> <AiOutlineSend size={25} /> </button>
                </div>
              </div>
              :
              <JobOfferLoader />
          }



          {/* Autres détails du profil du candidat */}
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleCloseProfileCandidat}>
            Fermer
          </Button>
        </Modal.Footer>
      </Modal>











    </div>
  )
}

export default PendingCandidatApplications;