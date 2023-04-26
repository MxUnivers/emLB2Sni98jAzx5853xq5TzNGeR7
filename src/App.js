
import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import LayoutWeb from "./layout/web/LayoutWeb";
import HomePage from "./pages/web/HomePage";
import { routing } from "./utlis/routing";

function App() {
  return (
    <div >
      <BrowserRouter>
        <Routes>


        // web de la l'application
          <Route path='' element={<LayoutWeb />} >
            <Route path={`${routing.home.path}`} element={<HomePage />} />
          </Route>


        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
