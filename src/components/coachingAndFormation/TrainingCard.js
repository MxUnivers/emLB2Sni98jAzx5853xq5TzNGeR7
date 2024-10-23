import React from 'react';
import './TrainingCard.css';

const TrainingCard = ({ title, image, icon }) => {
    return (
        <div className="training-card">
            <img src={image} alt={title} className="training-image" />
            <div className="training-content">
                <div className="icon-wrapper">
                    <span className="training-icon">{icon}</span>
                </div>
                <h3 className="training-title">{title}</h3>
                <div className="arrow-wrapper">
                    <a href="#" className="arrow-link">→</a>
                </div>
            </div>
        </div>
    );
};

export default TrainingCard;
