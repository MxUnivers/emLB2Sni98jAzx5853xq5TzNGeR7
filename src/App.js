
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
            <Route path={`${routing.inscriptionCandidat.path}`} element={<SignupCandidatPage />} />
            <Route path={`${routing.inscriptionEmployer.path}`} element={<SignupEmployer />} />
          </Route>






          // Administration  de la appplication
          <Route path='' element={<LayoutAdmin />}>
             <Route path={`${routing.candidatDashboard.path}`} element={<DashbordCandidatPage/>} />
             <Route path={`${routing.candidatProfile.path}`} element={<DashboardProfileCandidatPgage/>} />
             <Route path={`${routing.candidatOffres.path}`} element={<DashboardOffreListCandidatPage/>} />
             <Route path={`${routing.candidatOffresPostuler.path}`} element={<DashboardOffrePostulerCandidatPage/>} />
             <Route path={`${routing.candidatCv.path}`} element={<DashboardCvCandidatPage/>} />
             <Route path={`${routing.candidatChat.path}`} element={<DasboardChatCandidatPage/>} />
          </Route>











        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
