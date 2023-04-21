import React from 'react';


const ModalAnnonceStop = ({id}) => {
    const handle = ()=>{
        console.log(id)
    }
    return (
        <div class="modal fade" id="modal-form-signup-stop" tabindex="-1" role="dialog" aria-labelledby="modal-form-signup" aria-hidden="true">
            <div class="modal-dialog modal-dialog-centered" role="document">
                <div class="modal-content">
                    <div class="modal-body p-0">
                        <div class="card p-3 p-lg-4">
                            <button type="button" class="btn-close ms-auto" data-bs-dismiss="modal" aria-label="Close"></button>
                            <div class="text-center text-md-center mb-4 mt-md-0">
                                <h1 class="mb-0 h4">Bloquer cette annonce </h1>
                            </div>
                            <form action="#" class="mt-4">
                                <div class="d-grid">
                                    <button type="submit" class="btn btn-danger">Bloquer</button>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default ModalAnnonceStop;