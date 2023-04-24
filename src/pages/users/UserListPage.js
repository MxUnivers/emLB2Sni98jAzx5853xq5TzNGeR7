import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom';
import ModalUserAdd from '../../component/users/modals/ModalUserAdd';
import ModalUserEdit from '../../component/users/modals/ModalUserEdit';
import ModalUserStop from '../../component/users/modals/ModalUserStop';
import ModalUserAccess from '../../component/users/modals/ModalUserAccess';
import ModalUserPassword from '../../component/users/modals/ModalUserPassword';
import { AdministratorListRequest } from '../../actions/others/AdministratorAction';
import LoaderSpiner from '../../component/LoaderPage/LoaderSpiner';


const UserListPage = () => {
  const [data, setdata] = useState([]);
  useEffect(() => {
    AdministratorListRequest(setdata);
  }, []);

  const [userdata, setuserdata] = useState({});

  const  handleUser = (item)=>{
    setuserdata(item);
  }

  return (
    <div>
      <div class="py-4">
        <nav aria-label="breadcrumb" class="d-none d-md-inline-block">
          <ol class="breadcrumb breadcrumb-dark breadcrumb-transparent">
            <li class="breadcrumb-item">
              <Link to={`/`}>
                <svg class="icon icon-xxs" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6"></path></svg>
              </Link>
            </li>
            <li class="breadcrumb-item active" aria-current="page">Administrateur</li>
          </ol>
        </nav>
        <div class="d-flex justify-content-between w-100 flex-wrap">
          <div class="mb-3 mb-lg-0">
            <h1 class="h4">Administrateurs</h1>
            <p class="mb-0">Liste des administrateurs .</p>
          </div>
          <div>
            <button type="button" data-bs-toggle="modal" data-bs-target="#modal-form-signup" class="btn btn-outline-gray-600 d-inline-flex align-items-center">
              <svg class="icon icon-xs me-2" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 6v6m0 0v6m0-6h6m-6 0H6"></path></svg>
              Ajouter administrateur
            </button>
          </div>

        </div>
      </div>

      {/* Modal Pour créer utlisateurs */}
      <ModalUserAdd />
      {/* Modal Pour créer utlisateurs */}

      {/*  Modal de modification */}
      <ModalUserEdit data={userdata} />
      {/* Modal de mofication modal-form-signup-edit */}

      {/* Modal de Pour bloquer utilisateurs */}
      <ModalUserStop data={userdata} />
      {/* Modal de Pour bloquer utilisateurs */}
      <ModalUserAccess data={userdata} />
      <ModalUserPassword data={userdata} />



      <div class="card border-0 shadow mb-4">
        <div class="card-body">
          <div class="table-responsive">
            <table class="table table-centered table-nowrap mb-0 rounded">
              <thead class="thead-light">
                <tr>
                  <th class="border-0 rounded-start">username</th>
                  <th class="border-0">nom complet</th>
                  <th class="border-0">telephone</th>
                  <th class="border-0">Action Moidification</th>
                  <th class="border-0">Action Accès</th>
                  <th class="border-0">nombre de connexion</th>
                  <th class="border-0 rounded-end">Actif</th>
                </tr>
              </thead>
                {
                  data && data.length > 0 ?
                  
                    (
                      <tbody>
                      {
                        data.map((item) => {
                          return (
                            <tr>
                              <td>
                                {item.username}
                              </td>
                              <td>
                                {item.full_name.substring(0,10)+"..."}
                              </td>
                              <td>
                                {item.telephone}
                              </td>
                              <td>
                                <button type="button"
                                onClick={()=>{handleUser(item)}}
                                data-bs-toggle="modal" data-bs-target="#modal-form-signup-edit" class="btn btn-sm btn-info d-inline-flex align-items-center">
                                  <svg class="icon icon-xxs me-2" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M18 5v8a2 2 0 01-2 2h-5l-5 4v-4H4a2 2 0 01-2-2V5a2 2 0 012-2h12a2 2 0 012 2zM7 8H5v2h2V8zm2 0h2v2H9V8zm6 0h-2v2h2V8z" clip-rule="evenodd"></path></svg>
                                  Modifier
                                </button>
  
                                <button
                                onClick={()=>{handleUser(item)}}
                                type="button" data-bs-toggle="modal" data-bs-target="#modal-form-signup-password" class="btn btn-sm btn-gray-300 d-inline-flex align-items-center">
                                  <svg class="icon icon-xxs me-2" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M18 5v8a2 2 0 01-2 2h-5l-5 4v-4H4a2 2 0 01-2-2V5a2 2 0 012-2h12a2 2 0 012 2zM7 8H5v2h2V8zm2 0h2v2H9V8zm6 0h-2v2h2V8z" clip-rule="evenodd"></path></svg>
                                  mot de passe
                                </button>
                              </td>
                              <td>
                                <button 
                                onClick={()=>{handleUser(item)}}
                                type="button" data-bs-toggle="modal" data-bs-target="#modal-form-signup-access" class="btn btn-sm btn-success d-inline-flex align-items-center">
                                  <svg class="icon icon-xxs me-2" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M18 5v8a2 2 0 01-2 2h-5l-5 4v-4H4a2 2 0 01-2-2V5a2 2 0 012-2h12a2 2 0 012 2zM7 8H5v2h2V8zm2 0h2v2H9V8zm6 0h-2v2h2V8z" clip-rule="evenodd"></path></svg>
                                  Débloquer
                                </button>
                                <button
                                onClick={()=>{handleUser(item)}}
                                type="button" data-bs-toggle="modal" data-bs-target="#modal-form-signup-stop" class="btn btn-sm btn-danger d-inline-flex align-items-center">
                                  <svg class="icon icon-xxs me-2" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M18 5v8a2 2 0 01-2 2h-5l-5 4v-4H4a2 2 0 01-2-2V5a2 2 0 012-2h12a2 2 0 012 2zM7 8H5v2h2V8zm2 0h2v2H9V8zm6 0h-2v2h2V8z" clip-rule="evenodd"></path></svg>
                                  Bloquer
                                </button>
                              </td>
                              <td>
                                <div class="row d-flex align-items-center">
                                  <div class="col-12 col-xl-2 px-0">
                                    <div class="small fw-bold">51%</div>
                                  </div>
                                  <div class="col-12 col-xl-10 px-0 px-xl-1">
                                    <div class="progress progress-lg mb-0">
                                      <div class="progress-bar bg-dark" role="progressbar" aria-valuenow="51" aria-valuemin="0" aria-valuemax="100" style={{ width: "51%" }}></div>
                                    </div>
                                  </div>
                                </div>
                              </td>
                              
                              <td class="text-success">
                                {
                                  item.blocked ?
                                  <div class="d-flex align-items-center">
                                  <svg class="icon icon-xs me-1" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M14.707 12.707a1 1 0 01-1.414 0L10 9.414l-3.293 3.293a1 1 0 01-1.414-1.414l4-4a1 1 0 011.414 0l4 4a1 1 0 010 1.414z" clip-rule="evenodd"></path></svg>
                                  <span class="fw-bold">en service</span>
                                </div>
                                :
                                <div class="d-flex align-items-center">
                                  <svg class="icon icon-xs me-1" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M14.707 12.707a1 1 0 01-1.414 0L10 9.414l-3.293 3.293a1 1 0 01-1.414-1.414l4-4a1 1 0 011.414 0l4 4a1 1 0 010 1.414z" clip-rule="evenodd"></path></svg>
                                  <span class="fw-bold text-danger">bloqué</span>
                                </div>
                             
                                }
                                </td>
                            </tr>
                          )
                        })
                      }
                      </tbody>
                    ) :
                    <div>
                    <LoaderSpiner />
                    <LoaderSpiner />
                    <LoaderSpiner />
                    <LoaderSpiner />
                    <LoaderSpiner />
                    <LoaderSpiner />
                    <LoaderSpiner />
                    <LoaderSpiner />
                    <LoaderSpiner />
                    <LoaderSpiner />
                    <LoaderSpiner />
                    <LoaderSpiner />
                    </div>
                }

            </table>
          </div>
        </div>
      </div>

    </div>
  )
}

export default UserListPage;