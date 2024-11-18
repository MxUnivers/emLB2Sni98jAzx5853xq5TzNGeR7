import React from "react";
import ReactPlayer from "react-player";

import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";

import { FaUsers, FaLightbulb, FaHandshake, FaRocket , FaChartLine, FaSeedling, FaRegLightbulb  } from "react-icons/fa";
import { Chart as ChartJS, LineElement, CategoryScale, LinearScale, PointElement } from "chart.js";
import { Line } from "react-chartjs-2";
import { getAndCheckLocalStorage } from "../../utlis/storage/localvalueFunction";
import { localvalue } from "../../utlis/storage/localvalue";
import { useNavigate } from "react-router-dom";
import { routing } from "../../utlis/routing";

const StartupSuccessPage = () => {
  const navigate =  useNavigate();
  const handleConnected =  ()=>{
    if(!getAndCheckLocalStorage(localvalue.TYPEACCESS) ){
      navigate(`/${routing.connexion_recuteur}`)
    }
  }
  return (
    <div className="bg-gradient-to-l from-indigo-700 via-indigo-800 to-black py-16 pt-20">
      {/* Conteneur Principal */}
      <div className="max-w-7xl mx-auto px-6 sm:px-12 lg:px-24 mt-20">
        {/* En-tête */}
        <div className="text-center mb-16">
          <h1 className="text-5xl font-extrabold text-white mb-4">
            Startups et Réussites avec Jouman 🚀
          </h1>
          <p className="text-lg text-gray-200">
            Découvrez comment Jouman aide les startups à propulser leurs idées, connecter des talents et révolutionner les marchés.
          </p>
        </div>

        {/* Avantages et Statistiques */}
        <div className="grid grid-cols-3 sm:grid-cols-2 md:grid-cols-3 gap-8 mb-16">
          {/* Carte Statistique */}
          <div className="text-center bg-gradient-to-br from-indigo-500 to-indigo-700 p-6 rounded-lg shadow-lg hover:scale-105 transform transition duration-300">
            <h3 className="text-4xl font-bold text-white">200+</h3>
            <p className="mt-2 text-gray-100">Startups ayant rejoint Jouman</p>
          </div>
          <div className="text-center bg-gradient-to-br from-blue-500 to-indigo-600 p-6 rounded-lg shadow-lg hover:scale-105 transform transition duration-300">
            <h3 className="text-4xl font-bold text-white">150+</h3>
            <p className="mt-2 text-gray-100">Projets transformés en succès</p>
          </div>
          <div className="text-center bg-gradient-to-br from-indigo-400 to-indigo-600 p-6 rounded-lg shadow-lg hover:scale-105 transform transition duration-300">
            <h3 className="text-4xl font-bold text-white">95%</h3>
            <p className="mt-2 text-gray-100">Taux de satisfaction des startups</p>
          </div>
        </div>

        {/* Vidéo de Présentation */}
        <div className="flex flex-col lg:flex-row items-center gap-12 mb-16">
          {/* Vidéo */}
          <div className="w-full lg:w-1/2">
            <ReactPlayer
              url={"https://www.youtube.com/watch?v=ZIJiGOW-KZg&pp=ygUMbGVzIHN0YXJ0dXBz"}
              width="100%"
              height="500px"
              controls
              className="rounded-lg shadow-lg"
            />
          </div>

          {/* Texte à côté de la vidéo */}
          <div className="w-full lg:w-1/2 text-center lg:text-left">
            <h2 className="text-3xl font-extrabold text-white mb-4">
              Rejoignez une communauté de startups innovantes 🌟
            </h2>
            <p className="text-lg text-gray-200 mb-6">
              Chez Jouman, nous connectons les startups prometteuses avec des talents motivés et des investisseurs visionnaires. Profitez d{"'"}opportunités uniques pour faire décoller vos idées et révolutionner votre secteur.
            </p>
            {
              !getAndCheckLocalStorage(localvalue.TYPEACCESS) &&
              <button onClick={handleConnected} className="mt-4 px-6 py-3 bg-indigo-600 text-white text-lg font-bold rounded-lg hover:bg-indigo-700 transition">
              Découvrir les Opportunités
            </button>
            }
           
          </div>
        </div>
        {/* Témoignages */}
        <StartupTestimonialCarousel />
        <JoumanStartupInsights/>


        {/* Call-to-Action */}
        <div className="text-center">
        {
          
            !getAndCheckLocalStorage(localvalue.TYPEACCESS) &&
            <button onClick={handleConnected} className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded-lg text-lg font-bold shadow-lg">
            Rejoindre la Révolution des Startups
          </button>
        }
          
        </div>


        <StartupAdvantages/>


      </div>
    </div>
  );
};

