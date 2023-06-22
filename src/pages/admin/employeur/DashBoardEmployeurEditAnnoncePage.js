import React, { useState } from 'react'
import { typeContrat } from '../../../utlis/options/optionDivers'
import { useDispatch, useSelector } from 'react-redux';
import { useLocation } from 'react-router-dom';
import { EntrepriseEditAnnonce } from '../../../action/api/employeur/EmployeurAction';
import { secteursActivites } from '../../../utlis/options/employeurOption';
import { ToastContainer, toast } from 'react-toastify';
import { localvalue } from '../../../utlis/storage/localvalue';

const DashBoardEmployeurEditAnnoncePage = () => {



    const location = useLocation();
    const params = location.state;


    const [titreA, settitreA] = useState(params.titre);
    const [telA, settelA] = useState(params.telephone);
    const [emailA, setemailA] = useState(params.email);
    const [entrepriseA, setentrepriseA] = useState(params.entreprise);
    const [secteurA, setsecteurA] = useState(params.secteur_activites);
    const [dateA, setdateA] = useState(params.dateDebut);
    const [typeContratA, settypeContratA] = useState(params.typeContrat);
    const [typeAnnonce, settypeAnnonce] = useState(params.typeAnnonce);
    const [salaireA, setsalaireA] = useState(params.salaire);
    const [paysA, setpaysA] = useState(params.pays);
    const [lieuA, setlieuA] = useState(params.lieu);
    const [descriptionA, setdescriptionA] = useState(params.description);



    var idAdmin = localStorage.getItem(localvalue.emloyeur.idEmployeur);

    const dispatch = useDispatch();
    const loading = useSelector((state) => state.loading);
    const error = useSelector((state) => state.error);




    const [formData, setFormData] = useState({ name: '', email: '' });

    const handleSubmitAnnonce = (event) => {
        event.preventDefault();

        dispatch(
            EntrepriseEditAnnonce(params._id, titreA, entrepriseA, descriptionA, typeAnnonce, telA, emailA, salaireA, lieuA, paysA, secteursActivites, dateA, toast)
        );


    };


    return (
        <div>

            <ToastContainer />
            <div class="breadcrumb-area">
                <h1>Modifier votre annonce</h1>
                <ol class="breadcrumb">
                    <li class="item"><a href="#">Accueil</a></li>
                    <li class="item">{params.titre}</li>
                </ol>
            </div>


            <div class="post-a-new-job-box">
                <h3>information sur annonce</h3>

                <form onSubmit={handleSubmitAnnonce}>
                    <div class="row">


                        <div class="col-lg-6 col-md-6">
                            <div class="form-group">
                                <label>Titre (metier ou besoin )</label>
                                <input value={titreA} onChange={(e) => { settitreA(e.target.value) }} required type="text" class="form-control" placeholder="..." />
                            </div>
                        </div>

                        <div class="col-lg-3 col-md-3">
                            <div class="form-group">
                                <label>téléphone</label>
                                <input value={telA} onChange={(e) => { settelA(e.target.value) }} required type="number" class="form-control" placeholder="...." />
                            </div>
                        </div>
                        <div class="col-lg-3 col-md-3">
                            <div class="form-group">
                                <label>email</label>
                                <input required type="email" value={emailA} onChange={(e) => { setemailA(e.target.value) }} class="form-control" placeholder="..." />
                            </div>
                        </div>

                        <div class="col-lg-4 col-md-4">
                            <div class="form-group">
                                <label>Nom de l{"'"}entreprise</label>
                                <input required type="text" value={entrepriseA} onChange={(e) => { setentrepriseA(e.target.value) }} class="form-control" placeholder="...." />
                            </div>
                        </div>
                        <div class="col-lg-4 col-md-4">
                            <div class="form-group">
                                <label>Secteur d{"'"}activité</label>
                                <select required name="secteur_activites" onChange={(e) => { setsecteurA(e.currentTarget.value) }} class="form-control">
                                    {
                                        secteursActivites.map((item) => {
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
                                <label>Date de début du job</label>
                                <input required type="date" value={dateA} onChange={(e) => { setdateA(e.target.value) }} name="dateDebut" class="form-control" placeholder="Job Title Here" />
                            </div>
                        </div>
                        <div class="col-lg-4 col-md-4">
                            <div class="form-group">
                                <label>Type de contrat</label>
                                <select required name="typeContrat" onChange={(e) => { settypeContratA(e.target.value) }} class="form-control">
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
                                <input required type='number' value={salaireA} onChange={(e) => { setsalaireA(e.target.value) }} class="form-control" />
                            </div>
                        </div>
                        <div class="col-lg-4 col-md-4">
                            <div class="form-group">
                                <label>lieu </label>
                                <input required type='text' value={lieuA} onChange={(e) => { setlieuA(e.target.value) }} class="form-control" />
                            </div>
                        </div>
                        <div class="col-lg-12 col-md-12">
                            <div class="form-group">
                                <label>Pays </label>
                                <input required type='text' value={paysA} onChange={(e) => { setpaysA(e.target.value) }} class="form-control" />
                            </div>
                        </div>

                        <div class="col-lg-12 col-md-12">
                            <div class="form-group">
                                <label>Description de l{"'"}annonce</label>
                                <textarea required cols="30" value={descriptionA} onChange={(e) => { setdescriptionA(e.target.value) }} rows="6" placeholder="...." class="form-control"></textarea>
                            </div>
                        </div>





                        {error && <p class="text-danger">Une erreur est survenue lors de l{"'"}inscription : {error}</p>}

                        {
                            loading ?
                                <p>envois en cours ....</p> :
                                <div class="col-lg-12 col-md-12">
                                    <button type="submit" class="default-btn bg-blue-600 ">Modifier annonce <i class="flaticon-send"></i></button>
                                </div>
                        }
                    </div>
                </form>
            </div>



        </div>
    )
}

export default DashBoardEmployeurEditAnnoncePage;