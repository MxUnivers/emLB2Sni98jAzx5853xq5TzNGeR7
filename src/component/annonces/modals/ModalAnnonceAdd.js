import React from 'react'
import { typeContrat } from '../../../config/ListApi'
import { useState } from 'react';
import { AnnonceActionAddRequest } from '../../../actions/others/AnnonceAction';
import { useDispatch, useSelector } from 'react-redux';
import { useEffect } from 'react';
import { ComponanyActionListRequest } from '../../../actions/others/ComponanyAction';

const ModalAnnonceAdd = () => {
    const dispatch = useDispatch();
    const loading = useSelector((state) => state.loading);
    const error = useSelector((state) => state.error);


    const [formData, setFormData] = useState({});
    const [dataEntreprise, setdataEntreprise] = useState([])
    useEffect(() => {
        ComponanyActionListRequest(setdataEntreprise);
    }, [])

    const handleSubmit = (event) => {
        event.preventDefault();
        dispatch(AnnonceActionAddRequest(formData));
    };

    const handleChange = (event) => {
        const { name, value } = event.target;
        setFormData((prevState) => ({ ...prevState, [name]: value }));
    };

    return (
        <div class="modal fade" id="modal-form-signup" tabindex="-1" role="dialog" aria-labelledby="modal-form-signup" aria-hidden="true">
            <div class="modal-dialog modal-dialog-centered" role="document">
                <div class="modal-content">
                    <div class="modal-body p-0">
                        <div class="card p-3 p-lg-4">
                            <button type="button" class="btn-close ms-auto" data-bs-dismiss="modal" aria-label="Close"></button>
                            <div class="text-center text-md-center mb-4 mt-md-0">
                                <h1 class="mb-0 h4"> Ajouter une  Annonce </h1>
                            </div>
                            <form action="#" class="mt-4" onSubmit={handleSubmit}>
                                <div class="form-group mb-4">
                                    <label for="titre">Titre de l{"'"}offre</label>
                                    <div class="input-group">
                                        <span class="input-group-text" id="basic-addon1">
                                            <svg class="icon icon-xs text-gray-600" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path d="M2.003 5.884L10 9.882l7.997-3.998A2 2 0 0016 4H4a2 2 0 00-1.997 1.884z"></path><path d="M18 8.118l-8 4-8-4V14a2 2 0 002 2h12a2 2 0 002-2V8.118z"></path></svg>
                                        </span>
                                        <input type="text" name="titre" onChange={handleChange} class="form-control" placeholder="nom de l'offre de l'offre..........." id="username" autofocus required />
                                    </div>
                                </div>

                                <div class="form-group">

                                    <div class="form-group mb-4">
                                        <label for="entreprise">Entrerpise</label>
                                        <div class="input-group">
                                            <span class="input-group-text" id="basic-addon2">
                                                <svg class="icon icon-xs text-gray-600" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M5 9V7a5 5 0 0110 0v2a2 2 0 012 2v5a2 2 0 01-2 2H5a2 2 0 01-2-2v-5a2 2 0 012-2zm8-2v2H7V7a3 3 0 016 0z" clip-rule="evenodd"></path></svg>
                                            </span>
                                            <select class="form-select" onChange={handleChange} name="entreprise" aria-label="Default select example">

                                                {
                                                    dataEntreprise.map((item) => {
                                                        return (<option value={item.full_name}>{item.full_name.toUpperCase()}</option>
                                                        )
                                                    })
                                                }
                                            </select>
                                        </div>
                                    </div>

                                    <div class="form-group mb-4">
                                        <label >Durée de l{"'"}date (debut - fin)</label>
                                        <div class="input-group">
                                            <span class="input-group-text" id="basic-addon2">
                                                <svg class="icon icon-xs text-gray-600" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M5 9V7a5 5 0 0110 0v2a2 2 0 012 2v5a2 2 0 01-2 2H5a2 2 0 01-2-2v-5a2 2 0 012-2zm8-2v2H7V7a3 3 0 016 0z" clip-rule="evenodd"></path></svg>
                                            </span>
                                            <input type="date" name="dateDebut" onChange={handleChange} placeholder="nom complet .............." class="form-control" id="name" required />
                                            <input type="date" name="dateFin" onChange={handleChange} placeholder="nom complet .............." class="form-control" id="name" required />
                                        </div>
                                    </div>
                                    {
                                        /*
                                         <div class="form-group mb-4">
                                            <label for="telephone">Photo de profile</label>
                                            <div class="input-group">
                                                <span class="input-group-text" id="basic-addon2">
                                                    <svg class="icon icon-xs text-gray-600" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M5 9V7a5 5 0 0110 0v2a2 2 0 012 2v5a2 2 0 01-2 2H5a2 2 0 01-2-2v-5a2 2 0 012-2zm8-2v2H7V7a3 3 0 016 0z" clip-rule="evenodd"></path></svg>
                                                </span>
                                                <input type="file" class="form-control" id="telephone" />
                                                <img scr="" style={{ height: "50px", width: "50px", borderRadius: "5px" }} />
                                            </div>
                                        </div>
                                        */
                                    }

                                    <div class="form-group mb-4">
                                        <label for="typeContrat">Type de contrat </label>
                                        <div class="input-group">
                                            <span class="input-group-text" id="basic-addon2">
                                                <svg class="icon icon-xs text-gray-600" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M5 9V7a5 5 0 0110 0v2a2 2 0 012 2v5a2 2 0 01-2 2H5a2 2 0 01-2-2v-5a2 2 0 012-2zm8-2v2H7V7a3 3 0 016 0z" clip-rule="evenodd"></path></svg>
                                            </span>
                                            <select class="form-select" onChange={handleChange} name="typeContrat" aria-label="Default select example">

                                                {typeContrat.map((item) => {
                                                    return (<option value={item.type}>{item.name.toUpperCase()}</option>)
                                                })
                                                }
                                            </select>
                                        </div>
                                    </div>


                                    <div class="form-group mb-4">
                                        <label for="description">Description de l{"'"} offre</label>
                                        <div class="input-group">
                                            <span class="input-group-text" id="basic-addon2">
                                                <svg class="icon icon-xs text-gray-600" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M5 9V7a5 5 0 0110 0v2a2 2 0 012 2v5a2 2 0 01-2 2H5a2 2 0 01-2-2v-5a2 2 0 012-2zm8-2v2H7V7a3 3 0 016 0z" clip-rule="evenodd"></path></svg>
                                            </span>
                                            <textarea name="description" onChange={handleChange} placeholder="nom complet .............." class="form-control" id="name" required />
                                        </div>
                                    </div>

                                    {
                                        /*
                                        <div class="mb-4">
                                        <div class="form-check">
                                            <input class="form-check-input" type="checkbox" value="" id="remember" />
                                            <label class="form-check-label fw-normal mb-0" for="remember">
                                                I agree to the <a href="#" class="fw-bold">terms and conditions</a>
                                            </label>
                                        </div>
                                    </div>
                                        */
                                    }



                                </div>
                                {error && <p class="text-danger">Une erreur est survenue : {error}</p>}
                                {loading ?
                                    <p>Envoi de la requête en cours...</p> :
                                    <div class="d-grid">
                                        <button type="submit" class="btn btn-gray-800">Ajouter une Annonce</button>
                                    </div>
                                }
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default ModalAnnonceAdd;