import React from 'react';
import { FaUser, FaLock, FaNewspaper, FaUserCircle, FaMoneyBillWave, FaChartBar } from 'react-icons/fa';

const ButtonList = () => {
  return (
    <ul className="button-list flex flex-wrap space-x-1 space-y-1">
      <li className="sm:hidden bg-blue-600 hover:bg-blue-700 active:bg-blue-800 px-2 py-1 rounded-lg">
        <button className="btn-icon  ">
          <FaUser />
        </button>
        <span className="btn-label">Candidat</span>
      </li>
      <li className="sm:hidden bg-blue-600 hover:bg-blue-700 active:bg-blue-800 px-2 py-1 rounded-lg">
        <button className="btn-icon  ">
          <FaLock />
        </button>
        <span className="btn-label">Mot de passe</span>
      </li>
      <li className="sm:hidden bg-blue-600 hover:bg-blue-700 active:bg-blue-800 px-2 py-1 rounded-lg">
        <button className="btn-icon  ">
          <FaNewspaper />
        </button>
        <span className="btn-label  ">Publications</span>
      </li>
      <li className="sm:hidden bg-blue-600 hover:bg-blue-700 active:bg-blue-800 px-2 py-1 rounded-lg">
        <button className="btn-icon  ">
          <FaUserCircle />
        </button>
        <span className="btn-label">Profile</span>
      </li>
      <li className="sm:hidden bg-blue-600 hover:bg-blue-700 active:bg-blue-800 px-2 py-1 rounded-lg">
        <button className="btn-icon  ">
          <FaMoneyBillWave />
        </button>
        <span className="btn-label">Paiement</span>
      </li>
      <li className="sm:hidden bg-blue-600 hover:bg-blue-700 active:bg-blue-800 px-2 py-1 rounded-lg">
        <button className="btn-icon  ">
          <FaChartBar />
        </button>
        <span className="btn-label">Tableau de bord</span>
      </li>
    </ul>
  );
};

export default ButtonList;
