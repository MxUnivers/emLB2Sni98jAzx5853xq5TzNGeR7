// src/components/coachingAndFormation/formation/VocalReader.js

import React, { useEffect, useState, useRef } from 'react';

const VocalReader = ({ text }) => {
    const [isPlaying, setIsPlaying] = useState(false);
    const [isPaused, setIsPaused] = useState(false);
    const [progress, setProgress] = useState(0);
    const [language, setLanguage] = useState('fr-FR'); // Langue par défaut : français

    const synth = useRef(window.speechSynthesis);
    const utterance = useRef(new SpeechSynthesisUtterance());

    useEffect(() => {
        utterance.current.text = text;
        utterance.current.lang = language; // Applique la langue sélectionnée
        utterance.current.onboundary = (event) => {
            const charIndex = event.charIndex;
            setProgress((charIndex / text.length) * 100);
        };
        utterance.current.onend = () => {
            setIsPlaying(false);
            setProgress(100);
        };
    }, [text, language]);

    const startReading = () => {
        if (!synth.current.speaking) {
            setIsPlaying(true);
            setIsPaused(false);
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
        }
    };

    const handleLanguageChange = (event) => {
        setLanguage(event.target.value);
        stopReading(); // Arrête la lecture si une nouvelle langue est sélectionnée
    };

    return (
        <div className="max-w-md mx-auto p-6 bg-white shadow-lg rounded-lg">
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

            <div className="mb-4 flex justify-between">
                <button 
                    onClick={startReading} 
                    disabled={isPlaying} 
                    className={`px-4 py-2 rounded ${isPlaying ? 'bg-gray-300' : 'bg-blue-500 text-white hover:bg-blue-600'}`}
                >
                    Démarrer
                </button>
                <button 
                    onClick={pauseReading} 
                    disabled={!isPlaying || isPaused} 
                    className={`px-4 py-2 rounded ${!isPlaying || isPaused ? 'bg-gray-300' : 'bg-yellow-500 text-white hover:bg-yellow-600'}`}
                >
                    Pause
                </button>
                <button 
                    onClick={resumeReading} 
                    disabled={!isPaused} 
                    className={`px-4 py-2 rounded ${!isPaused ? 'bg-gray-300' : 'bg-green-500 text-white hover:bg-green-600'}`}
                >
                    Reprendre
                </button>
                <button 
                    onClick={stopReading} 
                    className="px-4 py-2 bg-red-500 text-white rounded hover:bg-red-600"
                >
                    Arrêter
                </button>
            </div>

            <div className="relative w-full h-4 bg-gray-200 rounded-full overflow-hidden">
                <div 
                    style={{ width: `${progress}%` }} 
                    className="absolute top-0 left-0 h-full bg-blue-500"
                ></div>
            </div>
        </div>
    );
};

export default VocalReader;
