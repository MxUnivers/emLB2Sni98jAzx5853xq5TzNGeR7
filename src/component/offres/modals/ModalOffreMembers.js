import React from 'react'

const ModalOffreMembers = ({ data }) => {
  return (
    <div class="modal fade" id="modal-default" tabindex="-1" role="dialog" aria-labelledby="modal-default" aria-hidden="true">
      <div class="modal-dialog modal-dialog-centered" role="document">
        <div class="modal-content">
          <div class="modal-header">
            <h2 class="h6 modal-title">Listes de cet qui ont postuler</h2>
            <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
          </div>
          <div class="modal-body">

            {
              data && data.length ?
              (
                data.map((item) => {
                  return (
                    <div class="accordion" id="accordionExample">
                      <div class="accordion-item">
                        <h2 class="accordion-header">
                          <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseTwo" aria-expanded="false" aria-controls="collapseTwo">
                            Nom des personnes <span class="bg-danger rounded p-1">3</span>
                          </button>
                        </h2>
                        <div id="collapseTwo" class="accordion-collapse collapse" data-bs-parent="#accordionExample">
                          <div class="accordion-body">
                          </div>
                        </div>
                      </div>
                    </div>
                  )
                })
              ):
              <div>
               <h2>Aucun Candidat</h2>
              </div>
            }


          </div>
          <div class="modal-footer">
            <button type="button" class="btn btn-secondary">Accept</button>
            <button type="button" class="btn btn-link text-gray-600 ms-auto" data-bs-dismiss="modal">fermer</button>
          </div>
        </div>
      </div>
    </div>
  )
}

export default ModalOffreMembers;