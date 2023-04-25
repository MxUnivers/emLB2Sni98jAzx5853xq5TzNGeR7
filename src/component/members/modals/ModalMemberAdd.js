import React from 'react';
import { MemberAddRequest } from '../../../actions/others/MemberAction';
import { useDispatch, useSelector } from 'react-redux';
import { useState } from 'react';

const ModalMemberAdd = () => {

    const dispatch = useDispatch();
    const loading = useSelector((state) => state.loading);
    const error = useSelector((state) => state.error);

    const [formData, setFormData] = useState({});

    const handleSubmit = (event) => {
        event.preventDefault();
        dispatch(MemberAddRequest(formData));
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
                                <h1 class="mb-0 h4"> Ajouter un candidat </h1>
                            </div>
                            <form action="#" class="mt-4" onSubmit={handleSubmit}>
                                <div class="form-group mb-4">
                                    <label for="username">Nom d{"'"}utilisateur</label>
                                    <div class="input-group">
                                        <span class="input-group-text" id="basic-addon1">
                                            <svg class="icon icon-xs text-gray-600" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path d="M2.003 5.884L10 9.882l7.997-3.998A2 2 0 0016 4H4a2 2 0 00-1.997 1.884z"></path><path d="M18 8.118l-8 4-8-4V14a2 2 0 002 2h12a2 2 0 002-2V8.118z"></path></svg>
                                        </span>
                                        <input type="text" name="username" onChange={handleChange} class="form-control" placeholder="username..........." id="username" autofocus required />
                                    </div>
                                </div>

                                <div class="form-group">

                                    <div class="form-group mb-4">
                                        <label for="name">Nom </label>
                                        <div class="input-group">
                                            <span class="input-group-text" id="basic-addon2">
                                                <svg class="icon icon-xs text-gray-600" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M5 9V7a5 5 0 0110 0v2a2 2 0 012 2v5a2 2 0 01-2 2H5a2 2 0 01-2-2v-5a2 2 0 012-2zm8-2v2H7V7a3 3 0 016 0z" clip-rule="evenodd"></path></svg>
                                            </span>
                                            <input type="text" name="firstname" onChange={handleChange} placeholder="nom complet .............." class="form-control" id="name" required />
                                        </div>
                                    </div>

                                    <div class="form-group mb-4">
                                        <label for="name">Prénoms</label>
                                        <div class="input-group">
                                            <span class="input-group-text" id="basic-addon2">
                                                <svg class="icon icon-xs text-gray-600" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M5 9V7a5 5 0 0110 0v2a2 2 0 012 2v5a2 2 0 01-2 2H5a2 2 0 01-2-2v-5a2 2 0 012-2zm8-2v2H7V7a3 3 0 016 0z" clip-rule="evenodd"></path></svg>
                                            </span>
                                            <input type="text" name="lastname" onChange={handleChange} placeholder="nom complet .............." class="form-control" id="name" required />
                                        </div>
                                    </div>


                                    <div class="form-group mb-4">
                                        <label for="email">Email</label>
                                        <div class="input-group">
                                            <span class="input-group-text" id="basic-addon2">
                                                <svg class="icon icon-xs text-gray-600" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M5 9V7a5 5 0 0110 0v2a2 2 0 012 2v5a2 2 0 01-2 2H5a2 2 0 01-2-2v-5a2 2 0 012-2zm8-2v2H7V7a3 3 0 016 0z" clip-rule="evenodd"></path></svg>
                                            </span>
                                            <input type="email" name="email" onChange={handleChange} placeholder="email@gmail.com....." class="form-control" id="email" required />
                                        </div>
                                    </div>

                                    <div class="form-group mb-4">
                                        <label for="telephone">Télephone</label>
                                        <div class="input-group">
                                            <span class="input-group-text" id="basic-addon2">
                                                <svg class="icon icon-xs text-gray-600" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M5 9V7a5 5 0 0110 0v2a2 2 0 012 2v5a2 2 0 01-2 2H5a2 2 0 01-2-2v-5a2 2 0 012-2zm8-2v2H7V7a3 3 0 016 0z" clip-rule="evenodd"></path></svg>
                                            </span>
                                            <input type="number" name="telephone" onChange={handleChange} placeholder="+(225)XXXXXXXXX....." class="form-control" id="telephone" required />
                                        </div>
                                    </div>
                                    

                                    <div class="form-group mb-4">
                                        <label for="telephone">Photo de profile</label>
                                        <div class="input-group">
                                            <span class="input-group-text" id="basic-addon2">
                                                <svg class="icon icon-xs text-gray-600" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M5 9V7a5 5 0 0110 0v2a2 2 0 012 2v5a2 2 0 01-2 2H5a2 2 0 01-2-2v-5a2 2 0 012-2zm8-2v2H7V7a3 3 0 016 0z" clip-rule="evenodd"></path></svg>
                                            </span>
                                            <input type="file" name="coverPicture" accept=".JPG,.PNG,.JPEG" onChange={handleChange} class="form-control" id="telephone" />
                                        </div>
                                        <img src={formData["coverPicture"]} style={{ height: "50px", width: "50px", borderRadius: "5px" }} />
                                    </div>
                                    <div class="form-group mb-4">
                                        <label for="password">Mot de passe</label>
                                        <div class="input-group">
                                            <span class="input-group-text" id="basic-addon2">
                                                <svg class="icon icon-xs text-gray-600" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M5 9V7a5 5 0 0110 0v2a2 2 0 012 2v5a2 2 0 01-2 2H5a2 2 0 01-2-2v-5a2 2 0 012-2zm8-2v2H7V7a3 3 0 016 0z" clip-rule="evenodd"></path></svg>
                                            </span>
                                            <input type="password" name="password" onChange={handleChange} placeholder="XXXXXXXXX....." class="form-control" id="telephone" required />
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
                                        <button type="submit" class="btn btn-info">Ajouter</button>
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

export default ModalMemberAdd