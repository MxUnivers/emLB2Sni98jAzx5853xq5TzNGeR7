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
                    setIsPaused(false);  // Assurer que l'état "paused" est réinitialisé
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
            setIsPaused(false);  // Réinitialiser l'état de pause
            setProgress(0);  // Réinitialiser la barre de progression
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
                <label className="block text-sm font-medium">Sélectionner la langue</label>
                <select value={language} onChange={handleLanguageChange} className="form-select">
                    <option value="fr-FR">Français</option>
                    <option value="en-US">Anglais</option>
                    {/* Ajouter d'autres langues si nécessaire */}
                </select>
            </div>
            <div className="flex justify-between items-center mb-4">
                <div className="flex space-x-2">
                    <button
                        onClick={startReading}
                        disabled={isPlaying}
                        className="p-2 bg-green-500 text-white rounded"
                    >
                        <FaPlay />
                    </button>
                    <button
                        onClick={pauseReading}
                        disabled={!isPlaying || isPaused}
                        className="p-2 bg-yellow-500 text-white rounded"
                    >
                        <FaPause />
                    </button>
                    <button
                        onClick={resumeReading}
                        disabled={!isPaused}
                        className="p-2 bg-blue-500 text-white rounded"
                    >
                        <FaRedo />
                    </button>
                    <button
                        onClick={stopReading}
                        className="p-2 bg-red-500 text-white rounded"
                    >
                        <FaStop />
                    </button>
                </div>
            </div>
            <div className="relative pt-1">
                <div className="flex mb-2 items-center justify-between">
                    <span className="text-xs font-semibold inline-block py-1 uppercase">
                        Progression
                    </span>
                    <span className="text-xs font-semibold inline-block py-1 uppercase">
                        {progress.toFixed(0)}%
                    </span>
                </div>
                <div className="flex mb-2">
                    <div
                        className="relative flex w-full flex-wrap items-stretch mb-3"
                        style={{ height: "8px", borderRadius: "4px", backgroundColor: "#E5E7EB" }}
                    >
                        <div
                            className="flex mb-2"
                            style={{
                                width: `${progress}%`,
                                backgroundColor: "#4CAF50",
                                borderRadius: "4px",
                                height: "100%",
                            }}
                        />
                    </div>
                </div>
            </div>
        </div>
    );
};

export default VocalReader;
