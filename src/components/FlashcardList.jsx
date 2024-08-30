import React from "react";
import Flashcard from "./Flashcard";

function FlashcardList({ flashcards }) {
  return (
    <div className="flex flex-wrap justify-center gap-4">
      {flashcards.map((flashcard) => (
        <Flashcard flashcard={flashcard} key={flashcard.id} />
      ))}
    </div>
  );
}

export default FlashcardList;
