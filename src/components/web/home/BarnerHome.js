import React from 'react';
import AliceCarousel from 'react-alice-carousel';
import 'react-alice-carousel/lib/alice-carousel.css';
import { AiFillCaretLeft, AiFillCaretRight } from "react-icons/ai";

const BarnerHome = () => {
    const handleOnSlideChange = (e) => {
        console.log('Slide changed', e.slide);
    };

    const settings = {
        dots: true, // Afficher les points indicateurs
        infinite: true, // Défilement infini
        speed: 500, // Vitesse de transition en millisecondes
        slidesToShow: 3, // Nombre d'éléments à afficher simultanément
        slidesToScroll: 1, // Nombre d'éléments à faire défiler à la fois
    };

    const carousel_bg = [
        {
            titre: "VOUS AVEZ DU TALENT ? RENCONTREZ L'OPPORTUNITÉ",
            sous_titre: "n'attender plus inscrivez vous",
            image: "https://images.pexels.com/photos/6146978/pexels-photo-6146978.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
        },
        {
            titre: "VOUS AVEZ DU TALENT ? RENCONTREZ L'OPPORTUNITÉ",
            sous_titre: "n'attender plus inscrivez vous",
            image: "https://images.pexels.com/photos/3184163/pexels-photo-3184163.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
        },
        {
            titre: "Cette plaforme est fait pour vous",
            sous_titre: "n'attender plus inscrivez vous",
            image: "https://images.pexels.com/photos/5648085/pexels-photo-5648085.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
        }
    ]
    // var  bgImg = "home.jpg";
    var bgImg = "https://images.pexels.com/photos/4559515/pexels-photo-4559515.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2";
    return (
        <AliceCarousel
            onSlideChange={handleOnSlideChange} autoPlay autoPlayInterval={3000} activeIndex={1}
            otsClass="custom-dots" // Classe CSS personnalisée pour les indicateurs
            buttonsDisabled={false}
            prevButton={
                <button
                    className="bg-gray-300 rounded-full p-2 hover:bg-gray-400 focus:outline-none"

                >
                    <AiFillCaretLeft />
                </button>
            } // Composant personnalisé pour la flèche précédente
            nextButton={
                <button
                    className="bg-gray-300 rounded-full p-2 hover:bg-gray-400 focus:outline-none"

                >
                    <AiFillCaretRight />
                </button>
            } // Composant personnalisé pour la flèche suivante
            prevButtonClassName="custom-prev-" // Classe CSS pour styliser la flèche précédente
            nextButtonClassName="custom-next-button" // Classe CSS pour styliser la flèche suivante

        >

            {
                carousel_bg.map((item) => {
                    return (
                        <div class="page-banner-area item-bg-four" style={{ backgroundImage: `url('${item.image}')` }}>
                            <div class="d-table">
                                <div class="d-table-cell">
                                    <div class="container">
                                        <div class="page-banner-content">
                                            <h2>{item.titre}</h2>
                                            <p class="text-gray-100 text-2xl">{item.sous_titre}</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    )
                })
            }
        </AliceCarousel>
    )
}



export default BarnerHome;