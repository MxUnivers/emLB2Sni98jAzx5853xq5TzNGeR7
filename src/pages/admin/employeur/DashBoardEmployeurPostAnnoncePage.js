import React, { useState } from 'react'
import { typeContrat } from '../../../utlis/options/optionDivers'
import { useDispatch, useSelector } from 'react-redux';
import { EntreprisePostAnnonce } from '../../../action/api/employeur/EmployeurAction';
import { localvalue } from '../../../utlis/storage/localvalue';



const DashBoardEmployeurPostAnnoncePage = () => {

    var idAdmin = localStorage.getItem(localvalue.emloyeur.idEmployeur);

    const dispatch = useDispatch();
    const loading = useSelector((state) => state.loading);
    const error = useSelector((state) => state.error);

    // selector des bouton
    const [showComponentA, setshowComponentA] = useState(true);
    const [showComponentB, setshowComponentB] = useState(false);

    const handleShowComponentA = () => {
        setshowComponentA(true);
        setshowComponentB(false);
    };

    const handleShowComponentB = () => {
        setshowComponentA(false);
        setshowComponentB(true);
    };



    const [formData, setFormData] = useState(
        {
            name: '',
            email: '',
            titre: '',
            telephone: "",
            description: ""
        });
    const handleChangeForm = (event) => {
        const { name, value } = event.target;
        setFormData({ ...formData, [name]: value });
    }

    const handleSubmit = (event) => {
        if (formData.titre) {
            alert("Titre requis")
        }
        if (formData.email) {
            alert("email requis")
        }
        event.preventDefault();
        dispatch(EntreprisePostAnnonce(idAdmin, formData))
    };



    return (
        <div>
            <div class="breadcrumb-area">
                <h1>Poster </h1>
                <ol class="breadcrumb">
                    <li class="">
                        <button onClick={handleShowComponentA} class=" btn bg-blue-600 hover:bg-blue-600 active:bg-blue-600">Annonce</button>
                    </li>
                    <li class="mx-3 justify-center items-center">ou</li>
                    <li class="item">
                        <button onClick={handleShowComponentB} class=" btn bg-blue-600 hover:bg-blue-600 active:bg-blue-600">offre</button>
                    </li>
                </ol>
            </div>
            {
                showComponentA &&
                <div class="post-a-new-job-box">
                    <h3>Poster une annonce</h3>

                    <form onSubmit={handleSubmit}>
                        <div class="row">
                            <div class="col-lg-6 col-md-6">
                                <div class="form-group">
                                    <label>Titre (metier ou besoin ,)</label>
                                    <input type="text" onChange={handleChangeForm} name="titre" class="form-control" placeholder="Job Title Here" />
                                </div>
                            </div>
                            <div class="col-lg-3 col-md-3">
                                <div class="form-group">
                                    <label>téléphone</label>
                                    <input type="number" onChange={handleChangeForm} name="telephone" class="form-control" placeholder="Job Title Here" />
                                </div>
                            </div>
                            <div class="col-lg-3 col-md-3">
                                <div class="form-group">
                                    <label>email</label>
                                    <input type="email" onChange={handleChangeForm} name="email" class="form-control" placeholder="Job Title Here" />
                                </div>
                            </div>

                            <div class="col-lg-6 col-md-6">
                                <div class="form-group">
                                    <label>Nom de l{"'"}entreprise</label>
                                    <input type="text" onChange={handleChangeForm} name="entreprise" class="form-control" placeholder="Job Title Here" />
                                </div>
                            </div>
                            <div class="col-lg-6 col-md-6">
                                <div class="form-group">
                                    <label>Date de début du job</label>
                                    <input type="date" onChange={handleChangeForm} name="dateDebut" class="form-control" placeholder="Job Title Here" />
                                </div>
                            </div>
                            <div class="col-lg-4 col-md-4">
                                <div class="form-group">
                                    <label>Type de contrat</label>
                                    <select name="typeContrat" onChange={handleChangeForm} class="form-control">
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
                                    <input type='number' onChange={handleChangeForm} name="salaire" class="form-control" />
                                </div>
                            </div>
                            <div class="col-lg-4 col-md-4">
                                <div class="form-group">
                                    <label>lieu </label>
                                    <input type='text' onChange={handleChangeForm} name="lieu" class="form-control" />
                                </div>
                            </div>

                            <div class="col-lg-12 col-md-12">
                                <div class="form-group">
                                    <label>Description de l{"'"}annonce</label>
                                    <textarea cols="30" onChange={handleChangeForm} name="description" rows="6" placeholder="Short description..." class="form-control"></textarea>
                                </div>
                            </div>





                            {error && <p class="text-danger">Une erreur est survenue lors de l{"'"}inscription : {error}</p>}

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
            }



            {
                showComponentB &&
                <div class="post-a-new-job-box">
                    <h3>Poster une offre d{"'"}emplois</h3>

                    <form onSubmit={handleSubmit}>
                        <div class="row">
                            <div class="col-lg-6 col-md-6">
                                <div class="form-group">
                                    <label>Titre (metier ou besoin ,)</label>
                                    <input type="text" onChange={handleChangeForm} name="titre" class="form-control" placeholder="Job Title Here" />
                                </div>
                            </div>
                            <div class="col-lg-3 col-md-3">
                                <div class="form-group">
                                    <label>téléphone</label>
                                    <input type="number" onChange={handleChangeForm} name="telephone" class="form-control" placeholder="Job Title Here" />
                                </div>
                            </div>
                            <div class="col-lg-3 col-md-3">
                                <div class="form-group">
                                    <label>email</label>
                                    <input type="email" onChange={handleChangeForm} name="email" class="form-control" placeholder="Job Title Here" />
                                </div>
                            </div>

                            <div class="col-lg-6 col-md-6">
                                <div class="form-group">
                                    <label>Nom de l{"'"}entreprise</label>
                                    <input type="text" onChange={handleChangeForm} name="entreprise" class="form-control" placeholder="Job Title Here" />
                                </div>
                            </div>
                            <div class="col-lg-6 col-md-6">
                                <div class="form-group">
                                    <label>Date de début du job</label>
                                    <input type="date" onChange={handleChangeForm} name="dateDebut" class="form-control" placeholder="Job Title Here" />
                                </div>
                            </div>
                            <div class="col-lg-4 col-md-4">
                                <div class="form-group">
                                    <label>Type de contrat</label>
                                    <select name="typeContrat" onChange={handleChangeForm} class="form-control">
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
                                    <input type='number' onChange={handleChangeForm} name="salaire" class="form-control" />
                                </div>
                            </div>
                            <div class="col-lg-4 col-md-4">
                                <div class="form-group">
                                    <label>lieu </label>
                                    <input type='text' onChange={handleChangeForm} name="lieu" class="form-control" />
                                </div>
                            </div>

                            <div class="col-lg-12 col-md-12">
                                <div class="form-group">
                                    <label>Description de l{"'"}annonce</label>
                                    <textarea cols="30" onChange={handleChangeForm} name="description" rows="6" placeholder="Short description..." class="form-control"></textarea>
                                </div>
                            </div>





                            {error && <p class="text-danger">Une erreur est survenue lors de l{"'"}inscription : {error}</p>}

                            {
                                loading ?
                                    <p>envois en cours ....</p> :
                                    <div class="col-lg-12 col-md-12">
                                        <button type="submit" class="default-btn bg-blue-600 ">Poster offre <i class="flaticon-send"></i></button>
                                    </div>
                            }
                        </div>
                    </form>
                </div>
            }





        </div>
    )
}

export default DashBoardEmployeurPostAnnoncePage