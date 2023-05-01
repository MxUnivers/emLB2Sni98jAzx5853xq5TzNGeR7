
import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
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



function App() {
  return (
    <div >
      <BrowserRouter>
        <Routes>




        


        // web de la l'application
          <Route path='' element={<LayoutWeb />} >
            <Route path={`${routing.home.path}`} element={<HomePage />} />
            <Route path={`${routing.contact.path}`} element={<ContactPage />} />
            // les annoncessur le site web
            <Route path={`${routing.searchAnnonce.path}`} element={<AnnoncesListPage />} />
            <Route path={`${routing.detailAnnonce.path}`} element={<AnnonceDetail />} />
            //inscription du candidat
            <Route path={`${routing.inscriptionCandidat.path}`} element={<SignupCandidatPage />} />
            <Route path={`${routing.inscriptionEmployer.path}`} element={<SignupEmployer />} />
            // connexion du candidat
            <Route path={`${routing.connexionCandidat.path}`} element={<LoginCandidatPage />} />
            <Route path={`${routing.connexionEmployeur.path}`} element={<LoginEmployeurPage />} />
          </Route>

          // Administration  de la appplication
          <Route path='' element={<LayoutAdmin />}>
             <Route path={`${routing.candidatDashboard.path}`} element={<DashbordCandidatPage/>} />
             <Route path={`${routing.candidatProfile.path}`} element={<DashboardProfileCandidatPgage/>} />
             <Route path={`${routing.candidatOffres.path}`} element={<DashboardOffreListCandidatPage/>} />
             <Route path={`${routing.candidatOffresPostuler.path}`} element={<DashboardOffrePostulerCandidatPage/>} />
             <Route path={`${routing.candidatCv.path}`} element={<DashboardCvCandidatPage/>} />
             <Route path={`${routing.candidatChat.path}`} element={<DasboardChatCandidatPage/>} />
             <Route path={`${routing.candidatChangePassord.path}`} element={<DashboardPasswordEditCandidatPage/>} />
             <Route path={`${routing.candidatAllParticipant.path}`} element={<DashBoardMemberCandidatPage/>} />
             <Route path={`${routing.candidatDetailOffreEmplois.path}`} element={<DashboardOffreDetailCandidatPage/>} />
          </Route>











        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
