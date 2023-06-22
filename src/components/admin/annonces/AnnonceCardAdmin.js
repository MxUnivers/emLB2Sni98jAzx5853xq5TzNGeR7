import React from 'react'
import { routing } from '../../../utlis/routing'
import { localvalue } from '../../../utlis/storage/localvalue'
import { LocaleState } from '../../../utlis/storage/localvalueFunction'
import { useState } from 'react'
import { Button, Modal, ToastContainer } from 'react-bootstrap'
import { typeContrat } from '../../../utlis/options/optionDivers'
import { secteursActivites } from '../../../utlis/options/employeurOption'
import moment from 'moment';
import { toast } from 'react-toastify'
import { useDispatch, useSelector } from 'react-redux'
import { AnnonceEditById } from '../../../action/api/annonces/AnnoncesAction'
import { useNavigate } from 'react-router-dom'

export const AnnonceCardAdmin = ({ item }) => {
    const navigation = useNavigate();
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
                        <li>
                            <Button
                                onClick={() => {
                                    navigation(`/${routing.employeurEditAnnonce.path}`, { state: item })
                                }}
                                variant="outline-primary"
                                class="option-btn d-inline-block"
                                data-bs-toggle="tooltip"
                                data-bs-placement="top"
                                title="View Aplication"
                                type="button">
                                <i class="ri-edit-line"></i>
                            </Button>
                        </li>
                        <li><Button variant="outline-danger" class="option-btn d-inline-block" data-bs-toggle="tooltip" data-bs-placement="top" title="Approve Aplication" type="button"><i class="ri-delete-bin-line"></i></Button></li>
                    </ul>
                </div>
            </div>




        </div>
    )
}






const FormAnnonceEdit = ({ data }) => {

    // les state de l'application .

    const [titre, settitre] = useState(data.titre);
    const [telephone, settelephone] = useState(data.telephone);
    const [email, setemail] = useState(data.email);
    const [entreprise, setentreprise] = useState(data.entreprise);
    const [typeContrt, settypeContrt] = useState(data.typeContrat);
    const [dateDebut, setdateDebut] = useState(data.dateDebut);
    const [secteurs_activites, setsecteurs_activites] = useState(data.secteur_activites);
    const [salaire, setsalaire] = useState(data.salaire);
    const [lieu, setlieu] = useState(data.lieu);
    const [description, setdescription] = useState(data.description);



    const [formData, setFormData] = useState({});


    const dispatch = useDispatch();
    const loading = useSelector((state) => state.loading);
    const error = useSelector((state) => state.error);
    const handleChangeForm = (event) => {
        const { name, value } = event.target;
        setFormData({ ...formData, [name]: value });
    }

    const handleSubmitEdit = (event) => {
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
        dispatch(AnnonceEditById(data._id,
            titre, telephone, email, entreprise, secteursActivites, typeContrat, dateDebut, salaire, lieu, description
            , toast));
    };

    return (
        <div>
            <div class="post-a-new-job-box">
                <h3></h3>
                <form onSubmit={handleSubmitEdit}>
                    <div class="row">

                        <div class="col-lg-6 col-md-6">
                            <div class="form-group">
                                <label>Titre (metier ou besoin )</label>
                                <input required value={titre} type="text" onChange={(e) => { settitre(e.target.value) }} name="titre" class="form-control" placeholder="Job Title Here" />
                            </div>
                        </div>
                        <div class="col-lg-3 col-md-3">
                            <div class="form-group">
                                <label>téléphone</label>
                                <input required value={telephone} type="number" onChange={(e) => { settelephone(e.target.value) }} name="telephone" class="form-control" placeholder="Job Title Here" />
                            </div>
                        </div>
                        <div class="col-lg-3 col-md-3">
                            <div class="form-group">
                                <label>email</label>
                                <input value={email} type="email" onChange={(e) => { setemail(e.target.value) }} name="email" class="form-control" placeholder="Job Title Here" />
                            </div>
                        </div>

                        <div class="col-lg-6 col-md-6">
                            <div class="form-group">
                                <label>Nom de l{"'"}entreprise</label>
                                <input required value={entreprise} type="text" onChange={(e) => { setentreprise(e.target.value) }} name="entreprise" class="form-control" placeholder="Job Title Here" />
                            </div>
                        </div>

                        <div class="col-lg-4 col-md-4">
                            <div class="form-group">
                                <label>Secteurs d{"'"}activités</label>
                                <select name="typeContrat" onChange={(e) => { setsecteurs_activites(e.target.value) }} class="form-control">
                                    {
                                        secteursActivites.map((item) => {
                                            return (
                                                <option vlaue={item.value} selected={data.secteur_activites == item.value ? true : false} >{item.label}</option>
                                            )
                                        })
                                    }
                                </select>
                            </div>
                        </div>

                        <div class="col-lg-6 col-md-6">
                            <div class="form-group">
                                <label>Date de début du job </label>
                                <input required value={dateDebut} type="date" onChange={(e) => { setdateDebut(e.target.value) }} name="dateDebut" class="form-control" placeholder="Job Title Here" />
                            </div>
                        </div>

                        <div class="col-lg-4 col-md-4">
                            <div class="form-group">
                                <label>Type de contrat</label>
                                <select name="typeContrat" onChange={(e) => { settypeContrt(e.target.value) }} class="form-control">
                                    {
                                        typeContrat.map((item) => {
                                            return (
                                                <option vlaue={item.value} selected={data.typeContrat == item.value ? true : false} >{item.label}</option>
                                            )
                                        })
                                    }
                                </select>
                            </div>
                        </div>

                        <div class="col-lg-4 col-md-4">
                            <div class="form-group">
                                <label>Salaire</label>
                                <input type='number' value={salaire} onChange={(e) => { setsalaire(e.target.value) }} name="salaire" class="form-control" />
                            </div>
                        </div>

                        <div class="col-lg-4 col-md-4">
                            <div class="form-group">
                                <label>lieu </label>
                                <input required value={lieu} type='text' onChange={(e) => { setlieu(e.target.value) }} name="lieu" class="form-control" />
                            </div>
                        </div>

                        <div class="col-lg-12 col-md-12">
                            <div class="form-group">
                                <label>Description de l{"'"}annonce</label>
                                <textarea required value={description} cols="30" onChange={(e) => { setdescription(e.target.value) }} name="description" rows="6" placeholder="Short description..." class="form-control"></textarea>
                            </div>
                        </div>

                        {error && <p class="text-danger">Impossible de modifier : {error}</p>}

                        {
                            loading ?
                                <p>envois en cours ....</p> :
                                <div class="col-lg-12 col-md-12">
                                    <button type="submit" class="default-btn bg-blue-600 ">Poster annonce <i class="flaticon-send"></i></button>
                                </div>
                        }
                    </div>
                </form>
            </div>
        </div>
    )
}
