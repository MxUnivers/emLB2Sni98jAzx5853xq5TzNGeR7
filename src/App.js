
import React from "react";
import "./App.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Layout from "./layout/Layout";
import HomePage from "./pages/HomePage";
import { routing } from "./utlis/routing";
import ListEmploisWebPage from "./pages/web/ListEmploisWebPage";
import JobDetailPage from "./pages/web/JobDetailPage";
import CandidatPage from "./pages/web/CandidatPage";
import CandidatDetailPage from "./pages/web/CandidatDetailPage";
import JobAppliedWebPage from "./pages/web/JobAppliedWebPage";
import CompanyDetailPage from "./pages/web/CompanyDetailPage";
import JobPostPage from "./pages/web/JobPostPage";
import JobEditPage from "./pages/web/JobEditPage";
import CandidatureListPage from "./pages/web/CandidatureListPage";
import SignUpPage from "./pages/web/SignUpPage";
import SignInPage from "./pages/web/SignInPage";
import SignUpRecruteurPage from "./pages/web/SignUpRecruteurPage";
import SignInRecuteurPage from "./pages/web/SignInRecuteurPage";
import CandidatureRecruteurListPage from "./pages/web/CandidatureRecruteurListPage";
import CompanyDetaiOffrelPage from "./pages/web/CompanyDetaiOffrelPage";
import ErrorPage from "./pages/web/ErrorPage";
import PrincingPage from "./pages/web/PrincingPage";
import CandidatEditProfilePage from "./pages/web/CandidatEditProfilePage";
import BlogPage from "./pages/web/BlogPage";
import BogPostPage from "./pages/web/BogPostPage";



function App() {



  return (
    <div >
      <BrowserRouter>
        <Routes>

          {/* connexion candidat */}
          <Route path={`/${routing.connexion}`} element={<SignInPage />} />
          {/* connexion recurteur */}
          <Route path={`/${routing.connexion_recuteur}`} element={<SignInRecuteurPage />} />


          {/* Inscription candidat */}
          <Route path={`/${routing.inscription}`} element={<SignUpPage />} />
          {/* Inscription recruteur */}
          <Route path={`/${routing.inscription_recruteur}`} element={<SignUpRecruteurPage />} />

          <Route path="" element={<Layout />}>
            <Route index path="" element={<HomePage />} />
            <Route path={`${routing.job_list}`} element={<ListEmploisWebPage />} />
            <Route path={`${routing.job_details}`} element={<JobDetailPage />} />
            <Route path={`${routing.job_post}`} element={<JobPostPage />} />
            <Route path={`${routing.job_edit}`} element={<JobEditPage />} />
            <Route path={`${routing.candidat_list}`} element={<CandidatPage />} />
            <Route path={`${routing.candidat_edit}`} element={<CandidatEditProfilePage />} />
            <Route path={`${routing.candidat_details}`} element={<CandidatDetailPage />} />
            <Route path={`${routing.candidat_details_view}`} element={<CandidatDetailPage />} />


            {/*Blog */}
            <Route path={`${routing.blog_list}`} element={<BlogPage />} />
            <Route path={`${routing.blog_post}`} element={<BogPostPage />} />




            {/* # Candidatures */}
            <Route path={`${routing.candidature_list}`} element={<CandidatureListPage />} />
            <Route path={`${routing.candidature_list_recruteur}`} element={<CandidatureRecruteurListPage />} />
            <Route path={`${routing.candidat_applied}`} element={<JobAppliedWebPage />} />
            <Route path={`${routing.company_details}`} element={<CompanyDetailPage />} />
            <Route path={`${routing.company_details_view}`} element={<CompanyDetaiOffrelPage />} />



            {/*Manage Pring */}
            <Route path={`${routing.pricing}`} element={<PrincingPage/>}  />

            
            
          </Route>
          <Route path={`/*`} element={<ErrorPage />} />






        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
