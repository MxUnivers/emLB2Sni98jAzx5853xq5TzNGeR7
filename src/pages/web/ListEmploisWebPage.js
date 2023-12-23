import React from 'react'
import { useNavigate } from 'react-router-dom';
import { useState } from 'react';
import { AiOutlineSearch } from "react-icons/ai"
import { routing } from '../../utlis/routing';
import { dureeDeVie, localvalue } from '../../utlis/storage/localvalue';
import { setWithExpiration } from '../../utlis/storage/localvalueFunction';
import { useEffect } from 'react';
import { typeContrats } from '../../utlis/options/optionDivers';
import { MdWorkOutline } from 'react-icons/md';
import { OffreGetAllOffre, OffreGetByCategory, OffreGetByTypeContrat } from '../../action/api/offres/OffresAction';
import JobCard2 from '../../components/job/JobCard2';
import LoadingCompo1 from '../../components/loading/LoadingCompo1';
import Select from "react-select";
const ListEmploisWebPage = () => {
    const navigate = useNavigate();

    const [offres, setoffres] = useState([]);
    const [offres2, setoffres2] = useState([]);
    const [isLoading, setisLoading] = useState(true);

    const [category, setcategory] = useState([]);
    const [categoryOptions, setcategoryOptions] = useState([]);

    const [contrats, setcontrats] = useState([])
    const [contratsOptions, setcontratsOptions] = useState([])

    useEffect(() => {
        setisLoading(true);

        OffreGetByTypeContrat(setcontrats, setcontratsOptions)
        OffreGetAllOffre(setoffres, setoffres2).then(() => {
            setisLoading(false)
        })
        OffreGetByCategory(setcategory, setcategoryOptions).then((item) => {
            setisLoading(false)
        })
    }, [])

    const [modalApply, setmodalApply] = useState(false);

    const handleClose = (item) => {
        setmodalApply(false)
    }
    const handleDetailItem = (job) => {
        setWithExpiration(localvalue.JobID, job._id, dureeDeVie);
        navigate(`/${routing.job_details}`, { state: { job } });
    }


    // filtrer
    const [selectedOptions, setSelectedOptions] = useState([]);
    const handleChange = selectedOptions => {
        setSelectedOptions(selectedOptions);
        // Filtrer les offres ici
        if (selectedOptions) {
            const selectedCategories = selectedOptions.map(option => option.value);
            if (selectedCategories.length === 0) {
                // Aucune catégorie sélectionnée, afficher toutes les offres
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
    const handleChangeContrat = selectedOptions => {
        setSelectedOptionsContract(selectedOptions);
        // Filtrer les offres ici
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

                <main className="flex min-h-[500px]  w-full items-start mt-10 justify-center bg-white px-5">
                    <div className=" grid  grid-cols-1 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10 justify-center flex-wrap items-center py-3">
                        {
                            isLoading ?
                                <LoadingCompo1 text={"Des offres d'emplois fait pour vous ...."} />
                                :
                                offres && offres.length > 0 ?
                                    offres.map((item) => {
                                        return (
                                            <JobCard2 data={item} />
                                        )
                                    })
                                    :
                                    <div className="h-min-[500px] flex justify-center">
                                        <p>Aunces offres trouvés</p>
                                    </div>

                        }
                    </div>
                </main>
            </div>
        </div >
    )
}
export default ListEmploisWebPage;



{/* 
                    modalApply &&
                    (
                        <div className="fixed inset-0 flex items-center justify-center z-50 bg-gradient-to-t to-transparent from-gray-900 " id="modal">
                            <div className="bg-white rounded-lg shadow-lg p-6">
                                <h2 className="text-lg font-bold mb-4">Postuler à l'offre d'emploi</h2>
                                <form>
                                    <div className="mb-4">
                                        <label for="fullName" className="block font-bold mb-1">Nom complet :</label>
                                        <input type="text" id="fullName" className="w-full border border-gray-300 rounded px-3 py-2" />
                                    </div>
                                    <div className="mb-4">
                                        <label for="email" className="block font-bold mb-1">Email :</label>
                                        <input type="email" id="email" className="w-full border border-gray-300 rounded px-3 py-2" />
                                    </div>
                                    <div className="mb-4">
                                        <label for="phone" className="block font-bold mb-1">Téléphone :</label>
                                        <input type="tel" id="phone" className="w-full border border-gray-300 rounded px-3 py-2" />
                                    </div>
                                    <div className="mb-4">
                                        <label for="message" className="block font-bold mb-1">Message :</label>
                                        <textarea id="message" className="w-full border border-gray-300 rounded px-3 py-2"></textarea>
                                    </div>
                                    <div className="mb-4">
                                        <label for="resume" className="block font-bold mb-1">CV :</label>
                                        <input type="file" id="resume" className="w-full border border-gray-300 rounded px-3 py-2" />
                                    </div>
                                    <div className="flex justify-end">
                                        <button type="submit" className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
                                            Envoyer
                                        </button>
                                        <button onClick={handleClose} className="bg-gray-300 hover:bg-gray-400 text-black font-bold py-2 px-4 ml-2 rounded" id="closeModal">
                                            Annuler
                                        </button>
                                    </div>
                                </form>
                            </div>
                        </div>
                    )
                    */}