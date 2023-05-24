import React, { useState } from 'react'
import Select from 'react-select';
import { Editor } from '@tinymce/tinymce-react';

import BarnerEmployer from '../../../components/web/employer/BarnerEmployer';
import { ApiKey } from '../../../utlis/config';
import { routing } from '../../../utlis/routing';
import { EntrepriseSignUp } from '../../../action/api/employeur/EmployeurAction';
import { optionPays } from '../../../utlis/options/optionDivers';
import { useDispatch, useSelector } from 'react-redux';
import { secteursActivites } from '../../../utlis/options/employeurOption';
import { ToastContainer, toast } from 'react-toastify';



const SignupEmployer = () => {
    // Edtiteur tiny
    const handleEditorChange = (content, editor) => {
        console.log('Content was updated:', content);
    };

    

    const [selectedOptions, setSelectedOptions] = useState([]);

    const handleChange = (selected) => {
        setSelectedOptions(selected);
    };

    // redux
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
        dispatch(EntrepriseSignUp(formData,toast))
    }

    return (
        <div>
            <BarnerEmployer />
            <ToastContainer/>

            <div class="main p-10 d-flex flex-column">


                <div class="submit-resumes-box ">
                    <div class=" flex space-x-3 items-center ">
                        <p>si vous avez une compte</p>
                        <a href={`/${routing.connexionEmployeur.path}`} class=" btn bg-blue-500 text-white underline" >Se connecter</a>
                    </div>
                    <form onSubmit={handleSubmit}>
                        <div class="h-[200px] ">

                        </div>
                        <div class="row">
                            <h3 class="text-3xl">Information sur votre entreprise</h3>

                            <div class="col-xl-6 col-lg-12 col-md-12">
                                <div class="form-group">
                                    <label>Nom de votre entreprise *</label>
                                    <input required type="text" name="full_name" onChange={handleChangeForm} class="form-control" placeholder="Your Name" />
                                </div>
                            </div>
                            <div class="col-xl-6 col-lg-12 col-md-12">
                                <div class="form-group">
                                    <label>Nom d{"'"}utlisateur *</label>
                                    <input required type="text" name="username" onChange={handleChangeForm} class="form-control" placeholder="Your Name" />
                                </div>
                            </div>

                            <div class="col-xl-6 col-lg-12 col-md-12">
                                <div class="form-group">
                                    <label>Email *</label>
                                    <input required type="email" name="email" onChange={handleChangeForm} class="form-control" placeholder="Your Email" />
                                </div>
                            </div>

                            <div class="col-xl-6 col-lg-12 col-md-12">
                                <div class="form-group">
                                    <label>Télephone  ( +225XXXXXXXX  )  *</label>
                                    <input required type="number" name="telephone" onChange={handleChangeForm} class="form-control" placeholder="Your Phone" />
                                </div>
                            </div>

                            <div class="col-xl-6 col-lg-12 col-md-12">
                                <div class="form-group">
                                    <label>Adrrese de votre entreprise *</label>
                                    <input required type="text" name="adresse" onChange={handleChangeForm} class="form-control" placeholder="Côte d'ivoire , Abidjan ,  Yopougon" />
                                </div>
                            </div>
                            <div class="col-xl-6 col-lg-12 col-md-12">
                                <div class="form-group">
                                    <label>Mot de passe *</label>
                                    <input required type="password" name="password" onChange={handleChangeForm} class="form-control" placeholder="" />
                                </div>
                            </div>


                            <div class="col-lg-12 col-md-12">
                                <div class="form-group">
                                    <label>Dites en plus sur votre entreprise *</label>

                                    <textarea required
                                        class="form-control"
                                        name="description"
                                        onChange={handleChangeForm}
                                    />
                                </div>
                            </div>


                            <h3>Secteur d{"'"}activté de votre entreprise </h3>

                            <div class="col-xl-6 col-lg-12 col-md-12">
                                <div class="form-group">
                                    <label>secteur d{"'"}activité *</label>
                                    <div>
                                        <select required class="form-control"
                                        name="secteur_activites"
                                            onChange={handleChange}
                                        >
                                            {secteursActivites.map((option) => (
                                                <option value={option.value}>{option.label}</option>
                                            ))}
                                        </select>
                                    </div>
                                </div>
                            </div>

                            <div class="col-xl-6 col-lg-12 col-md-12">
                                <div class="form-group">
                                    <label>Pays * </label>
                                    <select required class="form-control" name="pays" onChange={handleChangeForm}>
                                        {
                                            optionPays.map((item) => {
                                                return (
                                                    <option value={item.value} >{item.label}</option>
                                                )
                                            })
                                        }
                                    </select>
                                </div>
                            </div>

                            <h3>Résaux sociaux</h3>

                            <div class="col-xl-6 col-lg-12 col-md-12">
                                <div class="form-group">
                                    <label>Facebook URL</label>
                                    <input type="url" name="facebook_url" onChange={handleChangeForm} class="form-control" placeholder="https://www.facebook.com/" />
                                </div>
                            </div>

                            <div class="col-xl-6 col-lg-12 col-md-12">
                                <div class="form-group">
                                    <label>Twitter URL</label>
                                    <input type="url" name="twitter_url" onChange={handleChangeForm} class="form-control" placeholder="https://twitter.com/" />
                                </div>
                            </div>

                            <div class="col-xl-6 col-lg-12 col-md-12">
                                <div class="form-group">
                                    <label>Linkedin URL</label>
                                    <input type="url" name="linkedin_url" onChange={handleChangeForm} class="form-control" placeholder="https://www.linkedin.com/" />
                                </div>
                            </div>

                            <div class="col-xl-6 col-lg-12 col-md-12">
                                <div class="form-group">
                                    <label>Instagram URL</label>
                                    <input type="url" name="instsgram_url" onChange={handleChangeForm} class="form-control" placeholder="https://instagram.com/" />
                                </div>
                            </div>

                            {error && <p class="text-danger">Une erreur est survenue lors de l{"'"}inscription : {error}</p>}
                            {
                                loading ?
                                    <p>Votre inscription est en cours ....</p>
                                    :
                                    <div class="col-lg-12 col-md-12">
                                        <button type="submit" class=" btn btn-info default-btn bg-blue-600">Confimer votre inscription <i class="flaticon-send"></i></button>
                                    </div>
                            }
                        </div>
                    </form>
                </div>
            </div>


        </div>
    )
}

export default SignupEmployer;