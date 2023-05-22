import React from 'react'
import { useState } from 'react';
import { Button, Modal } from 'react-bootstrap';

const PendingCandidatApplications = () => {

  const applications = [
    { id: 1, name: "John Doe", position: "Développeur frontend", experience: "3 ans" },
    { id: 2, name: "Jane Smith", position: "Développeur backend", experience: "5 ans" },
    { id: 3, name: "Michael Johnson", position: "Designer UI/UX", experience: "2 ans" },
    // Ajoutez ici les autres candidatures acceptées
  ];


  const [showModal, setShowModal] = useState(false);

  const handleClose = () => {
    setShowModal(false);
  };

  const handleShow = () => {
    setShowModal(true);
  };
  return (
    <div className="container mx-auto py-8">
      <div className="bg-gray-500 py-4  my-2 rounded-lg">
        <h1 className="text-2xl font-bold text-white text-center">Candidatures en attente</h1>
      </div>
      <div className="w-full">
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
            {applications.map((application) => (
              <tr key={application.id}>
                <td className="py-2 px-4 border-b">{application.id}</td>
                <td className="py-2 px-4 border-b">{application.name}</td>
                <td className="py-2 px-4 border-b">{application.position}</td>
                <td className="py-2 px-4 border-b">{application.experience}</td>
                <td className="py-2 px-4 border-b">
                <Button variant="outline-primary" onClick={handleShow}>
            Consulter
          </Button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>



      <Modal size="lg" show={showModal} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Mon Modal</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <p>Contenu du modal...</p>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Fermer
          </Button>
          <Button variant="primary" onClick={handleClose}>
            Enregistrer
          </Button>
        </Modal.Footer>
      </Modal>

    </div>
  )
}

export default PendingCandidatApplications;