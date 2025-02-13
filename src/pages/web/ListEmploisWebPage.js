import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { AiOutlineSearch } from "react-icons/ai";
import { routing } from '../../utlis/routing';
import { dureeDeVie, localvalue } from '../../utlis/storage/localvalue';
import { setWithExpiration } from '../../utlis/storage/localvalueFunction';
import { OffreGetAllOffre, OffreGetByCategory, OffreGetByTypeContrat } from '../../action/api/offres/OffresAction';
import JobCard2 from '../../components/job/JobCard2';
import LoadingCompo1 from '../../components/loading/LoadingCompo1';
import Select from "react-select";
import JobCard from '../../components/job/JobCard';

const ListEmploisWebPage = () => {
    const navigate = useNavigate();

    const [offres, setoffres] = useState([]);
    const [offres2, setoffres2] = useState([]);
    const [isLoading, setisLoading] = useState(true);
    const [category, setcategory] = useState([]);
    const [categoryOptions, setcategoryOptions] = useState([]);
    const [contrats, setcontrats] = useState([]);
    const [contratsOptions, setcontratsOptions] = useState([]);
    const [currentPage, setCurrentPage] = useState(1);
    const itemsPerPage = 10;

    useEffect(() => {
        setisLoading(false);
        OffreGetByTypeContrat(setcontrats, setcontratsOptions);
        OffreGetAllOffre(setoffres, setoffres2).then(() => {
            setisLoading(false);
        });
        OffreGetByCategory(setcategory, setcategoryOptions).then(() => {
            setisLoading(false);
        });
    }, []);

    const [modalApply, setmodalApply] = useState(false);
    const handleClose = () => {
        setmodalApply(false);
    };
    const handleDetailItem = (job) => {
        setWithExpiration(localvalue.JobID, job._id, dureeDeVie);
        navigate(`/${routing.job_details}`, { state: { job } });
    };

    // filtrer
    const [selectedOptions, setSelectedOptions] = useState([]);
    const handleChange = (selectedOptions) => {
        setSelectedOptions(selectedOptions);
        if (selectedOptions) {
            const selectedCategories = selectedOptions.map(option => option.value);
            if (selectedCategories.length === 0) {
                setoffres(offres2);
            } else {
                const filteredOffers = offres2.filter(offer => {
                    return selectedCategories.some(category => offer.areaOffre.includes(category));
                });
                setoffres(filteredOffers);
            }
        } else {
            setoffres(offres2);
        }
    };

    const [selectedOptionsContract, setSelectedOptionsContract] = useState([]);
    const handleChangeContrat = (selectedOptions) => {
        setSelectedOptionsContract(selectedOptions);
        if (selectedOptions && selectedOptions.length > 0) {
            const selectedContrats = selectedOptions.map(option => option.value);
            const filteredOffers = offres2.filter(offer => {
                return selectedContrats.some(contract => offer.typeContrat.includes(contract));
            });
            setoffres(filteredOffers);
        } else {
            setoffres(offres2);
        }
    };

    // Pagination
    const totalPages = Math.ceil(offres.length / itemsPerPage);
    const currentItems = offres.slice((currentPage - 1) * itemsPerPage, currentPage * itemsPerPage);

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
        <div className="main-content">
            <div className="page-content">
                <div className='w-full bg-gray-50 mt-24 gap-3 rounded-[10px] p-5'>
                    <form action=''>
                        <div className='grid grid-cols-1 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10 justify-center items-center py-3 rounded-[8px] gap-5 bg-white p-5 shadow-greyIsh-700'>
                            <div className='flex flex-wrap gap-2 items-center'>
                                <AiOutlineSearch className='text-[25px] icon' />
                                <Select
                                    placeholder={"plus de catefories"}
                                    isMulti
                                    options={categoryOptions.map(item => ({ value: item, label: item }))}
                                    value={selectedOptions}
                                    onChange={handleChange}
                                />
                                <Select
                                    placeholder={"Disponibilité"}
                                    isMulti
                                    options={contratsOptions.map(item => ({ value: item, label: item }))}
                                    value={selectedOptionsContract}
                                    onChange={handleChangeContrat}
                                />
                            </div>
                        </div>
                    </form>
                </div>

                <main className="flex min-h-[500px] w-full items-start mt-10 justify-center bg-white px-5">
                    <div className="flex flex-wrap grid-cols-1 xs:grid-cols-1 sm:grid-cols-2 md:grid-cols-4 lg:grid-cols-4 xl:grid-cols-4 gap-6 justify-center items-center py-3">
                        {
                            isLoading ?
                                <LoadingCompo1 text={"Des offres d'emplois fait pour vous ...."} />
                                :
                                currentItems && currentItems.length > 0 ? (
                                    currentItems.map((item, index) => (
                                        <JobCard key={index} data={item} />
                                    ))
                                ) : (
                                    <div className="h-min-[500px] flex justify-center col-span-full">
                                        <p>Aucune offre trouvée</p>
                                    </div>
                                )
                        }
                    </div>
                </main>

                <div className="flex justify-center mt-8 space-x-4 pb-36">
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
    );
};

export default ListEmploisWebPage;