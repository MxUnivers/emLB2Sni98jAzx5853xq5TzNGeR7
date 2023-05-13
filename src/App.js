
import React from "react";
import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom";
import LayoutWeb from "./layout/web/LayoutWeb";
import HomePage from "./pages/web/HomePage";
import { routing } from "./utlis/routing";
import ContactPage from "./pages/web/ContactPage";
import AnnoncesListPage from "./pages/web/AnnoncesListPage";
import AnnonceDetail from "./pages/web/AnnonceDetail";
import SignupCandidatPage from "./pages/web/inscription/SignupCandidatPage";
import SignupEmployer from "./pages/web/inscription/SignupEmployer";
import LayoutAdmin from "./layout/admin/LayoutAdmin";
import DashbordCandidatPage from "./pages/admin/candidat/DashbordCandidatPage";
import DashboardProfileCandidatPgage from "./pages/admin/candidat/DashboardProfileCandidatPage";
import DashboardOffreListCandidatPage from "./pages/admin/candidat/DashboardOffreListCandidatPage";
import DashboardOffrePostulerCandidatPage from "./pages/admin/candidat/DashboardOffrePostulerCandidatPage";
import DashboardCvCandidatPage from "./pages/admin/candidat/DashboardCvCandidatPage";
import DasboardChatCandidatPage from "./pages/admin/candidat/DasboardChatCandidatPage";
import DashboardPasswordEditCandidatPage from "./pages/admin/candidat/DashboardPasswordEditCandidatPage";
import DashBoardMemberCandidatPage from "./pages/admin/candidat/DashBoardMemberCandidatPage";
import LoginCandidatPage from "./pages/web/connexion/LoginCandidatPage";
import LoginEmployeurPage from "./pages/web/connexion/LoginEmployeurPage";
import DashboardOffreDetailCandidatPage from "./pages/admin/candidat/DashboardOffreDetailCandidatPage";
import DashboardDetailCandidatPage from "./pages/admin/candidat/DashboardDetailCandidatPage";
import DashbordEmployeurPage from "./pages/admin/employeur/DashbordEmployeurPage";
import DashboardEmployeurPofilePage from "./pages/admin/employeur/DashboardEmployeurPofilePage";
import DashBoardEmployeurPostAnnoncePage from "./pages/admin/employeur/DashBoardEmployeurPostAnnoncePage";
import DashboardEmployeurAnnonceListPage from "./pages/admin/employeur/DashboardEmployeurAnnonceListPage";
import { localvalue } from "./utlis/storage/localvalue";
import { typeadmin } from "./utlis/storage/account";
import DashboardAnnonceDetailPage from "./pages/admin/candidat/DashboardAnnonceDetailPage";
import LoginPage from "./pages/web/connexion/LoginPage";
import SignUpPage from "./pages/web/inscription/SignUpPage";
import HistoriquePage from "./pages/web/HistoriquePage";



function App() {

  var typeAdmin = localStorage.getItem(localvalue.typeAdmin);


  return (
    <div >
      <BrowserRouter>
        <Routes>







        // web de la l'application
          <Route path='' element={<LayoutWeb />} >
            <Route path={`${routing.home.path}`} element={<HomePage />} />
            <Route path={`${routing.contact.path}`} element={<ContactPage />} />
            // les annoncessur le site web
            <Route path={`${routing.historique.path}`} element={<HistoriquePage />} />
            <Route path={`${routing.searchAnnonce.path}`} element={<AnnoncesListPage />} />
            <Route path={`${routing.detailAnnonce.path}`} element={<AnnonceDetail />} />
            //inscription du candidat
            <Route path={`${routing.inscription.path}`} element={<SignUpPage />} />
            <Route path={`${routing.inscriptionCandidat.path}`} element={<SignupCandidatPage />} />
            <Route path={`${routing.inscriptionEmployer.path}`} element={<SignupEmployer />} />
            // connexion du candidat
            <Route path={`${routing.connexion.path}`} element={<LoginPage />} />
            <Route path={`${routing.connexionCandidat.path}`} element={<LoginCandidatPage />} />
            <Route path={`${routing.connexionEmployeur.path}`} element={<LoginEmployeurPage />} />
          </Route>

          // Administration  de la appplication
          <Route path='' element={<LayoutAdmin />}>

          //Candidat
            <Route path={`${routing.candidatDashboard.path}`} element={typeAdmin == typeadmin.candidat ? <DashbordCandidatPage/> : <Navigate to ="/"/>  } />
            <Route path={`${routing.candidatProfile.path}`} element={typeAdmin == typeadmin.candidat ?<DashboardProfileCandidatPgage /> : <Navigate to="/"/>} />
            <Route path={`${routing.candidatOffres.path}`} element={<DashboardOffreListCandidatPage />} />
            <Route path={`${routing.candidatOffresPostuler.path}`} element={<DashboardOffrePostulerCandidatPage />} />
            <Route path={`${routing.candidatCv.path}`} element={<DashboardCvCandidatPage />} />
            <Route path={`${routing.candidatChat.path}`} element={<DasboardChatCandidatPage />} />
            <Route path={`${routing.candidatChangePassord.path}`} element={typeAdmin == typeadmin.candidat ?<DashboardPasswordEditCandidatPage /> : <Navigate to="/"/>} />
            <Route path={`${routing.candidatAllParticipant.path}`} element={<DashBoardMemberCandidatPage />} />
            <Route path={`${routing.candidatDetailProfileView.path}`} element={<DashboardDetailCandidatPage />} />

            // Fichier en commun employeur et candidat
            <Route path={`${routing.dashbordDetailOffreEmplois.path}`} element={<DashboardOffreDetailCandidatPage />} />
            <Route path={`${routing.dashbordDetailAnnonce.path}`} element={<DashboardAnnonceDetailPage />} />
            



            // Employeur 
            <Route path={`${routing.employeurDashboard.path}`} element={typeAdmin == typeadmin.employeur ? <DashbordEmployeurPage/>  : <Navigate to="/" />}   />
            <Route path={`${routing.employeurProfile.path}`} element={typeAdmin == typeadmin.employeur ? <DashboardEmployeurPofilePage/>  : <Navigate to="/" />}   />
            <Route path={`${routing.employeurPostAnnonce.path}`}  element={typeAdmin == typeadmin.employeur ? <DashBoardEmployeurPostAnnoncePage/>  : <Navigate to="/" />}   />
            <Route path={`${routing.employeurAnnonces.path}`} element={typeAdmin == typeadmin.employeur ? <DashboardEmployeurAnnonceListPage/>  : <Navigate to="/" />}   />

          </Route>











        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
