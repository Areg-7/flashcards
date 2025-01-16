// components/Flashcard.tsx
"use client"
// components/Flashcard.tsx
import { useState } from "react";
import { FaVolumeUp } from "react-icons/fa";

interface FlashcardProps {
  word: string;
  translation: string;
  selectedVoice: SpeechSynthesisVoice | null; // Receive selectedVoice as prop
}

const Flashcard: React.FC<FlashcardProps> = ({ word, translation, selectedVoice }) => {
  const [isFlipped, setIsFlipped] = useState(false);

  const playAudio = (text: string) => {
    if (!selectedVoice) return;

    const utterance = new SpeechSynthesisUtterance(text);
    utterance.voice = selectedVoice;
    speechSynthesis.speak(utterance);
  };

  return (
    <div
      className="group perspective"
      onClick={() => setIsFlipped(!isFlipped)}
      role="button"
      tabIndex={0}
      onKeyDown={(e) => {
        if (e.key === "Enter" || e.key === " ") setIsFlipped(!isFlipped);
      }}
    >
      <div
        className={`relative w-64 h-40 transition-transform duration-700 transform-style-preserve ${
          isFlipped ? "rotate-y-180" : ""
        }`}
      >
        {/* Front Side */}
        <div className="absolute inset-0 flex flex-col items-center justify-center bg-blue-500 text-white font-bold text-xl rounded-lg shadow-lg backface-hidden">
          <p>{translation}</p>
        </div>
        {/* Back Side */}
        <div className="absolute inset-0 flex items-center justify-center bg-green-500 text-white font-bold text-xl rounded-lg shadow-lg backface-hidden rotate-y-180">
          {word}
          
          {/* Speaker Icon */}
          <button
            onClick={(e) => {
              e.stopPropagation(); // Prevent card flipping
              playAudio(word);
            }}
            className="ml-5 text-white text-2xl"
            aria-label={`Play pronunciation of ${word}`}
          >
            <FaVolumeUp />
          </button>
        </div>
      </div>
    </div>
  );
};

export default Flashcard;
