import React, { useState } from 'react';
import { motion } from 'framer-motion';

const AIEventPage = () => {
  const [activeSection, setActiveSection] = useState(null);

  const eventSections = [
    {
      title: "Sommet de l'IA Ivoirienne",
      description: "Une journée dédiée à l'innovation technologique et à l'intelligence artificielle en Côte d'Ivoire.",
      details: "Réunissant experts, entrepreneurs et décideurs pour façonner l'avenir numérique de l'Afrique.",
      image: "https://img.freepik.com/free-photo/person-working-html-computer_23-2150038846.jpg?t=st=1733657328~exp=1733660928~hmac=c227c44b0dda004fe14acb9f052cd60d975a4068e20c757bba0595ab08391f41&w=996"
    },
    {
      title: "Innovations Locales",
      description: "Découvrez les solutions IA développées par les talents ivoiriens.",
      details: "Présentation des projets les plus innovants dans divers secteurs : santé, agriculture, éducation et finance.",
      image: "https://img.freepik.com/free-photo/side-view-woman-using-tablet-outdoors_23-2150747705.jpg?t=st=1733657378~exp=1733660978~hmac=558a795acd1580202ac1269fde02748337ec248b7389932ec7e5711c9f42139f&w=996"
    },
    {
      title: "Opportunités et Défis",
      description: "Table ronde sur l'impact de l'IA dans le développement économique et social.",
      details: "Discussions stratégiques sur l'intégration de l'IA dans les secteurs clés de la Côte d'Ivoire.",
      image: "https://img.freepik.com/free-photo/robot-with-box-chocolates-red-roses-valentine_1048-11627.jpg?t=st=1733657421~exp=1733661021~hmac=8fcad3cfe05747f9bdaec7c97acdb93a3c8e931653a9d756c2c7c9f7fd5d5239&w=826"
    }
  ];

  const ambassadorCriteria = [
    {
      title: "Profil Recherché",
      description: "Nous recherchons 1000 ambassadeurs passionnés par l'intelligence artificielle",
      criteria: [
        "Compréhension de l'IA",
        "Capacité de communication et de vulgarisation",
        "Passion pour l'innovation et le développement technologique"
      ]
    },
    {
      title: "Missions des Ambassadeurs",
      description: "Rôle clé dans la promotion et la démystification de l'IA",
      missions: [
        "Animer des sessions de sensibilisation",
        "Partager des connaissances sur l'IA",
        "Représenter notre écosystème IA",
        "Créer du contenu éducatif sur les technologies émergentes"
      ]
    },
    {
      title: "Avantages",
      description: "Opportunités de développement professionnel",
      benefits: [
        "Formation intensive en IA",
        "Réseau professionnel",
        "Opportunités de mentorat",
        "Certificat de reconnaissance",
        "Possibilité de stages et de collaborations"
      ]
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-900 via-indigo-800 to-purple-900 text-white">
      <div className="container mx-auto px-4 py-16">
        <motion.h1 
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-5xl font-bold text-center mb-12 text-transparent bg-clip-text bg-gradient-to-r from-white to-purple-600"
        >
          Journée de l'Intelligence Artificielle en Côte d'Ivoire
        </motion.h1>

        {/* Section Événements */}
        <div className="grid md:grid-cols-3 gap-8 mb-16">
          {eventSections.map((section, index) => (
            <motion.div 
              key={index}
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: index * 0.3, duration: 0.5 }}
              whileHover={{ scale: 1.05 }}
              className={`bg-white/10 backdrop-blur-lg rounded-xl p-6 border border-white/20 
                ${activeSection === index ? 'ring-4 ring-blue-500' : ''}`}
              onClick={() => setActiveSection(activeSection === index ? null : index)}
            >
              <img 
                src={section.image} 
                alt={section.title} 
                className="w-full h-48 object-cover rounded-lg mb-4"
              />
              <h2 className="text-2xl font-semibold mb-3 text-blue-300">{section.title}</h2>
              <p className="text-white/80 mb-4">{section.description}</p>
              {activeSection === index && (
                <motion.div 
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  className="text-white/70"
                >
                  {section.details}
                </motion.div>
              )}
            </motion.div>
          ))}
        </div>

        {/* Section Recherche d'Ambassadeurs */}
        <div className="bg-white/10 backdrop-blur-lg rounded-xl p-8 border border-white/20">
          <h2 className="text-4xl font-bold text-center mb-8 text-transparent bg-clip-text bg-gradient-to-r from-white to-purple-600">
            1000 Ambassadeurs IA
          </h2>

          <div className="grid md:grid-cols-3 gap-8">
            {ambassadorCriteria.map((section, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 50 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.3, duration: 0.6 }}
                className="bg-white/5 rounded-xl p-6 border border-white/10"
              >
                <h3 className="text-2xl font-semibold mb-4 text-blue-300">
                  {section.title}
                </h3>
                <p className="text-white/80 mb-4">{section.description}</p>
                <ul className="space-y-2 text-white/70">
                  {section.criteria || section.missions || section.benefits?.map((item, itemIndex) => (
                    <li key={itemIndex} className="flex items-center">
                      <svg className="w-5 h-5 mr-2 text-blue-400" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                      </svg>
                      {item}
                    </li>
                  ))}
                </ul>
              </motion.div>
            ))}
          </div>

         
        </div>
      </div>
    </div>
  );
};

export default AIEventPage;