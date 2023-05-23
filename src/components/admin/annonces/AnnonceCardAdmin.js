import React from 'react'
import { routing } from '../../../utlis/routing'
import { localvalue } from '../../../utlis/storage/localvalue'
import { LocaleState } from '../../../utlis/storage/localvalueFunction'
import { useState } from 'react'
import { Button, Modal, ToastContainer } from 'react-bootstrap'
import { typeContrat } from '../../../utlis/options/optionDivers'
import { secteursActivites } from '../../../utlis/options/employeurOption'
import moment from 'moment'
import { EntrepriseEditAnnonce, EntreprisePostAnnonce } from '../../../action/api/employeur/EmployeurAction'
import { toast } from 'react-toastify'
import { useDispatch, useSelector } from 'react-redux'
import { AnnonceEditById } from '../../../action/api/annonces/AnnoncesAction'

export const AnnonceCardAdmin = ({ item }) => {
    const [showModal, setShowModal] = useState(false);
    const handleClose = () => { setShowModal(false); };
    const handleShow = () => { setShowModal(true); };



    return (
        <div class="col-lg-6 col-md-12 w-full">
            <div class="dashboard-job-card">
                <div class="job-content">
                    <div class="company-logo">
                        <a href={`/${routing.dashbordDetailAnnonce.path}`}
                            onClick={LocaleState(localvalue.annonceAdmin.id, item._id)}><img src="assets/images/job/job-1.png" alt="image" /></a>
                    </div>
                    <h3>
                        <a
                            href={`/${routing.dashbordDetailAnnonce.path}`}
                            onClick={LocaleState(localvalue.annonceAdmin.id, item._id)}
                        >{item.titre}</a>
                    </h3>
                    <div class="bookmark-btn">
                        <i class="ri-bookmark-line">{moment(item.dateDebut).format('DD/MM/YYYY')}</i>
                    </div>
                    <div class="hover-bookmark-btn">
                        <i class="ri-bookmark-fill"></i>
                    </div>
                    <ul class="location-information">
                        <li><i class="ri-briefcase-line"></i> annonce</li>
                        <li><i class="ri-map-pin-line"></i> {item.lieu}</li>
                        <li><i class="ri-money-dollar-circle-line"></i>  ${item.salaire}</li>
                    </ul>
                    <ul class="job-tag-list">
                        <li>Full Time</li>
                        <li class="urgent">Urgent</li>
                        <li class="private">Private</li>
                    </ul>
                    <ul class="option-list">
                        <li><Button onClick={handleShow} variant="outline-primary" class="option-btn d-inline-block" data-bs-toggle="tooltip" data-bs-placement="top" title="View Aplication" type="button"><i class="ri-edit-line"></i></Button></li>
                        <li><Button variant="outline-danger" class="option-btn d-inline-block" data-bs-toggle="tooltip" data-bs-placement="top" title="Approve Aplication" type="button"><i class="ri-delete-bin-line"></i></Button></li>
                    </ul>
                </div>
            </div>


            {/*Modal de mofication  */}
            <Modal show={showModal} onHide={handleClose}>
                <Modal.Header closeButton>
                    <Modal.Title>Modification de l{"'"} annonce</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    {/** Contentue du modal */}
                    <FormAnnonceEdit data={item} />
                </Modal.Body>
                <Modal.Footer>
                    <Button variant="outline-secondary" onClick={handleClose}>
                        Fermer
                    </Button>

                </Modal.Footer>
            </Modal>
            {/* Toaster */}
            <ToastContainer />


        </div>
    )
}






