import React, { useState } from 'react'
import BarnerCandidatAuth from '../../../components/web/auth/BarnerCandidatAuth';
import { routing } from '../../../utlis/routing';
import { CandidatConnexion } from '../../../action/api/candidat/CandidatAction';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';

const LoginCandidatPage = () => {
  
  const illustration = "https://images.pexels.com/photos/3769021/pexels-photo-3769021.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2";

  const  navigation=useNavigate();

  const dispatch = useDispatch();
  const loading = useSelector((state) => state.loading);
  const error = useSelector((state) => state.error);

  // Recupration des données de mon formualire
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
      alert("Champ mot de passe vide ");
      return;
    }
    dispatch(CandidatConnexion(formData,navigation));
  };






  return (
    <div class="">


      <BarnerCandidatAuth />

      <div className="flex justify-center items-center h-screen bg-gray-100">
        <div className="flex flex-col md:flex-row rounded-xl shadow-md bg-white w-11/12 md:w-3/4 lg:w-1/2">
          <div className="h-56 md:h-auto md:w-1/2 rounded-t-xl md:rounded-l-xl md:rounded-r-none bg-cover bg-center" style={{ backgroundImage: `url(${illustration})` }}></div>
          <div className="flex flex-col w-full md:w-1/2 p-4">
            <h2 className="text-2xl font-bold text-center mb-4">Connexion Candidat</h2>
            <form
              className="flex flex-col space-y-4"
              onSubmit={handleSubmit}
            >
              <div>
                <label htmlFor="email" className="font-medium">Adresse e-mail</label>
                <input type="email" id="email" name="email" onChange={handleChangeForm} required className="w-full p-2 border border-gray-300 rounded-md" />
              </div>
              <div>
                <label htmlFor="password" className="font-medium">Mot de passe</label>
                <input type="password" id="password" name="password" onChange={handleChangeForm} required className="w-full p-2 border border-gray-300 rounded-md" />
              </div>


              {error && <p class="text-danger">Une erreur est survenue lors de l{"'"}inscription : {error}</p>}
              {loading ?
                <p>Connexion en cours ...</p> :
                <button className="bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 rounded-md transition duration-200">
                  Se connecter
                </button>
              }
              <div class=" mt-1 px-3 flex flex-col items-center justify-center">
                <div class="p-2 flex  ">
                  <p>ou</p>
                </div>
                <div class="w-full flex justify-center items-center">
                  <a href={`/${routing.inscriptionCandidat.path}`} className="flex justify-center items-center w-full text-blue-500 underline font-bold py-2 rounded-md transition duration-200">s{"'"}inscire</a>
                </div>
              </div>
            </form>
          </div>
        </div>
      </div>

    </div>
  )
}

export default LoginCandidatPage;
