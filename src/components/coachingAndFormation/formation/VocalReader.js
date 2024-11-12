import React, { useEffect, useState, useRef } from 'react';
import { FaPlay, FaPause, FaStop, FaRedo } from 'react-icons/fa';

const VocalReader = ({ text }) => {
    const [isPlaying, setIsPlaying] = useState(false);
    const [isPaused, setIsPaused] = useState(false);
    const [progress, setProgress] = useState(0);
    const [language, setLanguage] = useState('fr-FR');
    const [currentIndex, setCurrentIndex] = useState(0);
    const [chunks, setChunks] = useState([]);

    const synth = useRef(window.speechSynthesis);
    const utterance = useRef(new SpeechSynthesisUtterance());

    // Diviser le texte en morceaux plus petits
    useEffect(() => {
        if (text) {
            const chunkSize = 1000;
            const chunks = [];
            for (let i = 0; i < text.length; i += chunkSize) {
                chunks.push(text.substring(i, i + chunkSize));
            }
            setChunks(chunks);
        }
    }, [text]);

    // Mettre à jour l'énoncé de la synthèse pour chaque morceau
    useEffect(() => {
        if (chunks.length > 0 && currentIndex < chunks.length) {
            utterance.current.text = chunks[currentIndex];
            utterance.current.lang = language;
            utterance.current.onboundary = (event) => {
                const charIndex = event.charIndex;
                setProgress((charIndex / text.length) * 100); // Mise à jour du progrès
            };
            utterance.current.onend = () => {
                if (currentIndex < chunks.length - 1) {
                    setCurrentIndex(currentIndex + 1); // Passer au prochain morceau
                    if (isPlaying) synth.current.speak(utterance.current); // Continuer la lecture
                } else {
                    setIsPlaying(false);
                    setProgress(100); // Marquer la fin de la lecture
                }
            };
        }
    }, [currentIndex, chunks, language, text]);

    const startReading = () => {
        if (!synth.current.speaking) {
            setIsPlaying(true);
            setIsPaused(false);
            setCurrentIndex(0); // Commencer la lecture à partir du premier morceau
            synth.current.speak(utterance.current);
        }
    };

    const pauseReading = () => {
        if (synth.current.speaking && !synth.current.paused) {
            synth.current.pause();
            setIsPaused(true);
        }
    };

    const resumeReading = () => {
        if (synth.current.paused) {
            synth.current.resume();
            setIsPaused(false);
        }
    };

    const stopReading = () => {
        if (synth.current.speaking) {
            synth.current.cancel();
            setIsPlaying(false);
            setProgress(0);
            setCurrentIndex(0); // Réinitialiser à la première section
        }
    };

    const handleLanguageChange = (event) => {
        setLanguage(event.target.value);
        stopReading(); // Arrêter la lecture si une nouvelle langue est sélectionnée
    };

    return (
        <div className="min-w-md mx-2 p-6 bg-white shadow-lg rounded-lg">
            <div className="mb-4">
                <label className="block text-sm font-medium text-gray-700">Langue :</label>
                <select
                    onChange={handleLanguageChange}
                    value={language}
                    className="mt-1 block w-full px-3 py-2 bg-white border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-primary focus:border-primary sm:text-sm"
                >
                    <option value="fr-FR">Français</option>
                    <option value="en-US">Anglais</option>
                </select>
            </div>

            <div className="mb-4 flex justify-between items-center space-x-2">
                <button
                    onClick={startReading}
                    disabled={isPlaying}
                    title="Démarrer"
                    className={`p-2 rounded ${isPlaying ? 'bg-gray-300' : 'bg-blue-500 text-white hover:bg-blue-600'}`}
                >
                    <FaPlay />
                </button>
                <button
                    onClick={pauseReading}
                    disabled={!isPlaying || isPaused}
                    title="Pause"
                    className={`p-2 rounded ${isPaused ? 'bg-gray-300' : 'bg-yellow-500 text-white hover:bg-yellow-600'}`}
                >
                    <FaPause />
                </button>
                <button
                    onClick={resumeReading}
                    disabled={!isPaused}
                    title="Reprendre"
                    className={`p-2 rounded ${!isPaused ? 'bg-gray-300' : 'bg-green-500 text-white hover:bg-green-600'}`}
                >
                    <FaRedo />
                </button>
                <button
                    onClick={stopReading}
                    disabled={!isPlaying}
                    title="Arrêter"
                    className="p-2 rounded bg-red-500 text-white hover:bg-red-600"
                >
                    <FaStop />
                </button>
            </div>

            {/* Barre de progression */}
            <div className="mb-4">
                <label className="block text-sm font-medium text-gray-700">Progression :</label>
                <progress
                    value={progress}
                    max={100}
                    className="w-full h-2 bg-gray-200 rounded-full"
                />
                {/*<span className="text-sm text-gray-600">{Math.round(progress)}%</span> */}
            </div>
        </div>
    );
};

export default VocalReader;
