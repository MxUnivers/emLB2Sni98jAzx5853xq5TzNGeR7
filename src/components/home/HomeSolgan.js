import React, { useState } from 'react';
import './HomeSolgan.css'; // Ensure the CSS file is imported

const HomeSolgan = () => {
    const bgImg = "img/fille-africaine-sac-dos-notes.jpg";

    var typeAccess = localStorage.getItem("TYPEACCESS");

    const [isLoading, setIsLoading] = useState(true); // isLoading is initially true

    const handleImageLoad = () => {
        setIsLoading(false); // Set isLoading to false when the image is loaded
    };

    return (
        <section className="intervention-section">
            <div className="content">
                <h2 className="main-title">NOS AXES D{"'"}INTERVENTIONS</h2>

                <p className="subtitle">
                    Conseil, Formation, Audit, Coaching, Outplacement et Bilan de compétences
                </p>

                <div className="vision-objectives">
                    <div className="vision">
                        <h3 className="section-title">Notre vision</h3>
                        <p>
                            Notre filiale Artus RH a vu le jour en 2014 avec pour objectif d’offrir aux entreprises une véritable <strong>boîte à outils RH</strong>.
                        </p>
                        <p>
                            Allant de la <strong>formation au coaching</strong>, en passant par les <strong>bilans de compétences</strong>, nos équipes pluridisciplinaires vous accompagnent aussi bien pour l’<strong>outplacement</strong> de vos salariés, les diagnostics à 360 degrés, les audits santé sécurité au travail mais aussi juridique, que sur les PSE quand cela est nécessaire.
                        </p>
                        <p>
                            Nous ne cessons d’enrichir notre offre et notre palette de services afin de répondre à vos besoins. Et c’est grâce à vous et vos demandes, parce que chaque jour vous nous challengez, chaque jour nous nous employons à relever vos défis !
                        </p>
                        <p>
                            Notre <strong>culture de l’inclusion</strong> et notre implication dans des actions concrètes telles que: Duo Day, foulées roses et mécène d’un sportif professionnel, le pongiste Esteban HERRAULT, qui souhaite se qualifier pour les jeux 2024 et qui est également notre ambassadeur pour démocratiser le <strong>handicap dans les entreprises</strong>, font parties de nos valeurs de tous les jours. Nous avons à cœur de porter ces projets et les vôtres car cet état d’esprit fait partie de notre ADN.
                        </p>
                        <p>
                            Je suis aujourd’hui très fier de mes équipes, de nos partenaires et fier d’apporter à nos clients et nos candidats un service de qualité et personnalisé.
                        </p>
                        <p className="signature">Dominique Valadon, Directeur d{"'"}Artus RH</p>
                    </div>

                    <div className="objectives">
                        <h3 className="section-title">Nos objectifs</h3>
                        <ul>
                            <li>Développer et sécuriser vos Ressources Humaines</li>
                            <li>Accompagner vos managers</li>
                            <li>Mobiliser et motiver vos équipes</li>
                            <li>Renforcer l’efficacité commerciale et la satisfaction de vos équipes</li>
                        </ul>
                    </div>
                </div>
            </div>
        </section>
    );
}

export default HomeSolgan;
