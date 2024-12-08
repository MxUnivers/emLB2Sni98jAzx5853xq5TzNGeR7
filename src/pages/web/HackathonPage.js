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
import { LineChart, Line as AsLine, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';
import { getAndCheckLocalStorage } from "../../utlis/storage/localvalueFunction";
import { localvalue, localvalueStorage } from "../../utlis/storage/localvalue";
import { useNavigate } from "react-router-dom";
import { routing } from "../../utlis/routing";
import { useEffect } from "react";
import { getDataFromFile } from "../../action/storage/DataLocal";
import { fetchAllHackathons } from "../../action/api/hackathons/HackathonAction";
import moment from "moment";

const HackathonPage = () => {
  const navigate = useNavigate();


  const [hackatonsCompetitions, sethackatonsCompetitions] = useState([

  ]);


  useEffect(() => {
    // Fetch all hackathons
    const hackatonsCompetitionsList = getDataFromFile(localvalueStorage.HACKATHONLIST) || [];
    sethackatonsCompetitions(hackatonsCompetitionsList);

    fetchAllHackathons(sethackatonsCompetitions)

  }, []);




  const handleConnected = () => {
    if (!getAndCheckLocalStorage(localvalue.TYPEACCESS)) {
      navigate(`/${routing.connexion}`);
    }
  };





  const data = [
    { date: 'Jan 2024', amount: 0 },
    { date: 'Avr 2024', amount: 1000000000 },
    { date: 'Jul 2024', amount: 2000000000 },
    { date: 'Oct 2024', amount: 3000000000 },
    { date: 'Jan 2025', amount: 3500000000 },
    { date: 'Avr 2025', amount: 6000000000 },
  ];



  const hackathonThemes = [
    "Intelligence Artificielle",
    "Fintech Innovation",
    "Santé Digitale",
    "Agriculture Connectée",
    "Éducation Numérique"
  ];

  return (
    <div className="bg-gradient-to-l from-indigo-700 via-indigo-800 to-black py-16 pt-20">

      {/* Conteneur Principal */}
      <div className="max-w-full mx-10 px-6 sm:px-12 lg:px-24 mt-20">


        <div className="bg-gradient-to-r from-blue-600 to-purple-600 text-white py-12 rounded-2xl mb-11 shadow-2xl mb-20">
          <div className="container mx-auto px-4">
            <div className="flex flex-wrap md:flex-row items-center justify-between">
              <div className="md:w-1/2 mb-8 md:mb-0">
                <h1 className="text-4xl font-bold mb-4">
                  Le Plus Grand Écosystème de Hackathons en Afrique
                </h1>
                <p className="text-2xl mb-6 text-white">
                  Accélérer l{"'"}adoption du numérique par des challenges pour la jeunesse africaine
                </p>
                <p className="text-lg mb-6 text-white">
                  Objectif 2024-2025 : Mobiliser 6 milliards de FCFA pour incuber les lauréats
                </p>
                <button
                  onClick={handleConnected}
                  className="bg-white text-blue-600 font-semibold py-3 px-8 rounded-full hover:bg-gray-100 transition duration-300 transform hover:scale-105"
                >
                  Inscrivez-vous au Hackathon
                </button>
              </div>
              <div className="md:w-1/3">
                <img
                  src="hakacthonbg.jpg"
                  alt="Hackathon Africain"
                  className="w-full rounded-lg shadow-lg"
                />
              </div>
            </div>
          </div>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          <div className="bg-white rounded-xl p-6 shadow-lg">
            <h2 className="text-2xl font-bold text-center mb-4 text-indigo-800">
              Thèmes des Hackathons 2024-2025
            </h2>
            <ul className="space-y-3">
              {hackathonThemes.map((theme, index) => (
                <li
                  key={index}
                  className="bg-indigo-50 p-3 rounded-lg text-center text-indigo-800 font-semibold hover:bg-indigo-100 transition"
                >
                  {theme}
                </li>
              ))}
            </ul>
          </div>

          <div className="bg-white rounded-xl p-6 shadow-lg">
            <h2 className="text-2xl font-bold text-center mb-4 text-indigo-800">
              Projection de Financement 6 milliards 2024-2025
            </h2>
            <ResponsiveContainer width="100%" height={300}>
              <LineChart data={data}>
                <CartesianGrid strokeDasharray="3 3" />
                <XAxis dataKey="date" />
                <YAxis
                  tickFormatter={(value) => `${value / 1000000000} Mrd`}
                  domain={[0, 6000000000]}
                />
                <Tooltip
                  formatter={(value) => `${(value / 1000000000).toFixed(2)} Milliards FCFA`}
                />
                <Legend />
                <AsLine
                  type="monotone"
                  dataKey="amount"
                  stroke="#8884d8"
                  activeDot={{ r: 8 }}
                  name="Financement prévu"
                />
              </LineChart>
            </ResponsiveContainer>
          </div>
        </div>





        {/* En-tête */}
        <div className="text-center mb-16 mt-20">
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
        <section className="py-16 bg-slate-950">
          <div className="container mx-0 px-6">
            <h2 className="text-4xl font-extrabold text-white mb-12 text-center">
              Nos Prochains Hackathons 🚀
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 flex-wrap justify-center ">
              {/* Génération dynamique des Hackathons */}
              {hackatonsCompetitions.map((hackathon, index) => (
                <div
                  onClick={() => { navigate(`/${routing.hackatonup_detail}/${hackathon._id}`) }}
                  className={`bg-gradient-to-br cursor-pointer ${hackathon.gradient} p-6 rounded-lg shadow-lg`}
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
                    <li><span className="font-bold">Début :</span> {moment(hackathon.starDate).format("DD-MM-YYYY à HH:MM")}</li>
                    <li><span className="font-bold">Fin :</span> {moment(hackathon.endDate).format("DD-MM-YYYY à HH:MM")}</li>
                    <li><span className="font-bold">Lieu :</span> {hackathon.address}</li>
                    <li class="text-2xl"><span className="font-bold">Récompense : </span> {hackathon.prize} F</li>
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
              href={`/${routing.hackatonupsall_upcoming_hackathons}`}
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
          <div className=" w-full lg:w-2/3">
            <ReactPlayer
              url={"Les_hackathons.mp4"}
              width="100%"
              height="400px"
              controls
              className="rounded-lg shadow-lg"
            />
            {/*
            <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent opacity-60 rounded-lg"></div>

*/}          </div>

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
              {/*<img
                src="https://via.placeholder.com/150"
                alt="Portrait de Sarah"
                className="w-16 h-16 rounded-full mb-4 mx-auto"
              /> */}
              <p className="italic text-lg">
                “Participer à ce hackathon a changé ma carrière. Mon projet, *EcoStart*, a été financé par un investisseur rencontré ici !”
              </p>
              <p className="mt-6 font-bold text-xl text-right">- Sarah, Développeuse</p>
            </div>

            {/* Témoignage 2 */}
            <div className="bg-gradient-to-r from-indigo-500 to-blue-600 p-8 rounded-xl shadow-lg text-white">
              {/*<img
                src="https://via.placeholder.com/150"
                alt="Portrait de Daniel"
                className="w-16 h-16 rounded-full mb-4 mx-auto"
              /> */}
              <p className="italic text-lg">
                “Un événement incroyable ! Grâce à Jouman, j'ai transformé une idée en une startup viable et j'ai formé une équipe solide.”
              </p>
              <p className="mt-6 font-bold text-xl text-right">- Daniel, Entrepreneur</p>
            </div>

            {/* Témoignage 3 */}
            <div className="bg-gradient-to-r from-indigo-500 to-green-600 p-8 rounded-xl shadow-lg text-white">
              {/*<img
                src="https://via.placeholder.com/150"
                alt="Portrait de Claire"
                className="w-16 h-16 rounded-full mb-4 mx-auto"
              /> */}
              <p className="italic text-lg">
                “Les ressources et les mentors étaient exceptionnels ! J{"'"}ai conçu une solution UX primée et appris des techniques inestimables.”
              </p>
              <p className="mt-6 font-bold text-xl text-right">- Claire, Designer</p>
            </div>

            {/* Témoignage 4 */}
            <div className="bg-gradient-to-r from-indigo-500 to-teal-600 p-8 rounded-xl shadow-lg text-white">
              {
                /*<img
                src="https://via.placeholder.com/150"
                alt="Portrait d'Ahmed"
                className="w-16 h-16 rounded-full mb-4 mx-auto"
              /> */
              }
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