const FormAnnonceEdit = ({ data }) => {
    var idAdmin = localStorage.getItem(localvalue.emloyeur.idEmployeur);

    const [formData, setFormData] = useState(
        {
            titre: '',
            email: '',
            entreprise: '',
            telephone: "",
            description: "",
        });
    const dispatch = useDispatch();
    const loading = useSelector((state) => state.loading);
    const error = useSelector((state) => state.error);
    const handleChangeForm = (event) => {
        const { name, value } = event.target;
        setFormData({ ...formData, [name]: value });
    }

    const handleSubmit = (event) => {
        if (formData.titre = "" | null) {
            alert("Titre requis")
        }
        if (formData.entreprise = "" | null) {
            alert("email requis")
        }
        if (formData.secteur_activites = "" | null) {
            alert("Titre requis")
        }
        if (formData.description = "" | null) {
            alert("email requis")
        }
        if (formData.telephone = "" | null) {
            alert("Titre requis")
        }

        event.preventDefault();
        dispatch(AnnonceEditById(data._id, formData, toast));
    };

    return (
        <div>
            <form onSubmit={handleSubmit} className="w-full mx-auto">
                <div className="mb-4">
                    <label className="block text-gray-700 font-bold mb-2">
                        Titre de l{"'"}annonce
                    </label>
                    <input
                        onChange={handleChangeForm}
                        type="text"
                        name="titre"
                        defaultValue={data.titre}
                        className="appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                        placeholder="Saisir le titre de l'annonce"
                    />
                </div>
                <div className="mb-4">
                    <label className="block text-gray-700 font-bold mb-2">
                        Nom de l{"'"}entreprise
                    </label>
                    <input
                        onChange={handleChangeForm}
                        type="text"
                        name="entreprise"
                        defaultValue={data.entreprise}
                        className="appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                        placeholder="Saisir le nom de l'entreprise"
                    />
                </div>
                {
                    /*
                    <div className="mb-4">
                    <label htmlFor="date" className="block text-gray-700 font-bold mb-2">
                        Date
                    </label>
                    <input
                        type="date"
                        defaultValue={moment(data.dateDebut).format('DD/MM/YYYY')}
                        name="dateDebut"
                        className="appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                    />
                </div>
                    */
                }
                <div className="mb-4">
                    <label className="block text-gray-700 font-bold mb-2">
                        Description de l{"'"}annonce
                    </label>
                    <textarea
                        onChange={handleChangeForm}
                        name="description"
                        defaultValue={data.description}
                        className="appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                        placeholder="Saisir la description de l'annonce"
                    ></textarea>
                </div>
                <div className="mb-4">
                    <label  className="block text-gray-700 font-bold mb-2">
                        Secteur d{"'"}activités
                    </label>
                    <select
                        onChange={handleChangeForm}
                        name="secteur_activites"
                        className="form-control appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                    >
                        {
                            secteursActivites.map((item) => {
                                return (
                                    <option value={item.value} selected={item.value === data.secteur_activites ? true : false} > {item.value} </option>
                                )
                            })
                        }
                    </select>
                </div>
                <div className="mb-4">
                    <label  className="block text-gray-700 font-bold mb-2">
                        Téléphone
                    </label>
                    <input
                        onChange={handleChangeForm}
                        type="tel"
                        name="telephone"
                        defaultValue={data.telephone}
                        className="appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                        placeholder="Saisir le numéro de téléphone"
                    />
                </div>
                <div className="mb-4">
                    <label className="block text-gray-700 font-bold mb-2">
                        Email
                    </label>
                    <input
                        onChange={handleChangeForm}
                        type="email"
                        name="email"
                        defaultValue={data.email}
                        className="appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                        placeholder="Saisir l'adresse email"

                    />
                </div>

                <div className="mb-4">
                    <label className="block text-gray-700 font-bold mb-2">
                        Type de contrat
                    </label>
                    <select
                        onChange={handleChangeForm}
                        name="typeContrat"
                        className="form-control appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                    >
                        {
                            typeContrat.map((item) => {
                                return (
                                    <option value={item.value} selected={item.value == data.typeContrat ? true : false} > {item.value} </option>
                                )
                            })
                        }
                    </select>
                </div>
                <div className="mb-4">
                    <label className="block text-gray-700 font-bold mb-2">
                        Salaire
                    </label>
                    <input
                        onChange={handleChangeForm}
                        type="number"
                        name="salaire"
                        defaultValue={data.salaire}
                        className="appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                        placeholder="Saisir le salaire"

                    />
                </div>
                <div className="mb-4">
                    <label className="block text-gray-700 font-bold mb-2">
                        Lieu
                    </label>
                    <input
                        onChange={handleChangeForm}
                        type="text"
                        name="lieu"
                        defaultValue={data.lieu}
                        className="appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                        placeholder="Saisir le lieu"
                    />
                </div>
                {
                    loading ?
                        <p>Modification en cours ....</p>
                        :
                        <button
                            type="submit"
                            className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
                        >
                            Modifier
                        </button>
                }
            </form>
            <ToastContainer />
        </div>
    )
}
