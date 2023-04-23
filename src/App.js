import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import LayoutAdmin from './layout/LayoutAdmin';
import DashboardPage from './pages/dashboard/DashboardPage';
import { routing } from './config/routing';
import UserListPage from './pages/users/UserListPage';
import MemberListPage from './pages/membres/MemberListPage';
import OffreListPage from './pages/offres/OffreListPage';
import AnnonceListPage from './pages/annonces/AnnonceListPage';
import CompanyListPage from './pages/company/CompanyListPage';
import SignUpPage from './pages/sign/SignUpPage';
import LoginPage from './pages/sign/LoginPage';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
           <Route path={`/${routing.connexion.path}`} element={<LoginPage/>} ></Route>
           <Route path={`/${routing.signup.path}`} element={<SignUpPage/>} ></Route>
          {/* administrations de mon applications */}
          <Route path={``} element={<LayoutAdmin/>} >
            <Route index path={``} element={<DashboardPage/>} />
            <Route  path={`${routing.userslist.path}`} element={<UserListPage/>} />
            <Route  path={`${routing.memberlist.path}`} element={<MemberListPage/>} />
            <Route  path={`${routing.offrelist.path}`} element={<OffreListPage/>} />
            <Route  path={`${routing.annoncelist.path}`} element={<AnnonceListPage/>} />
            <Route  path={`${routing.companylist.path}`} element={<CompanyListPage/>} />
          </Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
