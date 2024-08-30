import React, { useState } from "react";

function Quiz({ flashcards, onRestart }) {
  const [current, setCurrent] = useState(0);
  const [score, setScore] = useState(0);
  const [showAnswer, setShowAnswer] = useState(false);
  const [quizCompleted, setQuizCompleted] = useState(false);

  const handleNext = (correct) => {
    if (correct) {
      setScore((prevScore) => prevScore + 1);
    }
    setShowAnswer(false);

    if (current < flashcards.length - 1) {
      setCurrent((prevCurrent) => prevCurrent + 1);
    } else {
      setQuizCompleted(true); 
    }
  };

  const handleRestart = () => {
    setCurrent(0);
    setScore(0);
    setQuizCompleted(false);
  };

  if (quizCompleted) {
    return (
      <div className="flex flex-col items-center">
        <h2 className="text-2xl font-bold mb-4">Quiz Completed!</h2>
        <p className="text-lg mb-4">Your Score: {score} / {flashcards.length}</p>
        <button
          className="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-700"
          onClick={handleRestart}
        >
          Restart Quiz
        </button>
      </div>
    );
  }

  return (
    <div className="flex flex-col items-center">
      <div className="w-64 h-40 bg-white border rounded-lg shadow-lg p-4 mb-4">
        <div className={`text-lg font-bold ${showAnswer ? "hidden" : "block"}`}>
          {flashcards[current].question}
        </div>
        {showAnswer && (
          <div className="text-lg">{flashcards[current].answer}</div>
        )}
      </div>
      <button
        className="px-4 py-2 bg-gray-300 rounded mb-4"
        onClick={() => setShowAnswer((prevShow) => !prevShow)}
      >
        {showAnswer ? "Hide Answer" : "Show Answer"}
      </button>
      <div className="flex gap-4">
        <button
          className="px-4 py-2 bg-green-500 text-white rounded hover:bg-green-700"
          onClick={() => handleNext(true)}
        >
          Correct
        </button>
        <button
          className="px-4 py-2 bg-red-500 text-white rounded hover:bg-red-700"
          onClick={() => handleNext(false)}
        >
          Incorrect
        </button>
      </div>
    </div>
  );
}

export default Quiz;
