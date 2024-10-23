import React from 'react';
import './HomeBourses.css';
import { Button } from 'react-bootstrap';

const HomeBourses = () => {
    const bgImg = "img/scholarship-background.jpg"; // Use your own background image path

    return (
        <section className="slogan-section" style={{ backgroundImage: `url(${bgImg})` }}>
            <div className="container mx-auto text-white">
                <div className="content-wrapper">
                    <div className="text-section">
                        <h2 className="text-4xl font-bold">Plateforme de Bourses d'Études à l'Étranger</h2>
                        <ul className="features-list">
                            <li>Opportunités pour les étudiants internationaux</li>
                            <li>Bourses complètes et partielles</li>
                            <li>Programmes dans plus de 20 pays</li>
                            <li>Support et accompagnement tout au long du processus</li>
                        </ul>

                        <Button size="md" variant='primary'>Soumettre</Button>
                    </div>

                    <div className="stats-section">
                        {/* Stat 1 */}
                        <div className="stat-box">
                            <div className="icon-box">🎓</div>
                            <h3 className="stat-number">93%</h3>
                            <p className="stat-text">Taux de satisfaction des étudiants boursiers</p>
                        </div>

                        {/* Stat 2 */}
                        <div className="stat-box">
                            <div className="icon-box">🌍</div>
                            <h3 className="stat-number">1200+</h3>
                            <p className="stat-text">Bourses attribuées en 2023</p>
                        </div>

                        {/* Stat 3 */}
                        <div className="stat-box">
                            <div className="icon-box">✅</div>
                            <h3 className="stat-number">214</h3>
                            <p className="stat-text">Étudiants placés à l{"'"}étranger</p>
                        </div>

                        {/* Stat 4 */}
                        <div className="stat-box">
                            <div className="icon-box">🎓</div>
                            <h3 className="stat-number">85%</h3>
                            <p className="stat-text">Taux de réussite des candidatures</p>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default HomeBourses;
