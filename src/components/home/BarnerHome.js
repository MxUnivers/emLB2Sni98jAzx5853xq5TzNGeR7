import React from 'react'
import Carousel from 'react-multi-carousel';
import "react-multi-carousel/lib/styles.css";
import { optionPays } from '../../utlis/options/optionDivers';
import { useNavigate } from 'react-router-dom';
import { routing } from '../../utlis/routing';
import './BarnerHome.css';


const BarnerHome = () => {

    const navigate = useNavigate();

    const bgImg1 = "img/gens-plan-moyen-obtenant-leur-diplome.jpg"
    const ImagList = [
        {
            titme: "",
            description: "",
            img: "img/gens-plan-moyen-obtenant-leur-diplome.jpg"
        },
        {
            titme: "",
            description: "",
            img: "img/portrait-etudiant-masculin-livres.jpg"
        },
        {
            titme: "",
            description: "",
            img: "img/groupe-afro-americains-travaillant-ensemble.jpg"
        }
    ]

    const responsive = {
        superLargeDesktop: {
            // the naming can be any, depends on you.
            breakpoint: { max: 4000, min: 3000 },
            items: 1
        },
        desktop: {
            breakpoint: { max: 3000, min: 1024 },
            items: 1
        },
        tablet: {
            breakpoint: { max: 1024, min: 464 },
            items: 1
        },
        mobile: {
            breakpoint: { max: 464, min: 0 },
            items: 1
        }
    };


    return (

        <section className="hero">
            <video className="background-video" autoPlay loop muted>
                <source src="jouman_presentation.mp4" type="video/mp4"  />
                Your browser does not support the video tag.
            </video>
            <div className="overlay"></div> {/* Overlay effect */}
            <div className="hero-content">
                <h1>Jouman</h1>
                <h2>Premier site africain de mécénat de compétences.
                    Recherche</h2>
                <div className="search-bar">
                    <div><button type="button" onClick={() => { }} className="px-2 px-3 rounded-3xl bg-indigo-600 hover:bg-indigo-700 active:bg-indigo-800">Commencer</button>
                    </div>
                </div>
                <div className="certification">
                    <img src="qualiopi.png" alt="" />
                </div>
            </div>
        </section>

    )
}

export default BarnerHome