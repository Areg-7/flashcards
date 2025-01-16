"use client"
// pages/index.tsx
import { useState, useEffect } from "react";
import Flashcard from "@/components/Flashcard";
import { flashcardsDataTed } from "@/data/flashcards";
import { flashcardsDataAlex } from "@/data/flashcards";

const IndexPage = () => {
  const [voices, setVoices] = useState<SpeechSynthesisVoice[]>([]);
  const [selectedVoice, setSelectedVoice] = useState<SpeechSynthesisVoice | null>(null);

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
      {/* Voice Selector Dropdown */}
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
        {flashcardsDataAlex.map((card, index) => (
          <Flashcard
            key={index}
            word={card.word}
            translation={card.translation}
            selectedVoice={selectedVoice} // Pass the selected voice as prop
          />
        ))}
      </div>
    </div>
  );
};

export default IndexPage;
