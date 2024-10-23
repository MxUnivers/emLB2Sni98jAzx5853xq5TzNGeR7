import React from 'react';
import './Testimonials.css';

const testimonials = [
    {
        quote: "Grâce à Jouman, j'ai pu obtenir une bourse d'études complète pour poursuivre mes études à l'étranger. Je recommande vivement cette plateforme à tous les étudiants.",
        name: "Awa Kone",
        image: "https://img.freepik.com/photos-gratuite/etudiant-diplome-smiley-coup-moyen_23-2148950576.jpg?t=st=1729723823~exp=1729727423~hmac=8f3db1c0c0f2ea090a5162cd01dcfb9d5d9479b990c4dda2673b22e854f6820b&w=1060",
        benefit: "Bourses d'études"
    },
    {
        quote: "Les offres d'emplois sur Jouman sont actualisées régulièrement, et j'ai trouvé mon premier emploi grâce à eux. Très fiable et facile d'utilisation.",
        name: "Jean Kouadio",
        image: "https://img.freepik.com/photos-gratuite/portrait-hotesse-air-billets-avion-passeport_23-2150282905.jpg?t=st=1729723784~exp=1729727384~hmac=29586e9a02fd3b1033c7526feed383f3aeaf7fcbcdbcb61c59d718075729b7ee&w=360",
        benefit: "Offres d'emplois"
    },
    {
        quote: "Les formations proposées par Jouman m'ont aidé à améliorer mes compétences et à décrocher une promotion. Les cours sont très pertinents.",
        name: "Fatou Diabate",
        image: "https://img.freepik.com/photos-gratuite/homme-affaires-presentant-son-projet-collegues_23-2149286108.jpg?t=st=1729723872~exp=1729727472~hmac=e9a508a961936ef3bc48a39368d4f760e30eaf9c017049a103cdf4435737d82a&w=996",
        benefit: "Formations"
    },
    {
        quote: "Jouman a non seulement facilité ma recherche de bourse, mais m'a aussi fourni une assistance tout au long de mon processus d'inscription. Je me sens soutenue.",
        name: "Mohamed Traore",
        image: "https://img.freepik.com/photos-gratuite/groupe-etude-du-peuple-africain_23-2149156402.jpg?t=st=1729723915~exp=1729727515~hmac=086309e3d347d79f5468566b188892e60736c06dbe100bce37bdd35c45263494&w=996",
        benefit: "Bourses d'études & Assistance"
    },
];

const Testimonials = () => {
    return (
        <section className="testimonials-section">
            <h2 className="section-title">Témoignages</h2>
            <h3 className="section-subtitle">Ce qu{"'"}ils en pensent</h3>
            <div className="testimonial-slider">
                {testimonials.map((testimonial, index) => (
                    <div key={index} className="testimonial-card">
                        <p className="testimonial-quote">"{testimonial.quote}"</p>
                        <div className="testimonial-info">
                            <img src={testimonial.image} alt={testimonial.name} className="testimonial-image" />
                            <div>
                                <p className="testimonial-name">{testimonial.name}</p>
                                <p className="testimonial-benefit">{testimonial.benefit}</p>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </section>
    );
};

export default Testimonials;