export default StartupSuccessPage;





const StartupTestimonialCarousel = () => {
  const responsive = {
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 3,
      slidesToSlide: 3, // Avance de 3 témoignages par clic
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 2,
      slidesToSlide: 2, // Avance de 2 témoignages par clic
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1,
      slidesToSlide: 1, // Avance de 1 témoignage par clic
    },
  };

  const testimonials = [
    {
      message:
        "“Jouman a transformé notre vision en réalité. Nous avons trouvé des talents incroyables !”",
      author: "CEO de TechNova",
    },
    {
      message: "“Grâce à Jouman, notre idée a révolutionné le marché !”",
      author: "GreenEarth Solutions",
    },
    {
      message:
        "“Une plateforme unique pour connecter des startups aux bons talents.”",
      author: "Healthify",
    },
    {
      message: "“Jouman nous a permis de trouver des investisseurs clés.”",
      author: "StartX Ventures",
    },
    {
      message:
        "“Avec Jouman, notre startup a connu une croissance spectaculaire !”",
      author: "FutureGen Labs",
    },
  ];

  return (
    <div className="w-full py-16">
      <div className="w-full px-6 sm:px-12 lg:px-24 text-center">
        <h2 className="text-3xl font-bold text-white mb-6">
          Témoignages Inspirants
        </h2>
        <Carousel
          responsive={responsive}
          infinite={true}
          autoPlay={true}
          autoPlaySpeed={4000}
          keyBoardControl={true}
          transitionDuration={500}
          containerClass="carousel-container"
          removeArrowOnDeviceType={["tablet", "mobile"]}
          dotListClass="custom-dot-list-style"
          itemClass="carousel-item-padding-40-px"
        >
          {testimonials.map((testimonial, index) => (
            <div
              key={index}
              className="bg-white rounded-lg shadow-lg p-6 text-left mx-4"
            >
              <p className="text-gray-700 italic">“{testimonial.message}”</p>
              <p className="mt-4 font-bold text-indigo-600">
                - {testimonial.author}
              </p>
            </div>
          ))}
        </Carousel>
      </div>
    </div>
  );
};






