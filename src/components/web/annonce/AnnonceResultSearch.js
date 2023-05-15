import React, { Suspense, useEffect, useState } from 'react'
import { AnnonceGetAll } from '../../../action/api/annonces/AnnoncesAction';
import AnnonceCard from './card/AnnonceCard';
import { localites } from '../../../utlis/options/annonceOptions';
import { secteursActivites } from '../../../utlis/options/employeurOption';
import { QueryClient, QueryClientProvider, useQuery } from 'react-query';
import LoaderComponent from '../../chargement/LoaderComponent';

const queryClient = new QueryClient();

const AnnonceResultSearch = () => {

    const { data: annonces, isLoading, isError } = useQuery('annonces', AnnonceGetAll);

    const [dataAnnonce, setdataAnnonce] = useState([]);
    //Pagindation data annonces
    const pageSize = 1
    const [start, setStart] = useState(0);
    const [perPage, setPerPage] = useState();
    const total = dataAnnonce.length;

    const handleLoadMore = () => {
        setPerPage(perPage + pageSize);
    };
    useEffect(() => {
        AnnonceGetAll(setdataAnnonce);
    }, [])

    if (isLoading) {
        return <LoaderComponent/>;
    }

    if (isError) {
        return <div>Error fetching annonces</div>;
    }
    return (


        <Suspense fallback={<LoaderComponent/>}>
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

                            <form class="job-list-search-form">
                                <div class="row justify-content-center">
                                    <div class="col-lg-4 col-md-12">
                                        <div class="form-group">
                                            <label><i class="flaticon-edit"></i></label>
                                            <input class="form-control" type="text" placeholder="mot clé" />
                                        </div>
                                    </div>

                                    <div class="col-lg-4 col-md-12">
                                        <div class="form-group">
                                            <label><i class="flaticon-placeholder"></i></label>
                                            <select class="selectize-filter form-control" >
                                                <option >Location</option>
                                                {localites.map((localite) => (
                                                    <option key={localite.value} value={localite.value}>
                                                        {localite.label}
                                                    </option>
                                                ))}
                                            </select>
                                        </div>
                                    </div>

                                    <div class="col-lg-4 col-md-12">
                                        <div class="form-group">
                                            <label><i class="flaticon-list"></i></label>
                                            <select class="selectize-filter form-control">
                                                <option value="1">Catégorie</option>
                                                {secteursActivites.map((item) => (
                                                    <option key={item.value} value={item.value}>
                                                        {item.label}
                                                    </option>
                                                ))}
                                            </select>
                                        </div>
                                    </div>

                                    <div class="search-btn">
                                        <button type="submit"><i class="ri-search-line"></i></button>
                                    </div>
                                </div>
                            </form>
                        </div>


                        <div class="row ">

                            {
                                /*slice(start, perPage) */
                                dataAnnonce.map((item) => {
                                    return (
                                        <AnnonceCard data={item} />
                                    )
                                })
                            }
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
        
        </Suspense>
    )
}

export default AnnonceResultSearch;