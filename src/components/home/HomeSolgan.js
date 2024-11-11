import React, { useState } from 'react';
import './HomeSolgan.css';

const HomeSlogan = () => {
    const bgImg = "img/fille-africaine-sac-dos-notes.jpg";
    const [isLoading, setIsLoading] = useState(true);

    const handleImageLoad = () => {
        setIsLoading(false);
    };

    return (
        <section className="intervention-section">
            <div className="content">
                <h2 className="main-title">NOS AXES D{"'"}INTERVENTION</h2>
                <p className="subtitle">Une plateforme unique pour l'emploi, les compétences, et les opportunités d'avenir en Afrique</p>

                <div className="vision-objectives">
                    <div className="vision">
                        <h3 className="section-title">Notre vision</h3>
                        <p>
                            Nous visons à transformer le marché de l’emploi en Afrique, en offrant aux recruteurs et aux candidats un lieu de rencontre qui optimise la recherche de talents et facilite le processus de recrutement. Notre plateforme connecte les entreprises avec des candidats qualifiés et motivés, tout en leur fournissant des outils pour améliorer leurs compétences et élargir leurs perspectives.
                        </p>
                        <p>
                            En plus des offres d'emploi, nous proposons un ensemble d'avantages exclusifs : <strong>bourses d{"'"}études</strong> pour renforcer les compétences, des programmes de <strong>formation continue</strong>, et un réseau de mise en relation pour des opportunités de carrière. Grâce à nos services, les candidats peuvent trouver des opportunités de <strong>développement personnel</strong> et les recruteurs peuvent accéder à un vivier de talents diversifiés et qualifiés.
                        </p>
                        <p>
                            Les relations entre candidats et recruteurs n'ont jamais été aussi simples et efficaces, facilitant les collaborations et la croissance professionnelle dans un environnement de plus en plus compétitif. Chaque jour, nous travaillons à offrir des solutions sur mesure pour que chaque talent puisse s'épanouir et que chaque entreprise puisse atteindre ses objectifs.
                        </p>
                       
                    </div>

                    <div className="objectives">
                        <h3 className="section-title">Pourquoi nous rejoindre</h3>
                        <ul>
                            <li>Accès direct à des <strong>candidats qualifiés</strong> et adaptés à vos besoins</li>
                            <li>Opportunités de <strong>développement de compétences</strong> pour les candidats</li>
                            <li>Facilitation de la <strong>recherche de talents</strong> en Afrique</li>
                            <li>Renforcement de la compétitivité et de la productivité de vos équipes</li>
                            <li>Possibilité de contribuer à l’<strong>émergence économique africaine</strong> en soutenant les talents locaux</li>
                        </ul>
                    </div>
                </div>
            </div>
        </section>
    );
}

export default HomeSlogan;
