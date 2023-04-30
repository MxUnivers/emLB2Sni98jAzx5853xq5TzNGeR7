import React, { useState } from 'react'
import { routing } from '../../../utlis/routing'
import { CandidatEditPassword} from '../../../action/api/candidat/CandidatAction';
import { useDispatch, useSelector } from 'react-redux';
import { localvalue } from '../../../utlis/storage/localvalue';

const DashboardPasswordEditCandidatPage = () => {

  var idAdmin = localStorage.getItem(localvalue.candidat.idCandidat);
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
    if (formDataEdit.password !== formDataEdit["confirm-password"]) {
      alert("Les Champ ne sont pas identique !");
      return;
    }
    dispatch(CandidatEditPassword(idAdmin, formDataEdit));
  };
  return (
    <div>
      <div class="breadcrumb-area">
        <h1>Mot de passe</h1>
        <ol class="breadcrumb">
          <li class="item"><a href={`/${routing.candidatDashboard}`}>Accueil</a></li>
          <li class="item">mot de passe</li>
        </ol>
      </div>



      <div class="change-password-box">
        <h3>Gestion de ton mot de passe</h3>

        <form onSubmit={handleSubmit}>
          <div class="row">

            <div class="col-lg-12 col-md-12">
              <div class="form-group">
                <label>Nouveau mot de passe</label>
                <input type="text" name="password" onChange={handleChangeForm} class="form-control" />
              </div>
            </div>

            <div class="col-lg-12 col-md-12">
              <div class="form-group">
                <label>Confirmer mot de passe</label>
                <input type="text" name="confirm-password" onChange={handleChangeForm} class="form-control" />
              </div>
            </div>

            {error && <p class="text-danger">Une erreur est lors de la modification: {error.message}</p>}
            {
              loading ?
                <p>modification en cours ...</p>
                :
                <div class="col-lg-12 col-md-12">
                  <button type="submit" class="default-btn bg-blue-500">Confirmer <i class="flaticon-send"></i></button>
                </div>
            }
          </div>
        </form>
      </div>
    </div>
  )
}

export default DashboardPasswordEditCandidatPage