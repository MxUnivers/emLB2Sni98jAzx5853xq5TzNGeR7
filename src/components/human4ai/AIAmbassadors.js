import React, { useState } from 'react';
import { motion } from 'framer-motion';

const AIAmbassadors = () => {
  const [selectedAmbassador, setSelectedAmbassador] = useState(null);

  const ambassadors = [
    {
      name: "Dr. Marie Kouadio",
      role: "Experte en IA et Santé Numérique",
      bio: "Pionnière dans l'application de l'IA pour le diagnostic médical en Afrique de l'Ouest.",
      image: "https://img.freepik.com/free-psd/contact-icon-illustration-isolated_23-2151903337.jpg?t=st=1733656982~exp=1733660582~hmac=4be1758765e425833b882f795d17abf64883e62089a4c22a107d3be38ff320fb&w=740",
      expertise: ["Santé Digitale", "Machine Learning", "Éthique de l'IA"]
    },
    {
      name: "Yacouba Traoré",
      role: "Innovateur en IA Agricole",
      bio: "Développe des solutions d'IA pour optimiser la production agricole en Côte d'Ivoire.",
      image: "https://img.freepik.com/free-psd/contact-icon-illustration-isolated_23-2151903337.jpg?t=st=1733656982~exp=1733660582~hmac=4be1758765e425833b882f795d17abf64883e62089a4c22a107d3be38ff320fb&w=740",
      expertise: ["Agriculture Intelligente", "Data Science", "Développement Rural"]
    },
    {
      name: "Fatou N'Diaye",
      role: "Entrepreneure Tech",
      bio: "Fondatrice d'une startup IA révolutionnant l'éducation numérique en Côte d'Ivoire.",
      image: "https://img.freepik.com/free-psd/contact-icon-illustration-isolated_23-2151903337.jpg?t=st=1733656982~exp=1733660582~hmac=4be1758765e425833b882f795d17abf64883e62089a4c22a107d3be38ff320fb&w=740",
      expertise: ["EdTech", "Intelligence Artificielle", "Entrepreneuriat"]
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-indigo-900 via-purple-900 to-blue-900 text-white py-16">
      <div className="container mx-auto px-4">
        <motion.h1
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-5xl font-bold text-center mb-12 text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-600"
        >
          Ambassadeurs IA de Côte d{"'"}Ivoire
        </motion.h1>

        <div className="grid md:grid-cols-3 gap-8">
          {ambassadors.map((ambassador, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: index * 0.3, duration: 0.5 }}
              whileHover={{ scale: 1.05 }}
              className={`bg-white/10 backdrop-blur-lg rounded-xl p-6 border border-white/20 
                ${selectedAmbassador === index ? 'ring-4 ring-purple-500' : ''}`}
              onClick={() => setSelectedAmbassador(selectedAmbassador === index ? null : index)}
            >
              <div className="flex justify-center mb-4">
                <img 
                  src={ambassador.image} 
                  alt={ambassador.name} 
                  className="w-48 h-48 object-cover rounded-full border-4 border-purple-500"
                />
              </div>
              <h2 className="text-2xl font-semibold text-center mb-2 text-purple-300">
                {ambassador.name}
              </h2>
              <p className="text-center text-white/80 mb-4">{ambassador.role}</p>
              
              {selectedAmbassador === index && (
                <motion.div
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  className="text-center"
                >
                  <p className="text-white/70 mb-4">{ambassador.bio}</p>
                  <div className="flex justify-center flex-wrap gap-2">
                    {ambassador.expertise.map((skill, skillIndex) => (
                      <span 
                        key={skillIndex} 
                        className="bg-purple-500/30 px-3 py-1 rounded-full text-sm"
                      >
                        {skill}
                      </span>
                    ))}
                  </div>
                </motion.div>
              )}
            </motion.div>
          ))}
        </div>

        {/*<motion.div 
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1, duration: 0.8 }}
          className="text-center mt-12"
        >
          <button className="bg-gradient-to-r from-purple-500 to-blue-600 px-8 py-3 rounded-full text-white font-bold hover:scale-105 transition duration-300">
            Rejoignez notre communauté IA
          </button>
        </motion.div> */}
      </div>
    </div>
  );
};

export default AIAmbassadors;