const StartupAdvantages = () => {
  return (
    <div className=" text-white py-16">
      <div className="max-w-7xl mx-auto px-6 sm:px-12 lg:px-24">
        {/* En-tête */}
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold mb-4">
            Pourquoi choisir <span className="text-red-600">Jouman</span> ?
          </h2>
          <p className="text-lg text-gray-200">
            Avec Jouman, donnez vie à vos idées, connectez-vous à un réseau
            mondial d’investisseurs, et révolutionnez votre marché.
          </p>
        </div>

        {/* Avantages */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Avantage 1 */}
          <div className="text-center bg-white text-gray-800 p-6 rounded-lg shadow-lg hover:shadow-2xl transition">
            <FaUsers className="text-indigo-600 text-6xl mx-auto mb-4" />
            <h3 className="text-xl font-bold mb-2">Accédez à un réseau mondial</h3>
            <p className="text-gray-600">
              Connectez-vous à des investisseurs, mentors et partenaires prêts à
              vous soutenir à chaque étape.
            </p>
          </div>

          {/* Avantage 2 */}
          <div className="text-center bg-white text-gray-800 p-6 rounded-lg shadow-lg hover:shadow-2xl transition">
            <FaLightbulb className="text-yellow-400 text-6xl mx-auto mb-4" />
            <h3 className="text-xl font-bold mb-2">Présentez votre projet</h3>
            <p className="text-gray-600">
              Donnez de la visibilité à vos idées et positionnez votre startup
              comme une référence sur le marché.
            </p>
          </div>

          {/* Avantage 3 */}
          <div className="text-center bg-white text-gray-800 p-6 rounded-lg shadow-lg hover:shadow-2xl transition">
            <FaHandshake className="text-green-400 text-6xl mx-auto mb-4" />
            <h3 className="text-xl font-bold mb-2">Trouvez les bons partenaires</h3>
            <p className="text-gray-600">
              Rencontrez des investisseurs et des partenaires stratégiques
              pour propulser votre croissance.
            </p>
          </div>

          {/* Avantage 4 */}
          <div className="text-center bg-white text-gray-800 p-6 rounded-lg shadow-lg hover:shadow-2xl transition">
            <FaRocket className="text-red-500 text-6xl mx-auto mb-4" />
            <h3 className="text-xl font-bold mb-2">Faites rêver les investisseurs</h3>
            <p className="text-gray-600">
              Transformez votre vision en réalité et révolutionnez votre
              secteur grâce au soutien de Jouman.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};






// Configuration de Chart.js
ChartJS.register(CategoryScale, LinearScale, PointElement, LineElement);

const JoumanStartupInsights = () => {
  // Données pour le graphique
  const data = {
    labels: ["Jan", "Fév", "Mar", "Avr", "Mai", "Juin"],
    datasets: [
      {
        label: "Investissements ($)",
        data: [12000, 18000, 15000, 20000, 25000, 30000],
        borderColor: "#4F46E5",
        backgroundColor: "rgba(79, 70, 229, 0.2)",
        borderWidth: 2,
        pointRadius: 4,
        tension: 0.3,
      },
      {
        label: "Projets Lancés",
        data: [10, 20, 15, 25, 30, 35],
        borderColor: "#F59E0B",
        backgroundColor: "rgba(245, 158, 11, 0.2)",
        borderWidth: 2,
        pointRadius: 4,
        tension: 0.3,
      },
    ],
  };

  // Options pour le graphique
  const options = {
    responsive: true,
    plugins: {
      legend: {
        position: "top",
        labels: {
          color: "#fff",
        },
      },
    },
    scales: {
      x: {
        ticks: { color: "#fff" },
        grid: { color: "rgba(255, 255, 255, 0.2)" },
      },
      y: {
        ticks: { color: "#fff" },
        grid: { color: "rgba(255, 255, 255, 0.2)" },
      },
    },
  };

  return (
    <div>
      {/* Section avec background image fixe */}
      <div
  className="relative bg-fixed bg-cover bg-center h-[500px] flex items-center justify-center"
  style={{
    backgroundImage: "url('images/startup.jpg')",
  }}
>
  {/* Overlay */}
  <div className="absolute inset-0 bg-black bg-opacity-50"></div>

  {/* Contenu au-dessus de l'overlay */}
  <div className="relative text-center">
    <h1 className="text-5xl font-bold text-white">
      Propulsez votre startup avec <span className="text-yellow-400">Jouman 🚀</span>
    </h1>
    <p className="mt-4 text-lg text-gray-300">
      Accédez à un réseau d{"'"}investisseurs, transformez vos idées et révolutionnez votre marché.
    </p>
  </div>
</div>

      {/* Section Insights */}
      <div className=" py-16">
        <div className="max-w-7xl mx-auto px-6 sm:px-12 lg:px-24">
          <h2 className="text-4xl font-bold text-white text-center mb-12">
            Des données qui parlent d{"'"}elles-mêmes 📊
          </h2>

          {/* Section graphique */}
          <div className="flex flex-col md:flex-row gap-8 items-center">
            {/* Graphique */}
            <div className="w-full md:w-2/3 bg-white rounded-lg shadow-lg p-6">
              <Line data={data} options={options} />
            </div>

            {/* Description */}
            <div className="w-full md:w-1/3 text-white">
              <h3 className="text-2xl font-bold mb-4">
                Impact des investissements 🌟
              </h3>
              <p className="text-gray-300">
                Les courbes ci-dessus montrent une croissance exponentielle des
                projets lancés et des investissements réalisés grâce à Jouman.
                Notre réseau et nos ressources permettent aux startups de
                briller dans un marché compétitif.
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Avantages pour les Startups */}
      <div className=" text-white py-16">
        <div className="max-w-7xl mx-auto px-6 sm:px-12 lg:px-24">
          <h2 className="text-4xl font-bold text-center mb-12">
            Pourquoi choisir Jouman ? 💡
          </h2>

          {/* Avantages */}
          <div className="grid grid-cols-3 md:grid-cols-3 gap-8">
            <div className="text-center p-6 bg-indigo-700 rounded-lg shadow-lg hover:shadow-xl transition">
              <FaChartLine className="text-yellow-400 text-6xl mx-auto mb-4" />
              <h3 className="text-xl font-bold mb-2">Données claires</h3>
              <p class="text-white">
                Suivez vos performances en temps réel et améliorez vos chances
                de réussite.
              </p>
            </div>
            <div className="text-center p-6 bg-indigo-700 rounded-lg shadow-lg hover:shadow-xl transition">
              <FaSeedling className="text-green-400 text-6xl mx-auto mb-4" />
              <h3 className="text-xl font-bold mb-2">Croissance rapide</h3>
              <p class="text-white">
                Accédez à des ressources et à un réseau pour accélérer votre
                succès.
              </p>
            </div>
            <div className="text-center p-6 bg-indigo-700 rounded-lg shadow-lg hover:shadow-xl transition">
              <FaRegLightbulb className="text-yellow-400 text-6xl mx-auto mb-4" />
              <h3 className="text-xl font-bold mb-2">Visibilité accrue</h3>
              <p class="text-white">
                Positionnez votre projet devant des investisseurs du monde
                entier.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

