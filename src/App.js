
import React from "react";
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



function App() {

 

  return (
    <div >
      <BrowserRouter>
        <Routes>

        <Route path="" element={<Layout/>}>
        <Route index path="" element={<HomePage/>}  />
        <Route  path={`${routing.job_list}`} element={<ListEmploisWebPage/>}  />
        <Route  path={`${routing.job_details}`} element={<JobDetailPage/>}  />
        <Route  path={`${routing.candidat_list}`} element={<CandidatPage/>}  />
        <Route  path={`${routing.candidat_details}`} element={<CandidatDetailPage/>}  />
        <Route  path={`${routing.candidat_applied}`} element={<JobAppliedWebPage/>}  />
        <Route  path={`${routing.company_details}`} element={<CompanyDetailPage/>}  />
        
        
        </Route>





        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
