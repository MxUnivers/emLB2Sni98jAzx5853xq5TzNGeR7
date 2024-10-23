import React from 'react';
import { useEffect, useState } from 'react';
import JobCard from '../job/JobCard';
import OffreGetAll, { OffreGetAllContrat } from '../../action/api/offres/OffresAction';
import LoadingCompo1 from '../loading/LoadingCompo1';
import './JobListHome.css';
import { routing } from '../../utlis/routing';

const JobListHome = () => {
    const { isLoading, error, offres } = OffreGetAll();
    const { category } = OffreGetAllContrat();

    return (
        <section className="job-section py-20 bg-gray-50 dark:bg-neutral-700">
            <div className="container mx-auto">
                <div className="grid grid-cols-1 gap-5">
                    <div className="mb-5 text-center">
                        <h3 className="mb-3 text-3xl text-gray-900 dark:text-gray-50">Récentes Offres d'Emploi</h3>
                        <p className="mb-5 text-gray-500 dark:text-gray-300">Trouvez votre prochain emploi : STAGE, CDI, CDD</p>
                    </div>
                </div>

                <div className="job-grid">
                    {isLoading ? (
                        <LoadingCompo1 text="Chargement des offres..." />
                    ) : error ? (
                        <p>Une erreur est survenue lors de la récupération des offres</p>
                    ) : (
                        offres.slice(0, 10).map((job) => <JobCard key={job._id} data={job} />)
                    )}
                </div>

                <div className="text-center mt-8">
                    <a href={`/${routing.job_list}`} className="btn text-white bg-blue-800/70 focus:ring focus:ring-blue-300">
                        Voir Plus d'Offres <i className="uil uil-arrow-right ms-1"></i>
                    </a>
                </div>
            </div>
        </section>
    );
};

export default JobListHome;
