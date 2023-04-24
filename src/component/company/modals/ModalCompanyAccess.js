import React from 'react'
import { useState } from 'react';
import { ComponanyActionUnBlockedRequest } from '../../../actions/others/ComponanyAction';
import { useDispatch, useSelector } from 'react-redux';

const ModalCompanyAccess = ({ data }) => {
    const dispatch = useDispatch();
    const loading = useSelector((state) => state.loading);
    const error = useSelector((state) => state.error);

    const handleSubmit = (event) => {
        event.preventDefault();
        dispatch(ComponanyActionUnBlockedRequest(data._id));
    };
    return (
        <div class="modal fade" id="modal-form-signup-access" tabindex="-1" role="dialog" aria-labelledby="modal-form-signup" aria-hidden="true">
            <div class="modal-dialog modal-dialog-centered" role="document">
                <div class="modal-content">
                    <div class="modal-body p-0">
                        <div class="card p-3 p-lg-4">
                            <button type="button" class="btn-close ms-auto" data-bs-dismiss="modal" aria-label="Close"></button>
                            <div class="text-center text-md-center mb-4 mt-md-0">
                                <h1 class="mb-0 h4">Débloquer cette entreprise </h1>
                            </div>
                            <form action="#" class="mt-4" onSubmit={handleSubmit}>

                                {error && <p class="text-danger">Une erreur est survenue : {error}</p>}
                                {
                                    loading ?
                                    <p>Envoi de la requête en cours...</p> 
                                        :
                                        <div class="d-grid">
                                            <button type="submit" class="btn btn-success">Débloquer</button>
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

export default ModalCompanyAccess;