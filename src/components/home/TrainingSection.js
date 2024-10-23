import React, { useState } from 'react'
import './TrainingSection.css';
import TrainingCard from '../coachingAndFormation/TrainingCard';
import FormationGetAll from '../../action/api/formations/FormationAction';
import { Button } from 'react-bootstrap';

const trainings = [
    {
        title: 'Audit et Conseil',
        image: 'path-to-your-image.jpg',
        icon: '📊',
    },
    {
        title: 'Bilan de Compétences',
        image: 'path-to-your-image.jpg',
        icon: '🔍',
    },
    {
        title: 'Coaching',
        image: 'path-to-your-image.jpg',
        icon: '🎓',
    },
    // Add more trainings here
];

const TrainingSection = () => {

    const { isLoading, error, formations } = FormationGetAll();
    const [currentPage, setCurrentPage] = useState(1);
    const itemsPerPage = 10;

    // Pagination logic
    const totalPages = Math.ceil(formations.length / itemsPerPage);
    const currentItems = formations.slice((currentPage - 1) * itemsPerPage, currentPage * itemsPerPage);

    const handlePreviousPage = () => {
        if (currentPage > 1) {
            setCurrentPage(currentPage - 1);
        }
    };

    const handleNextPage = () => {
        if (currentPage < totalPages) {
            setCurrentPage(currentPage + 1);
        }
    };




    return (
        <section className="training-section">
            <h2 className="section-title">Nos Formations</h2>
            <div className="training-grid">
                {formations.map((training, index) => (
                    <TrainingCard
                        key={index}
                        title={training.formationTitle}
                        image={training.logo}
                        icon={'🎓'}
                    />
                ))}
            </div>

            {/*<div className="w-full justify-center">
                <div>
                    <Button className="bg-indigo-600 text-white">Voire plus</Button>
                </div>
            </div> */}
        </section>
    );
};

export default TrainingSection;
