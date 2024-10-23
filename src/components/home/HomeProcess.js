import React from 'react';
import './HomeProcess.css';

const HomeProcess = () => {
    const bgImg = "img/application-background.jpg"; // Replace with the actual background image path

    return (
        <section className="slogan-section" style={{ backgroundImage: `url(${bgImg})` }}>
            <div className="container mx-auto text-white">
                <div className="content-wrapper">
                    <div className="text-section">
                        <h2 className="text-4xl font-bold">Comment Postuler en Tant qu{"'"}Étudiant</h2>
                        <ul className="features-list">
                            <li>Inscrivez-vous et connectez-vous à la plateforme</li>
                            <li>Recherchez et trouvez l'emploi idéal pour vous</li>
                            <li>Postulez facilement et suivez vos candidatures</li>
                        </ul>
                    </div>

                    <div className="steps-section">
                        <div className="step-box">
                            <div className="icon-box">1️⃣</div>
                            <h3 className="step-title">Connectez-vous</h3>
                            <p className="step-text">Créez un compte ou connectez-vous pour accéder aux offres adaptées à vos compétences.</p>
                        </div>

                        <div className="step-box">
                            <div className="icon-box">2️⃣</div>
                            <h3 className="step-title">Trouvez votre emploi</h3>
                            <p className="step-text">Accédez à une multitude d'offres d'emploi qui correspondent à votre profil.</p>
                        </div>

                        <div className="step-box">
                            <div className="icon-box">3️⃣</div>
                            <h3 className="step-title">Postulez</h3>
                            <p className="step-text">Postulez en quelques clics et suivez l'état de votre candidature.</p>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default HomeProcess;
