
import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import LayoutWeb from "./layout/web/LayoutWeb";
import HomePage from "./pages/web/HomePage";
import { routing } from "./utlis/routing";
import ContactPage from "./pages/web/ContactPage";

function App() {
  return (
    <div >
      <BrowserRouter>
        <Routes>


        // web de la l'application
          <Route path='' element={<LayoutWeb />} >
            <Route path={`${routing.home.path}`} element={<HomePage />} />
            <Route path={`${routing.contact.path}`} element={<ContactPage />} />
          </Route>


        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
