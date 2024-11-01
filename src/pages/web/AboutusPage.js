import React from 'react'
import AboutStart from '../../components/aboutus/AboutStart';
import AboutBarner from '../../components/aboutus/AboutBarner';

const AboutusPage = () => {
return (
<div className= "mt-[70px] bg-gray-50 min-h-screen text-gray-800">
    {/* Section de présentation */}
    <header className="bg-indigo-600 text-white py-10">
        <div className="max-w-7xl mx-auto px-6 text-center">
            <h1 className="text-4xl font-bold">Bienvenue sur Jouman</h1>
            <p className="mt-4 text-lg text-gray-300">
                La plateforme qui révolutionne l{"'"}avenir des étudiants et jeunes diplômés.
            </p>
        </div>
    </header>

    {/* Section fonctionnalités */}
    <section className="py-16 max-w-7xl mx-auto px-6">
        <h2 className="text-3xl font-semibold mb-8 text-center">Fonctionnalités Principales</h2>

        <div className="grid grid-cols-3 gap-10">
            <FeatureCard title="Connexion avec des Recruteurs Mondiaux"
                description="Créez un profil professionnel visible par des recruteurs de renommée." icon="🌎" />
            <FeatureCard title="Formations et Ateliers Pratiques"
                description="Des cours spécialisés pour répondre aux besoins du marché actuel." icon="🎓" />
            <FeatureCard title="Bourses d'Études Internationales"
                description="Accédez facilement à des bourses pour étudier à l'étranger." icon="📚" />
            <FeatureCard title="Réseautage et Partage d'Expériences"
                description="Rejoignez une communauté d’étudiants et jeunes diplômés." icon="🤝" />
            <FeatureCard title="Mise en Avant des Talents"
                description="Affichez vos compétences et projets pour attirer les recruteurs." icon="🌟" />

                <FeatureCard title="Decouverte du monde de l'entreprise"
                description="Affichez vos compétences et projets pour attirer les recruteurs." icon="🌟" />
        </div>
    </section>

    {/* Section Vidéo de Présentation */}
    <section className="bg-gray-200 py-16">
        <div className="max-w-5xl mx-auto px-6 text-center">
            <h2 className="text-3xl font-semibold mb-6">Vidéo de Présentation</h2>
            <p className="mb-6">Découvrez les fonctionnalités de Jouman en vidéo.</p>
            <div className="relative pt-[56.25%] overflow-hidden">
                <iframe className="absolute top-0 left-0 w-full h-full" src="https://www.youtube.com/embed/dQw4w9WgXcQ"
                    title="Présentation Jouman"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                    allowFullScreen></iframe>
            </div>
        </div>
    </section>

    {/* Section Captures d'Écran */}
    <section className="py-16 max-w-7xl mx-auto px-6">
        <h2 className="text-3xl font-semibold mb-8 text-center">Captures d{"'"}Écran et Images</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            <ScreenshotCard title="Accueil et Interface Profil" src="image1.jpg" />
            <ScreenshotCard title="Page des Formations" src="image2.jpg" />
            <ScreenshotCard title="Interface de Recherche d'Emploi" src="image3.jpg" />
        </div>
    </section>

    {/* Section Pourquoi Rejoindre Jouman */}
    <section className="bg-indigo-100 py-16">
        <div className="max-w-5xl mx-auto px-6">
            <h2 className="text-3xl font-semibold mb-8 text-center text-indigo-800">Pourquoi Rejoindre Jouman ?</h2>
            <ul className="space-y-4">
                <li className="flex items-center space-x-4">
                    <span className="text-indigo-600 text-3xl">✔️</span>
                    <p>Un accès direct aux opportunités mondiales.</p>
                </li>
                <li className="flex items-center space-x-4">
                    <span className="text-indigo-600 text-3xl">✔️</span>
                    <p>Des formations et certifications pour booster vos compétences.</p>
                </li>
                <li className="flex items-center space-x-4">
                    <span className="text-indigo-600 text-3xl">✔️</span>
                    <p>Une expérience utilisateur simple et efficace.</p>
                </li>
                <li className="flex items-center space-x-4">
                    <span className="text-indigo-600 text-3xl">✔️</span>
                    <p>Une communauté engagée et solidaire.</p>
                </li>
            </ul>
        </div>
    </section>

    {/* Section Téléchargement */}
    <section className="py-16 text-center">
        <h2 className="text-3xl font-semibold mb-8">Téléchargez l'Application Jouman Aujourd'hui !</h2>
        <p className="mb-4 text-gray-700">Disponible sur iOS et Android</p>
        <div className="flex justify-center space-x-4">
            <button className="bg-indigo-600 text-white py-2 px-6 rounded-lg hover:bg-indigo-700">App Store</button>
            <button className="bg-indigo-600 text-white py-2 px-6 rounded-lg hover:bg-indigo-700">Google Play</button>
        </div>
    </section>
</div>
);
};

// Composant FeatureCard
const FeatureCard = ({ title, description, icon }) => (
<div className="bg-white p-6 shadow-lg rounded-lg">
    <div className="text-3xl">{icon}</div>
    <h3 className="text-xl font-semibold mt-4">{title}</h3>
    <p className="mt-2 text-gray-600">{description}</p>
</div>
);

// Composant ScreenshotCard
const ScreenshotCard = ({ title, src }) => (
<div className="bg-white shadow-lg rounded-lg overflow-hidden">
    <img src={src} alt={title} className="w-full h-48 object-cover" />
    <div className="p-4">
        <h4 className="text-lg font-semibold">{title}</h4>
    </div>
</div>
);

export default AboutusPage;