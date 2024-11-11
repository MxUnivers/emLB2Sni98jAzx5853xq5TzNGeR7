import React from 'react';
import './TrainingCard.css';
import { routing } from '../../utlis/routing';
import { localvalue } from '../../utlis/storage/localvalue';

const TrainingCard = ({ item, icon }) => {
    return (
        <div className="training-card cursor-pointer"
            onClick={() => {
                localStorage.setItem(localvalue.formationId, item._id);
                window.location.href = `/${routing.formation_detail}`;
            }}

        >
            <img src={item.logo} alt={item.formationTitle} className="training-image" />
            <div className="training-content">
                <div className="icon-wrapper">
                    <span className="training-icon">{icon}</span>
                </div>
                <h3 className="training-title">{item.formationTitle}</h3>
                <div className="arrow-wrapper">
                    <a href="#" className="arrow-link">→</a>
                </div>
            </div>
        </div>
    );
};

export default TrainingCard;
