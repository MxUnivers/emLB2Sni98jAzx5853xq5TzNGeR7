import React from 'react';
import { useNavigate } from 'react-router-dom';
import "./BarnerFormationList.css";


const BarnerFormationList = () => {
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
            <div className="hero-content w-2/3 text-center">
                <h1>Nos Formations</h1>
                <h2 >
                Vous rêvez d’une carrière épanouissante et pleine d’opportunités ? Nos formations sont conçues pour vous propulser vers l{"'"}excellence
                </h2>
                <div className="search-bar">
                    <input type="text" placeholder="Rechercher..." />
                    <button>🔍</button>
                </div>
                <div className="certification">
                    <img src="qualiopi.png" alt="" />
                </div>
            </div>
        </section>
    );
};

export default BarnerFormationList;