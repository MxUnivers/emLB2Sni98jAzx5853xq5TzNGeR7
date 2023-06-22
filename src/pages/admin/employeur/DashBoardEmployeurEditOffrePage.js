import React, { useState } from 'react'
import { typeContrat } from '../../../utlis/options/optionDivers'
import { useDispatch, useSelector } from 'react-redux';
import { useLocation } from 'react-router-dom';
import { EntrepriseEditAnnonce, EntrepriseEditOffre } from '../../../action/api/employeur/EmployeurAction';
import { secteursActivites, secteursUrgentces } from '../../../utlis/options/employeurOption';
import { ToastContainer, toast } from 'react-toastify';
import { localvalue } from '../../../utlis/storage/localvalue';

const DashBoardEmployeurEditOffrePage = () => {



    const location = useLocation();
    const params = location.state;


    const [titreO, settitreO] = useState(params.titre);
    const [telO, settelO] = useState(params.telephone);
    const [emailO, setemailO] = useState(params.email);
    const [entrepriseO, setentrepriseO] = useState(params.entreprise);
    const [secteurO, setsecteurO] = useState(params.secteur_activites);
    const [dateO, setdateO] = useState(params.dateDebut);
    const [typeContratO, settypeContratO] = useState(params.typeContrat);
    const [typeOffre, settypeOffre] = useState(params.typeOffre);
    const [salaireO, setsalaireO] = useState(params.salaire);
    const [paysO, setpaysO] = useState(params.pays);
    const [lieuO, setlieuO] = useState(params.lieu);
    const [descriptionO, setdescriptionO] = useState(params.description);



    var idAdmin = localStorage.getItem(localvalue.emloyeur.idEmployeur);

    // console.log(titreO,
    //     entrepriseO,
    //     descriptionO,
    //     typeOffre,
    //     typeContratO,
    //     telO, emailO,
    //     salaireO,
    //     lieuO,
    //     paysO,
    //     secteurO,
    //     dateO);


    const dispatch = useDispatch();
    const loading = useSelector((state) => state.loading);
    const error = useSelector((state) => state.error);




    const [formData, setFormData] = useState({ name: '', email: '' });

    const handleSubmitOffre = (event) => {
        event.preventDefault();

        dispatch(
            EntrepriseEditOffre(
                params._id,
                titreO,
                entrepriseO,
                descriptionO,
                typeOffre,
                typeContratO,
                telO, emailO,
                salaireO,
                lieuO,
                paysO,
                secteurO,
                dateO,
                toast)
        );


    };


    return (
        <div>

            <ToastContainer />
            <div class="breadcrumb-area">
                <h1>Modifier cette offre</h1>
                <ol class="breadcrumb">
                    <li class="item"><a href="#">Accueil</a></li>
                    <li class="item">annonce post</li>
                </ol>
            </div>


            <div class="post-a-new-job-box">
                <h3> { }</h3>

                <form onSubmit={handleSubmitOffre}>
                    <div class="row">
                        <div class="col-lg-6 col-md-6">
                            <div class="form-group">
                                <label>Titre (metier ou besoin )</label>
                                <input value={titreO} onChange={(e) => { settitreO(e.target.value) }} required type="text" class="form-control" placeholder="..." />
                            </div>
                        </div>

                        <div class="col-lg-3 col-md-3">
                            <div class="form-group">
                                <label>téléphone</label>
                                <input value={telO} onChange={(e) => { settelO(e.target.value) }} required type="number" class="form-control" placeholder="...." />
                            </div>
                        </div>
                        <div class="col-lg-3 col-md-3">
                            <div class="form-group">
                                <label>email</label>
                                <input required type="email" value={emailO} onChange={(e) => { setemailO(e.target.value) }} class="form-control" placeholder="..." />
                            </div>
                        </div>

                        <div class="col-lg-4 col-md-4">
                            <div class="form-group">
                                <label>Nom de l{"'"}entreprise</label>
                                <input required type="text" value={entrepriseO} onChange={(e) => { setentrepriseO(e.target.value) }} class="form-control" placeholder="...." />
                            </div>
                        </div>
                        <div class="col-lg-4 col-md-4">
                            <div class="form-group">
                                <label>Secteur d{"'"}activité</label>
                                <select required name="secteur_activites" onChange={(e) => { setsecteurO(e.currentTarget.value) }} class="form-control">
                                    {
                                        secteursActivites.map((item) => {
                                            return (
                                                <option vlaue={item.value} selected={item.value == params.secteur_activites ? true : false} >{item.label}</option>
                                            )
                                        })
                                    }
                                </select>
                            </div>
                        </div>
                        <div class="col-lg-4 col-md-4">
                            <div class="form-group">
                                <label>Urgence de l{"'"}offre</label>
                                <select required name="secteur_activites" onChange={(e) => { settypeOffre(e.currentTarget.value) }} class="form-control">
                                    {
                                        secteursUrgentces.map((item) => {
                                            return (
                                                <option value={item.value} selected={item.value == params.typeOffre ? true : false} >{item.label}</option>
                                            )
                                        })
                                    }
                                </select>
                            </div>
                        </div>
                        <div class="col-lg-4 col-md-4">
                            <div class="form-group">
                                <label>Date de début du job</label>
                                <input required type="date" value={dateO} onChange={(e) => { setdateO(e.target.value) }} name="dateDebut" class="form-control" placeholder="Job Title Here" />
                            </div>
                        </div>
                        <div class="col-lg-4 col-md-4">
                            <div class="form-group">
                                <label>Type de contrat</label>
                                <select required name="typeContrat" onChange={(e) => { settypeContratO(e.target.value) }} class="form-control">
                                    {
                                        typeContrat.map((item) => {
                                            return (
                                                <option vlaue={item.value} >{item.label}</option>
                                            )
                                        })
                                    }
                                </select>
                            </div>
                        </div>
                        <div class="col-lg-4 col-md-4">
                            <div class="form-group">
                                <label>Salaire</label>
                                <input required type='number' value={salaireO} onChange={(e) => { setsalaireO(e.target.value) }} class="form-control" />
                            </div>
                        </div>
                        <div class="col-lg-4 col-md-4">
                            <div class="form-group">
                                <label>lieu </label>
                                <input required type='text' value={lieuO} onChange={(e) => { setlieuO(e.target.value) }} class="form-control" />
                            </div>
                        </div>
                        <div class="col-lg-12 col-md-12">
                            <div class="form-group">
                                <label>Pays </label>
                                <input required type='text' value={paysO} onChange={(e) => { setpaysO(e.target.value) }} class="form-control" />
                            </div>
                        </div>

                        <div class="col-lg-12 col-md-12">
                            <div class="form-group">
                                <label>Description de l{"'"}annonce</label>
                                <textarea required cols="30" value={descriptionO} onChange={(e) => { setdescriptionO(e.target.value) }} rows="6" placeholder="...." class="form-control"></textarea>
                            </div>
                        </div>

                        {error && <p class="text-danger">impossible de poster l{"'"}offre ! </p>}

                        {
                            loading ?
                                <p>envois en cours ....</p> :
                                <div class="col-lg-12 col-md-12">
                                    <button type="submit" class="default-btn bg-blue-600 ">Modifier cette offre <i class="flaticon-send"></i></button>
                                </div>
                        }
                    </div>
                </form>
            </div>



        </div>
    )
}

export default DashBoardEmployeurEditOffrePage;