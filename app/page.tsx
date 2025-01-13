// pages/index.tsx
import Flashcard from "@/components/Flashcard";
import { flashcardsData } from "@/data/flashcards";

const Home: React.FC = () => {
  return (
    <div className="min-h-screen bg-gray-100 flex flex-col items-center justify-center p-6">
      <h1 className="text-4xl font-bold mb-8">English Flashcards</h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
        {flashcardsData.map((card, index) => (
          <Flashcard
            key={index}
            word={card.word}
            translation={card.translation}
          />
        ))}
      </div>
    </div>
  );
};

export default Home;
