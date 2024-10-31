import React from 'react'
import { routing } from '../../utlis/routing'
import "./BarnerCoachingAndFormation.css"
import { useNavigate } from 'react-router-dom'

const BarnerCoachingAndFormation = () => {
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

    const navigate = useNavigate();
    


    return (

        <section className="hero">
            <video className="background-video" autoPlay loop muted>
                <source src="assets/presenation.mp4" type="video/mp4" />
                Your browser does not support the video tag.
            </video>
            <div className="overlay"></div> {/* Overlay effect */}
            <div className="hero-content">
                <h1>Jouman</h1>
                <h2>Premier site africain de mécénat de compétences.
                Recherche</h2>
                <div className="search-bar">
                    <input type="text" placeholder="Rechercher..." />
                    <button>🔍</button>
                </div>
                <div className="certification">
                    <img src="qualiopi.png" alt="" />
                </div>
            </div>
        </section>

    )
}

export default BarnerCoachingAndFormation
