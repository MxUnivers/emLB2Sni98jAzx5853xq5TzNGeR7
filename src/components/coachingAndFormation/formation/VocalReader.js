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

    useEffect(() => {
        if (chunks.length > 0 && currentIndex < chunks.length) {
            utterance.current.text = chunks[currentIndex];
            utterance.current.lang = language;
            utterance.current.onboundary = (event) => {
                const charIndex = event.charIndex;
                setProgress(((currentIndex * 1000 + charIndex) / text.length) * 100);
            };
            utterance.current.onend = () => {
                if (currentIndex < chunks.length - 1) {
                    setCurrentIndex((prevIndex) => prevIndex + 1);
                    synth.current.speak(utterance.current);
                } else {
                    setIsPlaying(false);
                    setIsPaused(false);
                    setProgress(100);
                }
            };
        }
    }, [currentIndex, chunks, language, text]);

    const startReading = () => {
        if (!synth.current.speaking && chunks.length > 0) {
            setIsPlaying(true);
            setIsPaused(false);
            setCurrentIndex(0);
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
            setIsPaused(false);
            setProgress(0);
            setCurrentIndex(0);
        }
    };

    const handleLanguageChange = (event) => {
        setLanguage(event.target.value);
        stopReading();
    };

    return (
        <div className="vocal-reader p-6 rounded-lg shadow-lg bg-white min-w-md mx-auto">
            <h2 className="text-2xl font-semibold text-center mb-4">Synthèse vocale</h2>
            
            <div className="flex items-center justify-center mb-4 space-x-4">
                <button
                    onClick={startReading}
                    className="bg-green-500 hover:bg-green-600 text-white font-bold py-2 px-4 rounded"
                >
                    <FaPlay />
                </button>
                <button
                    onClick={pauseReading}
                    className="bg-yellow-500 hover:bg-yellow-600 text-white font-bold py-2 px-4 rounded"
                >
                    <FaPause />
                </button>
                <button
                    onClick={resumeReading}
                    className="bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded"
                >
                    <FaRedo />
                </button>
                <button
                    onClick={stopReading}
                    className="bg-red-500 hover:bg-red-600 text-white font-bold py-2 px-4 rounded"
                >
                    <FaStop />
                </button>
            </div>

            {/* Progress bar */}
            <div className="w-full text-right rounded-full h-2.5 mb-4">
            {Number(progress).toFixed(0)}%
            </div>
            <div className="w-full bg-gray-200 rounded-full h-2.5 mb-4">
                <div
                    className="bg-blue-500 h-2.5 rounded-full"
                    style={{ width: `${progress}%` }}
                ></div>
            </div>

            {/* Visualizer 
        <VoiceVisualizer isPlaying={isPlaying} />
        */}
            

            <div className="mt-4 text-center">
                <select
                    value={language}
                    onChange={handleLanguageChange}
                    className="border border-gray-300 rounded px-4 py-2"
                >
                    <option value="fr-FR">Français</option>
                    <option value="en-US">English</option>
                </select>
            </div>
        </div>
    );
};

export default VocalReader;
