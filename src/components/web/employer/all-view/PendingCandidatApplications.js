import React from 'react'
import { useEffect } from 'react';
import { useState } from 'react';
import { Button, Modal } from 'react-bootstrap';
import { CandidaturesEntreprises } from '../../../../action/api/candidatures/CandidatureAction';
import { localvalue } from '../../../../utlis/storage/localvalue';
import { AnnonceGetById } from '../../../../action/api/annonces/AnnoncesAction';
import JobOfferLoader from '../../../chargement/job/JobOffreLoader';
import { CandidatGetById } from '../../../../action/api/candidat/CandidatAction';

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
  useEffect(() => {
    CandidaturesEntreprises(idAdmin, setapplications, setapplications2);
  }, [])



  const [showModal, setShowModal] = useState(false);

  const handleClose = () => {
    setShowModal(false);
  };

  const handleShow = (id, idCandidat) => {
    setShowModal(true);
    AnnonceGetById(id, setannonce);
    CandidatGetById(idCandidat, setcandidat);
  };
  return (
    <div className="container mx-auto py-8">
      <div className="bg-gray-500 py-4  my-2 rounded-lg">
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
                      <tr key={application.id}>
                        <td className="py-2 px-4 border-b">{application._id}</td>
                        <td className="py-2 px-4 border-b">{application.titre}</td>
                        <td className="py-2 px-4 border-b">{application.status}</td>
                        <td className="py-2 px-4 border-b">{application.date}</td>
                        <td className="py-2 px-4 border-b">
                          <Button variant="outline-primary" onClick={() => handleShow(application.idAnnonce, application.idCandidat)}>
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
                    <p className="text-gray-600 mb-2">
                      Nom du candidat : {candidat.firstname} {candidat.lastname}
                    </p>
                    <p className="text-gray-600 mb-2">
                      Email du candidat : {candidat.email}
                    </p>
                    <p className="text-gray-600 mb-2">
                      Téléphone du candidat : {candidat.telephone}
                    </p>
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
          <form class="space-x-5">
          <Button variant="outline-secondary" onClick={handleClose}>
            Fermer
          </Button>
          <Button type='submit' variant="outline-success" onClick={handleClose}>
            Valider cette candidature
          </Button>
          </form>
        </Modal.Footer>
      </Modal>

    </div>
  )
}

export default PendingCandidatApplications;