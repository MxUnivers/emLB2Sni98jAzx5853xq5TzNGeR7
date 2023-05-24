import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { EntrepriseEditProfile, EntrepriseGetById } from '../../../action/api/employeur/EmployeurAction';
import { localvalue } from '../../../utlis/storage/localvalue';
import { optionPays } from '../../../utlis/options/optionDivers';
import { useNavigate } from 'react-router-dom';
import { Editor } from '@tinymce/tinymce-react';
import { ApiKey } from '../../../utlis/config';
import { ToastContainer, toast } from 'react-toastify';

const DashboardEmployeurPofilePage = () => {

    const handleEditorChange = (content, editor) => {
        console.log('Content was updated:', content)
    }
    const navigation = useNavigate();
    var typeAdmin = localStorage.getItem(localvalue.typeAdmin);
    var idAdmin = localStorage.getItem(localvalue.emloyeur.idEmployeur);
    const [formData, setformData] = useState({});

    // recupération
    useEffect(() => {
        EntrepriseGetById(idAdmin, setformData);
    }, [])


    // Bloquer tous les champ texte
    const dispatch = useDispatch();
    const loading = useSelector((state) => state.loading);
    const error = useSelector((state) => state.error);

    // Recupration des données de mon formualire
    const [formDataEdit, setFormDataEdit] = useState({ name: '', email: '' });
    const handleChangeForm = (event) => {
        const { name, value } = event.target;
        setFormDataEdit({ ...formDataEdit, [name]: value });
    }
    const handleSubmit = (event) => {
        event.preventDefault();
        dispatch(EntrepriseEditProfile(idAdmin, formDataEdit,toast));
    };



    return (
        <div>
            <div class="breadcrumb-area">
                <h1>Profile Employeur</h1>
                <ol class="breadcrumb">
                    <li class="item"><a href="candidates-dashboard.html">Home</a></li>
                    <li class="item">employeur</li>
                </ol>
            </div>
            <ToastContainer/>


            <div class="my-profile-box">
                <h3>Detail de mon profile </h3>

                <form onSubmit={handleSubmit}>
                    <div class="row">
                        <div class="col-lg-12 col-md-12">
                            <div class="form-group profile-box">
                                <img src={formData.logo} alt="image" />
                                <div class="file-upload">
                                    <input type="file" name="file" id="file" accept=".JPEG,.PNG,.JPG" class="inputfile" />
                                    <label for="file"><i class="ri-upload-2-line"></i> Upload Photo</label>
                                </div>

                                <div class="text">
                                    <p>La taille maximale du fichier est de 1MB, la dimension minimale est de 450x50 : 450x450 et les fichiers appropriés sont .jpg et .png.</p>
                                </div>
                            </div>
                        </div>

                        <div class="col-xl-6 col-lg-12 col-md-12">
                            <div class="form-group">
                                <label>Nom </label>
                                <input defaultValue={formData.username} name="username" onChange={handleChangeForm} type="text" class="form-control" placeholder="Andy Smith" />
                            </div>
                        </div>
                        <div class="col-xl-6 col-lg-12 col-md-12">
                            <div class="form-group">
                                <label>Prénoms </label>
                                <input defaultValue={formData.full_name} name="full_name" onChange={handleChangeForm} type="text" class="form-control" placeholder="Andy Smith" />
                            </div>
                        </div>

                        <div class="col-xl-6 col-lg-12 col-md-12">
                            <div class="form-group">
                                <label>Email</label>
                                <input defaultValue={formData.email} name="email" onChange={handleChangeForm} type="email" class="form-control" placeholder="hello@andysmith.com" />
                            </div>
                        </div>

                        <div class="col-xl-6 col-lg-12 col-md-12">
                            <div class="form-group">
                                <label>téléphone</label>
                                <input defaultValue={formData.telephone} name="telephone" onChange={handleChangeForm} type="phone" class="form-control" placeholder="+88 (123) 123456" />
                            </div>
                        </div>

                       {
                        /*
                         <div class="col-xl-6 col-lg-12 col-md-12">
                            <div class="form-group">
                                <label>Experience</label>
                                <input defaultValue={formData.years_experience} name="years_experience" onChange={handleChangeForm} type="text" class="form-control" placeholder="4-8 Years" />
                            </div>
                        </div>
                        */
                       }

                        <div class="col-xl-6 col-lg-12 col-md-12">
                            <div class="form-group">
                                <label>address</label>
                                <input defaultValue={formData.adresse} name="adresse" onChange={handleChangeForm} type="text" class="form-control" placeholder="4-8 Years" />
                            </div>
                        </div>


                        <div class="col-lg-12 col-md-12">
                            <div class="form-group">
                                <label>Description sur vous</label>
                                <Editor
                                    class='form-control'
                                    apiKey={`${ApiKey.tiny.path}`}
                                    initialValue='<p>Décriver en plus sur votre entrprise sur votre acticté / les succès de votre entrpise</p>'
                                    init={{
                                        height: 300,
                                        menubar: true,
                                        plugins: [
                                            'advlist autolink lists link image charmap print preview anchor',
                                            'searchreplace visualblocks code fullscreen',
                                            'insertdatetime media table paste code help wordcount'
                                        ],
                                        toolbar:
                                            'undo redo | formatselect | bold italic backcolor | \
                                        alignleft aligncenter alignright alignjustify | \
                                        bullist numlist outdent indent | removeformat | help'
                                    }}
                                    onEditorChange={handleEditorChange}
                                />

                            </div>
                        </div>

                        <div class="col-xl-6 col-lg-12 col-md-12">
                            <div class="form-group">
                                <label>Pays</label>

                                <select class="selectize-filter form-control" onChange={handleChangeForm} name="pays">
                                    {
                                        optionPays.map((item) => {
                                            return (
                                                <option value={item.value} selected={item.value == formData.pays ? true : false}  >{item.label}</option>
                                            )
                                        })
                                    }
                                </select>
                            </div>
                        </div>

                        {
                            /*
                            <div class="col-xl-6 col-lg-12 col-md-12">
                            <div class="form-group">
                                <label>Ville</label>

                                <select class="selectize-filter form-control" onChange={handleChangeForm} name="ville">
                                    <option >----- Choisissez une ville -----</option>
                                    {
                                        localites.map((item) => {
                                            return (
                                                <option value={item.value} selected={item.value == formData.ville ? true : false}  >{item.label}</option>
                                            )
                                        })
                                    }
                                </select>
                            </div>
                        </div>
                            */
                        }



                        {
                            /*
                            <div class="col-xl-4 col-lg-12 col-md-12">
                            <div class="form-group">
                                <label>Données de localisation sur googgle maps</label>
                                <input type="text" class="form-control"
                                    placeholder="https://goo.gl/maps/UGgiotXbLiUW6Hou5"
                                />
                            </div>
                        </div>
                            */
                        }


                        <div class="col-xl-6 col-lg-12 col-md-12">
                            <div class="form-group">
                                <label>lien Facebook </label>
                                <input defaultValue={formData.facebook_url} name="facebook_url" onChange={handleChangeForm} type="text" class="form-control" placeholder="https://twitter.com/" />
                            </div>
                        </div>

                        <div class="col-xl-6 col-lg-12 col-md-12">
                            <div class="form-group">
                                <label>lien Twitter </label>
                                <input defaultValue={formData.twitter_url} name="twitter_url" onChange={handleChangeForm} type="text" class="form-control" placeholder="https://twitter.com/" />
                            </div>
                        </div>

                        <div class="col-xl-6 col-lg-12 col-md-12">
                            <div class="form-group">
                                <label>lien Linkedin </label>
                                <input defaultValue={formData.linkedin_url} name="linkedin_url" onChange={handleChangeForm} type="text" class="form-control" placeholder="https://www.linkedin.com/" />
                            </div>
                        </div>

                        <div class="col-xl-6 col-lg-12 col-md-12">
                            <div class="form-group">
                                <label>lien Instagram </label>
                                <input defaultValue={formData.instagram_url} name="instagram_url" onChange={handleChangeForm} type="text" class="form-control" placeholder="https://instagram.com/" />
                            </div>
                        </div>

                        {error && <p class="text-danger">Une erreur est survenue lors de la modification du profile : {error}</p>}

                        {
                            loading ?
                                <p>modification en cours ...</p>
                                :
                                <div class="col-lg-12 col-md-12">
                                    <button type="submit" class="default-btn bg-blue-600">Enregitrer changement <i class="flaticon-send"></i></button>
                                </div>
                        }
                    </div>
                </form>
            </div>

        </div>
    )
}

export default DashboardEmployeurPofilePage;
