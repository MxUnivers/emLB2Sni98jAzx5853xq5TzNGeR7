import React, { useState } from "react";
import ReactPlayer from "react-player";

import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";

import {
  FaUsers,
  FaLightbulb,
  FaHandshake,
  FaRocket,
  FaChartLine,
  FaTrophy,
  FaCode,
} from "react-icons/fa";
import { Chart as ChartJS, LineElement, CategoryScale, LinearScale, PointElement } from "chart.js";
import { Line } from "react-chartjs-2";
import { getAndCheckLocalStorage } from "../../utlis/storage/localvalueFunction";
import { localvalue } from "../../utlis/storage/localvalue";
import { useNavigate } from "react-router-dom";
import { routing } from "../../utlis/routing";

const HackathonPage = () => {
  const navigate = useNavigate();

  const [hackatonsCompetitions, sethackatonsCompetitions] = useState([
    {
      name: "Hackathon AI Revolution",
      date: "15 - 17 décembre 2024",
      location: "Paris, France",
      prize: "20 000 €",
      description: "Développez des solutions basées sur l'IA pour transformer le secteur des entreprises.",
      link: "/hackathon-ai-revolution",
      gradient: "from-indigo-600 to-purple-700",
      image: "https://via.placeholder.com/600x300?text=AI+Revolution"
    },
    {
      name: "Hackathon Climate Innovators",
      date: "22 - 24 janvier 2025",
      location: "En ligne",
      prize: "30 000 €",
      description: "Relevez les défis environnementaux avec des idées technologiques innovantes.",
      link: "/hackathon-climate-innovators",
      gradient: "from-blue-600 to-green-700",
      image: "https://via.placeholder.com/600x300?text=Climate+Innovators"
    },
    {
      name: "Hackathon HealthTech",
      date: "12 - 14 février 2025",
      location: "Lyon, France",
      prize: "15 000 €",
      description: "Imaginez les solutions digitales pour améliorer le secteur de la santé.",
      link: "/hackathon-healthtech",
      gradient: "from-red-600 to-yellow-700",
      image: "https://via.placeholder.com/600x300?text=HealthTech"
    }
  ]);
  



  const handleConnected = () => {
    if (!getAndCheckLocalStorage(localvalue.TYPEACCESS)) {
      navigate(`/${routing.connexion_recuteur}`);
    }
  };

  return (
    <div className="bg-gradient-to-l from-indigo-700 via-indigo-800 to-black py-16 pt-20">




      {/* Conteneur Principal */}
      <div className="max-w-full mx-10 px-6 sm:px-12 lg:px-24 mt-20">
        {/* En-tête */}
        <div className="text-center mb-16">
          <h1 className="text-5xl font-extrabold text-white mb-6">
            Rejoignez Nos Hackathons 🚀
          </h1>
          <p className="text-lg text-gray-200 leading-relaxed">
            Nos Hackathons sont bien plus que des compétitions : ce sont des occasions uniques de
            collaboration, d'innovation et d'apprentissage. Que vous soyez étudiant, développeur,
            designer ou entrepreneur, vous pouvez partager vos idées, créer des solutions
            concrètes et impressionner les investisseurs.
          </p>
          <p className="text-lg text-gray-200 mt-4 leading-relaxed">
            Chaque Hackathon est conçu pour maximiser votre potentiel grâce à des outils,
            mentors et ressources de pointe. En participant, vous aurez l{"'"}opportunité
            de construire un réseau professionnel solide et d’accélérer vos projets.
          </p>
        </div>


        {/* Compétitions à venir */}
        <section className="py-16 bg-gray-900">
          <div className="container mx-auto px-6">
            <h2 className="text-4xl font-extrabold text-white mb-12 text-center">
              Nos Prochains Hackathons 🚀
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {/* Génération dynamique des Hackathons */}
              {hackatonsCompetitions.map((hackathon, index) => (
                <div
                  key={index}
                  className={`bg-gradient-to-br ${hackathon.gradient} p-6 rounded-lg shadow-lg`}
                >
                  <h3 className="text-2xl font-bold text-white mb-2">{hackathon.name}</h3>
                  {/* Image du Hackathon */}
                  <img
                    src={hackathon.image}
                    alt={hackathon.name}
                    className="w-full h-48 object-cover rounded-lg mb-4"
                  />
                  <p className="text-gray-200 mb-4">{hackathon.description}</p>
                  <ul className="list-disc list-inside text-gray-300 space-y-1">
                    <li><span className="font-bold">Date :</span> {hackathon.date}</li>
                    <li><span className="font-bold">Lieu :</span> {hackathon.location}</li>
                    <li><span className="font-bold">Prix total :</span> {hackathon.prize}</li>
                  </ul>
                  <div className="mt-4 text-center">
                    <a
                      href={hackathon.link}
                      className="px-4 py-2 bg-gray-800 text-white rounded shadow hover:bg-gray-900 transition"
                    >
                      Plus d{"'"}infos
                    </a>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Bouton de participation générale */}
          <div className="mt-12 text-center">
            <a
              href="/all-upcoming-hackathons"
              className="px-6 py-3 bg-indigo-600 text-white rounded-lg text-lg font-bold shadow-md hover:bg-indigo-700 transition">
              Voir toutes les compétitions
            </a>
          </div>
        </section>





        {/* Avantages et Statistiques */}
        <div className="grid grid-cols-3 sm:grid-cols-3 md:grid-cols-3 gap-8 mb-16 mt-5">
          {/* Statistiques Dynamiques */}
          <div className="text-center bg-gradient-to-br from-indigo-500 to-indigo-700 p-8 rounded-lg shadow-lg hover:scale-105 transform transition duration-300">
            <h3 className="text-5xl font-bold text-white">500+</h3>
            <p className="mt-4 text-gray-100 font-medium">
              Participants engagés lors de nos Hackathons en 2024
            </p>
          </div>
          <div className="text-center bg-gradient-to-br from-indigo-500 to-indigo-600 p-8 rounded-lg shadow-lg hover:scale-105 transform transition duration-300">
            <h3 className="text-5xl font-bold text-white">50+</h3>
            <p className="mt-4 text-gray-100 font-medium">
              Projets transformés en produits ou startups innovantes
            </p>
          </div>
          <div className="text-center bg-gradient-to-br from-indigo-400 to-indigo-600 p-8 rounded-lg shadow-lg hover:scale-105 transform transition duration-300">
            <h3 className="text-5xl font-bold text-white">25</h3>
            <p className="mt-4 text-gray-100 font-medium">
              Équipes récompensées pour leurs idées révolutionnaires
            </p>
          </div>
        </div>

        {/* Appel à l'Action */}
        <div className="text-center mt-12 mb-12">
          <button
            className="bg-indigo-400 text-white font-semibold py-3 px-6 rounded-lg shadow-md hover:bg-indigo-500 hover:shadow-lg transition duration-300">
            Inscrivez-vous dès maintenant
          </button>
        </div>









        {/* Vidéo de Présentation */}
        <div className="flex flex-col lg:flex-row items-center gap-12 mb-16">
          {/* Vidéo */}
          <div className="relative w-full lg:w-2/3">
            <ReactPlayer
              url="https://www.youtube.com/embed/dQw4w9WgXcQ"
              width="100%"
              height="400px"
              controls
              className="rounded-lg shadow-lg"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent opacity-60 rounded-lg"></div>
          </div>

          {/* Texte Explicatif */}
          <div className="text-white text-center lg:text-left w-full lg:w-1/3">
            <h2 className="text-3xl font-bold mb-6">Pourquoi Participer ?</h2>
            <ul className="list-disc list-inside space-y-4 text-lg leading-relaxed">
              <li>
                <strong>Réseau Étendu :</strong> Connectez-vous avec des mentors tels que
                <em>John Doe</em>, créateur d'une application téléchargée 1M+ fois, et d'autres experts industriels.
              </li>
              <li>
                <strong>Collaborations Uniques :</strong> Travaillez avec des talents diversifiés,
                comme des développeurs, designers, et entrepreneurs ayant réussi des projets similaires.
              </li>
              <li>
                <strong>Projets Réussis :</strong> Inspirez-vous de projets comme
                <em>EcoSmart</em>, une startup primée développée lors de notre dernier Hackathon.
              </li>
              <li>
                <strong>Prix et Opportunités :</strong> Remportez des financements jusqu’à <em>50 000 F CFA</em>
                ou un accès exclusif à notre réseau d’investisseurs.
              </li>
            </ul>
          </div>
        </div>







        {/* Témoignages */}
        <section className="py-16 bg-gradient-to-b from-gray-900 to-black">
          <h2 className="text-4xl font-extrabold text-white mb-12 text-center">
            Ce que disent nos participants 🌟
          </h2>
          <Carousel
            additionalTransfrom={0}
            arrows
            autoPlay
            autoPlaySpeed={5000}
            centerMode={false}
            className=""
            containerClass="carousel-container"
            dotListClass="dots"
            draggable
            focusOnSelect={false}
            infinite
            itemClass="p-10"
            keyBoardControl
            minimumTouchDrag={80}
            pauseOnHover
            renderButtonGroupOutside={false}
            renderDotsOutside
            responsive={{
              superLargeDesktop: {
                breakpoint: { max: 4000, min: 1024 },
                items: 3,
              },
              desktop: {
                breakpoint: { max: 1024, min: 768 },
                items: 2,
              },
              tablet: {
                breakpoint: { max: 768, min: 464 },
                items: 1,
              },
              mobile: {
                breakpoint: { max: 464, min: 0 },
                items: 1,
              },
            }}
            showDots
            sliderClass="pb-10"
            slidesToSlide={1}
            swipeable
          >
            {/* Témoignage 1 */}
            <div className="bg-gradient-to-r from-indigo-500 to-purple-600 p-8 rounded-xl shadow-lg text-white">
              <img
                src="https://via.placeholder.com/150"
                alt="Portrait de Sarah"
                className="w-16 h-16 rounded-full mb-4 mx-auto"
              />
              <p className="italic text-lg">
                “Participer à ce hackathon a changé ma carrière. Mon projet, *EcoStart*, a été financé par un investisseur rencontré ici !”
              </p>
              <p className="mt-6 font-bold text-xl text-right">- Sarah, Développeuse</p>
            </div>

            {/* Témoignage 2 */}
            <div className="bg-gradient-to-r from-indigo-500 to-blue-600 p-8 rounded-xl shadow-lg text-white">
              <img
                src="https://via.placeholder.com/150"
                alt="Portrait de Daniel"
                className="w-16 h-16 rounded-full mb-4 mx-auto"
              />
              <p className="italic text-lg">
                “Un événement incroyable ! Grâce à Jouman, j'ai transformé une idée en une startup viable et j'ai formé une équipe solide.”
              </p>
              <p className="mt-6 font-bold text-xl text-right">- Daniel, Entrepreneur</p>
            </div>

            {/* Témoignage 3 */}
            <div className="bg-gradient-to-r from-indigo-500 to-green-600 p-8 rounded-xl shadow-lg text-white">
              <img
                src="https://via.placeholder.com/150"
                alt="Portrait de Claire"
                className="w-16 h-16 rounded-full mb-4 mx-auto"
              />
              <p className="italic text-lg">
                “Les ressources et les mentors étaient exceptionnels ! J{"'"}ai conçu une solution UX primée et appris des techniques inestimables.”
              </p>
              <p className="mt-6 font-bold text-xl text-right">- Claire, Designer</p>
            </div>

            {/* Témoignage 4 */}
            <div className="bg-gradient-to-r from-indigo-500 to-teal-600 p-8 rounded-xl shadow-lg text-white">
              <img
                src="https://via.placeholder.com/150"
                alt="Portrait d'Ahmed"
                className="w-16 h-16 rounded-full mb-4 mx-auto"
              />
              <p className="italic text-lg">
                “Grâce au hackathon, mon équipe et moi avons remporté le prix *Best Tech Solution* et attiré des sponsors pour notre projet.”
              </p>
              <p className="mt-6 font-bold text-xl text-right">- Ahmed, Ingénieur logiciel</p>
            </div>
          </Carousel>
        </section>










      </div>
    </div>
  );
};

export default HackathonPage;
