import React, { useState } from 'react';
import FormationCard from './FormationCard';
import FormationGetAll from '../../../action/api/formations/FormationAction';
import LoadingCompo1 from '../../loading/LoadingCompo1';

const FormationListItem = () => {
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
        <section className="mt-16 border-b border-gray-100 dark:border-gray-800 sm:mt-20 lg:mt-32">
            <div className="mx-auto px-4 sm:px-12 xl:max-w-6xl xl:px-0">
                <div className="border-b border-gray-100 pb-20 dark:border-gray-800 lg:grid lg:grid-cols-5 xl:grid-cols-6"></div>
                <div className="w-full mx-5 py-20 lg:w-3/5">
                    <h3 className="text-center text-2xl font-semibold text-gray-800 dark:text-white">Nos formations</h3>
                    {
                        isLoading ?
                            <LoadingCompo1 text={"Meilleurs coaching et formations pour vous"} />
                            :
                            error ?
                                <LoadingCompo1 text={"Impossible de voir les formations, veuillez recharger la page"} />
                                :
                                (
                                    <div className="w-full px-5 mt-8 grid gap-5">
                                        {
                                            currentItems.map((item, index) => (
                                                <FormationCard key={index} item={item} />
                                            ))
                                        }
                                    </div>
                                )
                    }
                    <div className="flex justify-center mt-8 space-x-4">
                        <button 
                            onClick={handlePreviousPage} 
                            disabled={currentPage === 1} 
                            className={`px-4 py-2 rounded-md ${currentPage === 1 ? 'bg-gray-300 cursor-not-allowed' : 'bg-blue-500 hover:bg-blue-700 text-white'}`}
                        >
                            Précédent
                        </button>
                        <button 
                            onClick={handleNextPage} 
                            disabled={currentPage === totalPages} 
                            className={`px-4 py-2 rounded-md ${currentPage === totalPages ? 'bg-gray-300 cursor-not-allowed' : 'bg-blue-500 hover:bg-blue-700 text-white'}`}
                        >
                            Suivant
                        </button>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default FormationListItem;