import React, { useState } from "react";
import "../utils/Flashcard.css";

function Flashcard({ flashcard }) {
  const [flip, setFlip] = useState(false);
  return (
    <div
      className="relative w-64 h-40 perspective-1000"
      onClick={() => setFlip(!flip)}
    >
      <div
        className={`relative w-full h-full transition-transform duration-500 transform ${flip ? "rotate-y-180" : ""}`}
      >
        <div className="absolute w-full h-full bg-white border rounded-lg shadow-lg flex items-center justify-center backface-hidden">
          <div className="text-lg font-bold">{flashcard.question}</div>
        </div>
        <div className="absolute w-full h-full bg-blue-200 border rounded-lg shadow-lg flex items-center justify-center backface-hidden transform rotate-y-180">
          <div className="text-lg">{flashcard.answer}</div>
        </div>
      </div>
    </div>
  );
}

export default Flashcard;
