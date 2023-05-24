import React, { Suspense, useEffect, useState } from 'react'
import { AnnonceGetAll, CategorieGetAllAnnonces, LocationGetAllAnnonces } from '../../../action/api/annonces/AnnoncesAction';
import AnnonceCard from './card/AnnonceCard';
import LoaderComponent from '../../chargement/LoaderComponent';
import { Carousel } from 'react-responsive-carousel';
import 'react-responsive-carousel/lib/styles/carousel.min.css';
import { routing } from '../../../utlis/routing';
import { localvalue } from '../../../utlis/storage/localvalue';
import { AiOutlineReload } from 'react-icons/ai';



const AnnonceResultSearch = () => {
    const [disable_refresh, setdisable_refresh] = useState(false);

    // listes des secteurs d'ectivités et lieu de l'application
    const [keywords, setkeywords] = useState(['Mot-clé 1', 'Mot-clé 2', 'Mot-clé 3', 'Mot-clé 4', 'Mot-clé 5']);
    const [localites_list, setlocalites_list] = useState([]);

    // State des mot clés / secteurs / lieur de localisation
    const [keyword, setKeyword] = useState('');
    const [location, setLocation] = useState('');
    const [category, setCategory] = useState('');
    const handleSearch = () => {
        const filteredData = dataAnnonce.filter((annonce) => {
            const matchesKeyword = annonce.titre.toLowerCase().includes(keyword.toLowerCase());
            const matchesLocation = location === '' || annonce.lieu === location;
            const matchesCategory = category === '' || annonce.secteur_activites === category;
            return matchesKeyword && matchesLocation && matchesCategory;
        });

        if (dataAnnonce.length == 0) {
            setdisable_refresh(false);
        }
        setdisable_refresh(true);
        setdataAnnonce(filteredData);
    };
    const handleRefresh = () => {
        setdataAnnonce(dataAnnonce2);
    }




    const [dataAnnonce, setdataAnnonce] = useState([]);
    const [dataAnnonce2, setdataAnnonce2] = useState([]);
    //Pagindation data annonces
    const pageSize = 1
    const [start, setStart] = useState(0);
    const [perPage, setPerPage] = useState();
    const total = dataAnnonce.length;

    const handleLoadMore = () => {
        setPerPage(perPage + pageSize);
    };
    useEffect(() => {
        AnnonceGetAll(setdataAnnonce, setdataAnnonce2);
        CategorieGetAllAnnonces(setkeywords);
        LocationGetAllAnnonces(setlocalites_list);
    }, [])




    return (


        <div class="w-full job-list-area pb-100" >
            <div class="w-full container-fluid flex justify-center">
                <div class="w-full container flex justify-center">

                    {
                        /*
                          <div class="col-lg-4 col-md-12">
                            <div class="job-list-map-sticky">
                                <div id="map">
                                    <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3019.7535241766864!2d-73.90996728434231!3d40.81140973946449!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89c2f5b9998bf269%3A0xbb6dd99c5d7c00ab!2sWales%20Ave%2C%20Bronx%2C%20NY%2C%20USA!5e0!3m2!1sen!2sbd!4v1625473568079!5m2!1sen!2sbd"></iframe>
                                </div>
                            </div>
                        </div>
                        */
                    }


                    <div class=" w-full  col-md-12 job-list-with-max-width pt-100 visible">
                        <div class=" w-full job-list-search-box">
                            <h3>"'recherche'..."</h3>

                            <Carousel showThumbs={false} showArrows={true} showStatus={false} showIndicators={false} dynamicHeight={false}>
                                {keywords.map((keyword, index) => (
                                    <div key={index}>
                                        <a href={`/${routing.categoriesAnnonces.path}`}
                                            onClick={() => {
                                                localStorage.setItem(localvalue.annonceDetail.secteur_activites, `${keyword.toString()}`);
                                            }}

                                            className="bg-blue-500 text-white rounded-full px-4 py-2">
                                            {keyword}
                                        </a>
                                    </div>
                                ))}
                            </Carousel>

                            <div class="job-list-search-form">
                                <div class="row justify-content-center">
                                    <div class="col-lg-4 col-md-12">
                                        <div class="form-group">
                                            <label><i class="flaticon-edit"></i></label>
                                            <input class="form-control" type="text" placeholder="mot clé"
                                                onChange={(e) => setKeyword(e.target.value)}
                                            />
                                        </div>
                                    </div>

                                    <div class="col-lg-4 col-md-12">
                                        <div class="form-group">
                                            <label><i class="flaticon-placeholder"></i></label>
                                            <select class="selectize-filter form-control" onChange={(e) => setLocation(e.target.value)} >
                                                <option >-----Lieu -----</option>
                                                {localites_list.map((localite) => (
                                                    <option key={localite} value={localite}>
                                                        {localite}
                                                    </option>
                                                ))}
                                            </select>
                                        </div>
                                    </div>

                                    <div class="col-lg-4 col-md-12">
                                        <div class="form-group">
                                            <label><i class="flaticon-list"></i></label>
                                            <select class="selectize-filter form-control" onChange={(e) => setCategory(e.target.value)} >
                                                <option value="1">-----Catégorie -----</option>
                                                {keywords.map((item) => (
                                                    <option key={item} value={item}>
                                                        {item}
                                                    </option>
                                                ))}
                                            </select>
                                        </div>
                                    </div>

                                    <div class="search-btn">
                                        <button
                                            onClick={handleSearch}
                                        ><i class="ri-search-line"></i></button>
                                    </div>
                                </div>
                            </div>
                        </div>

                        {
                            disable_refresh ?
                                <div class="bg-gray-100 py-2 mx-1">
                                    <button
                                        className="flex items-center px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600"
                                        onClick={handleRefresh}
                                    >
                                        <AiOutlineReload className="mr-2" />
                                        Rafraîchir
                                    </button>
                                </div> :
                                null
                        }

                        <div class="row ">
                                    {
                                        dataAnnonce?.map((item) => {
                                            return (
                                                <AnnonceCard data={item} />
                                            )
                                        })
                                     } :
                        </div>

                        {perPage < total && (
                            <div class="browse-jobs-btn" onClick={handleLoadMore}>
                                <a href="job-listing-1.html" class="default-btn">charger plus <i class="flaticon-list-1"></i></a>
                            </div>

                        )}

                    </div>
                </div>
            </div>
        </div>

    )
}

export default AnnonceResultSearch;