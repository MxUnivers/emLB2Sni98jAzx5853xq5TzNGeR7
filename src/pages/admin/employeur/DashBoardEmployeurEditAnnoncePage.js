import React, { useState } from 'react'
import { typeContrat } from '../../../utlis/options/optionDivers'
import { useDispatch, useSelector } from 'react-redux';

const DashBoardEmployeurEditAnnoncePage = () => {


    const dispatch = useDispatch();
    const loading = useSelector((state) => state.loading);
    const error = useSelector((state) => state.error);


    const [formData, setFormData] = useState({ name: '', email: '' });
    const handleChangeForm = (event) => {
        const { name, value } = event.target;
        setFormData({ ...formData, [name]: value });
    }

    const handleSubmit = (event) => {
        event.preventDefault();

        if (formData.email == "") {
            alert("champ email !");
            return;
        }
        if (formData.password == "") {
            alert("Cmap mot de passe vide");
            return;
        }
       
    };


    return (
        <div>
            <div class="breadcrumb-area">
                <h1>Modifier votre annonce</h1>
                <ol class="breadcrumb">
                    <li class="item"><a href="#">Accueil</a></li>
                    <li class="item">annonce post</li>
                </ol>
            </div>
            <div class="post-a-new-job-box">
                <h3>Poster votre annonce ici</h3>

                <form>
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



                        
                        <div class="col-lg-12 col-md-12">
                            <button type="submit" class="default-btn bg-blue-600 ">Modifier<i class="flaticon-send"></i></button>
                        </div>
                    </div>
                </form>
            </div>
        </div>
    )
}

export default DashBoardEmployeurEditAnnoncePage;