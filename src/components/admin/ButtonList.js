import React from 'react';
import { FaUser, FaLock, FaNewspaper, FaUserCircle, FaMoneyBillWave, FaChartBar } from 'react-icons/fa';

const ButtonList = () => {
  return (
    <ul className="button-list">
      <li className="sm:hidden">
        <button className="btn-icon">
          <FaUser />
        </button>
        <span className="btn-label">Candidat</span>
      </li>
      <li className="sm:hidden">
        <button className="btn-icon">
          <FaLock />
        </button>
        <span className="btn-label">Mot de passe</span>
      </li>
      <li className="sm:hidden">
        <button className="btn-icon">
          <FaNewspaper />
        </button>
        <span className="btn-label">Publications</span>
      </li>
      <li className="sm:hidden">
        <button className="btn-icon">
          <FaUserCircle />
        </button>
        <span className="btn-label">Profile</span>
      </li>
      <li className="sm:hidden">
        <button className="btn-icon">
          <FaMoneyBillWave />
        </button>
        <span className="btn-label">Paiement</span>
      </li>
      <li className="sm:hidden">
        <button className="btn-icon">
          <FaChartBar />
        </button>
        <span className="btn-label">Tableau de bord</span>
      </li>
    </ul>
  );
};

export default ButtonList;
