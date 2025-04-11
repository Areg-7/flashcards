"use client";
import { useState, useEffect } from "react";
import Flashcard from "@/components/Flashcard";
import { flashcardCases } from "@/data/flashcards";

const IndexPage = () => {
  const [voices, setVoices] = useState<SpeechSynthesisVoice[]>([]);
  const [selectedVoice, setSelectedVoice] = useState<SpeechSynthesisVoice | null>(null);
  const [activeCase, setActiveCase] = useState<string>("TPO 1"); // Default to TPO 1

  useEffect(() => {
    const fetchVoices = () => {
      const availableVoices = speechSynthesis.getVoices();
      setVoices(availableVoices);
      const defaultVoice = availableVoices.find((voice) => voice.lang.startsWith("en")) || null;
      setSelectedVoice(defaultVoice);
    };

    fetchVoices();
    if (speechSynthesis.onvoiceschanged !== undefined) {
      speechSynthesis.onvoiceschanged = fetchVoices;
    }
  }, []);

  return (
    <div className="flex flex-col items-center p-4">
      <h1 className="text-2xl font-bold mb-4">📚 Flashcard Cases</h1>

      {/* Case Switcher */}
      <div className="flex space-x-4 mb-6">
        {Object.keys(flashcardCases).map((caseId) => (
          <button
            key={caseId}
            onClick={() => setActiveCase(caseId)}
            className={`px-4 py-2 rounded ${
              activeCase === caseId ? "bg-blue-600 text-white" : "bg-gray-300 text-black"
            }`}
          >
            {caseId}
          </button>
        ))}
      </div>

      {/* Voice Selector */}
      <select
        className="p-2 mb-4 bg-white text-black rounded"
        value={selectedVoice?.name || ""}
        onChange={(e) =>
          setSelectedVoice(voices.find((voice) => voice.name === e.target.value) || null)
        }
      >
        {voices
          .filter((voice) => voice.lang.startsWith("en"))
          .map((voice) => (
            <option key={voice.name} value={voice.name}>
              {voice.name} ({voice.lang})
            </option>
          ))}
      </select>

      {/* Flashcards */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
        {/* Check if flashcardCases[activeCase] exists */}
        {flashcardCases[activeCase] ? (
          flashcardCases[activeCase].map((card, index) => (
            <Flashcard
              key={index}
              word={card.word}
              translation={card.translation}
              selectedVoice={selectedVoice}
            />
          ))
        ) : (
          <p>No flashcards available for this case.</p> // Fallback message if no flashcards exist
        )}
      </div>
    </div>
  );
};

export default IndexPage;
