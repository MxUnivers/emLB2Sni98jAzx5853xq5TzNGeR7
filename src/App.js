
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


        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
