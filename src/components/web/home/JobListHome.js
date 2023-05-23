import React, { useEffect, useState } from 'react'

import Aos from 'aos';
import 'aos/dist/aos.css';
import { AnnonceGetAll } from '../../../action/api/annonces/AnnoncesAction';
import AnnonceCard from '../annonce/card/AnnonceCard';
import { useQuery } from 'react-query';
import LoaderComponent from '../../chargement/LoaderComponent';
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';



const JobListHome = () => {
    // data annonces
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
        Aos.init({
            duration: 10000, easing: 'ease-in-out-back', once: true
        });
        AnnonceGetAll(setdataAnnonce);
    }, []);

    // const { data, isLoading, isError } = useQuery(queryCahe.annonces, AnnonceGetAll(setdataAnnonce));

    const responsive = {
        desktop: {
            breakpoint: { max: 3000, min: 1024 },
            items: 3,
            slidesToSlide: 3, // Nombre d'éléments à faire glisser
        },
        tablet: {
            breakpoint: { max: 1024, min: 464 },
            items: 2,
            slidesToSlide: 2, // Nombre d'éléments à faire glisser
        },
        mobile: {
            breakpoint: { max: 464, min: 0 },
            items: 1,
            slidesToSlide: 1, // Nombre d'éléments à faire glisser
        },
    };

    return (
        <div class="job-list-area pb-100">
            <div class="container">
                <div class="section-title" data-aos="fade-right">
                    <h2>Annonces Recentes</h2>
                    <p>
                        Découvrez les offres
                        d{"'"}emploi les plus récentes sur notre plateforme de gestion
                        d{"'"}emplois. Nous avons des opportunités passionnantes dans différents domaines, des postes à temps plein, à temps partiel et des stages. Nous travaillons avec des entreprises de premier plan pour vous aider à trouver votre prochaine opportunité professionnelle. Parcourez
                        nos annonces récentes et postulez dès maintenant pour commencer votre carrière.
                    </p>
                </div>


                {
                    dataAnnonce && dataAnnonce.length > 0 ?
                        (
                            <div  data-aos="fade-up">
                            <Carousel
                                responsive={responsive}
                                infinite={true} // Défilement infini
                                draggable={true} // Possibilité de faire glisser les éléments
                                swipeable={true} // Possibilité de faire glisser avec le doigt sur les appareils tactiles
                                keyBoardControl={true} // Contrôle du carousel avec le clavier
                            >
                                
                                    {
                                        dataAnnonce.slice(start, perPage).map((item) => {
                                            return (
                                                
                                                <AnnonceCard data={item} />
                                                
                                                
                                            )
                                        })
                                    }
                                
                            </Carousel>
                            </div>
                        )
                        : <LoaderComponent />
                }

                {perPage < total && (
                    <div class="browse-jobs-btn" onClick={handleLoadMore}>
                        <a href="job-listing-1.html" class="default-btn">charger plus <i class="flaticon-list-1"></i></a>
                    </div>

                )}
                <div class="browse-jobs-btn">
                    <a href="#" class="default-btn">voir plus d{"'"}annonces <i class="flaticon-list-1"></i></a>
                </div>
            </div>
        </div>
    )
}

export default JobListHome