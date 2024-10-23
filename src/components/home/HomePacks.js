import React from 'react';
import './HomePacks.css';
import { Button } from 'react-bootstrap';

const HomePacks = () => {
    const videoBg = "assets/packssubscibe.mp4"; // Replace with the actual path to your video

    return (
        <section className="slogan-section">
            <video autoPlay muted loop className="video-background">
                <source src={videoBg} type="video/mp4" />
                Your browser does not support the video tag.
            </video>
            <div className="overlay"></div>
            <div className="container mx-auto text-white">
                <div className="content-wrapper">
                    {/* Text and Subscription Packs Section */}
                    <div className="text-section">
                        <h2 className="text-4xl font-bold">Découvrez Nos Packs d{"'"}Abonnement</h2>
                        <ul className="features-list">
                            <li>Accès aux bourses d{"'"}études internationales</li>
                            <li>Alertes d'offres d'emploi personnalisées</li>
                            <li>Accès illimité aux formations</li>
                            <li>Assistance complète pendant votre parcours</li>
                        </ul>
                        <Button size="md" variant="primary">Souscrire Maintenant</Button>
                    </div>

                    {/* Subscription Pack Options */}
                    <div className="packs-section">
                        <div className="pack-box">
                            <h3 className="pack-title">Pack Basique</h3>
                            <p className="pack-details">Accès aux bourses et offres d{"'"}emploi</p>
                            <Button variant="outline-light">Voir Détails</Button>
                        </div>
                        <div className="pack-box">
                            <h3 className="pack-title">Pack Premium</h3>
                            <p className="pack-details">Accès complet aux formations et bourses</p>
                            <Button variant="outline-light">Voir Détails</Button>
                        </div>
                        <div className="pack-box">
                            <h3 className="pack-title">Pack Pro</h3>
                            <p className="pack-details">Assistance personnalisée et offres d'emploi ciblées</p>
                            <Button variant="outline-light">Voir Détails</Button>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default HomePacks;
