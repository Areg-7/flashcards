// components/Flashcard.tsx
"use client"
// components/Flashcard.tsx
import { useState } from "react";

interface FlashcardProps {
  word: string;
  translation: string;
}

const Flashcard: React.FC<FlashcardProps> = ({ word, translation }) => {
  const [isFlipped, setIsFlipped] = useState(false);

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
        <div className="absolute inset-0 flex items-center justify-center bg-blue-500 text-white font-bold text-xl rounded-lg shadow-lg backface-hidden">
          {word}
        </div>
        {/* Back Side */}
        <div className="absolute inset-0 flex items-center justify-center bg-green-500 text-white font-bold text-xl rounded-lg shadow-lg backface-hidden rotate-y-180">
          {translation}
        </div>
      </div>
    </div>
  );
};

export default Flashcard;
