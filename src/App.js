import React, { useState } from "react";
import FlashcardList from "./components/FlashcardList";
import Quiz from "./components/Quiz";
import Progress from "./components/Progress";

function App() {
  const [flashcards, setFlashcards] = useState([
    { id: 1, question: "Question 1", answer: "Answer" },
    { id: 2, question: "Question 2", answer: "Answer" },
    { id: 3, question: "Question 3", answer: "Answer" },
  ]);

  const [quizMode, setQuizMode] = useState(false);
  const [showProgress, setShowProgress] = useState(false);
  const [score, setScore] = useState(0);
  const [question, setQuestion] = useState("");
  const [answer, setAnswer] = useState("");
  const [showCancel, setShowCancel] = useState(false);

  const addFlashcard = () => {
    if (question && answer) {
      setFlashcards([
        ...flashcards,
        { id: flashcards.length + 1, question, answer },
      ]);
      setQuestion("");
      setAnswer("");
    }
  };

  const handleQuizComplete = (finalScore) => {
    setScore(finalScore);
    setShowProgress(true);
    setQuizMode(false);
    setShowCancel(false); 
  };

  const handleRestart = () => {
    setScore(0);
    setShowProgress(false);
    setQuizMode(true);
    setShowCancel(true);
  };

  const handleCancelQuiz = () => {
    setQuizMode(false);
    setShowProgress(false);
    setShowCancel(false);
  };

  const handleGoToHomepage = () => {
    window.location.href = '/';
  };

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100">
      {!quizMode && !showProgress && (
        <>
          <h1 className="text-3xl font-bold mb-6">Flashcard Quiz App</h1>
          <FlashcardList flashcards={flashcards} />

        
          <div className="my-4">
            <input
              className=" p-4 mr-2 rounded-xl border border-black"
              type="text"
              placeholder="Enter question"
              value={question}
              onChange={(e) => setQuestion(e.target.value)}
            />
            <input
              className=" p-4 mr-2 rounded-xl border border-black"
              type="text"
              placeholder="Enter answer"
              value={answer}
              onChange={(e) => setAnswer(e.target.value)}
            />
            <button
              className="px-4 py-2 bg-green-500 text-white rounded hover:bg-green-700"
              onClick={addFlashcard}
            >
              Add Flashcard
            </button>
          </div>

          <button
            className="mt-6 px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-700"
            onClick={() => { 
              setQuizMode(true); 
              setShowCancel(true);
            }}
          >
            Start Quiz
          </button>
        </>
      )}

      {quizMode && (
        <>
          <Quiz flashcards={flashcards} onComplete={handleQuizComplete} />
          {showCancel && (
            <button
              className="mt-4 px-4 py-2 bg-red-500 text-white rounded hover:bg-red-700"
              onClick={handleCancelQuiz}
            >
              Cancel Quiz
            </button>
          )}
        </>
      )}

      {showProgress && !quizMode && (
        <>
          <Progress score={score} total={flashcards.length} />
          <div className="mt-4 flex gap-4">
            <button
              className="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-700"
              onClick={handleRestart}
            >
              Restart Quiz
            </button>
            <button
              className="px-4 py-2 bg-gray-500 text-white rounded hover:bg-gray-700"
              onClick={handleGoToHomepage}
            >
              Go to Homepage
            </button>
          </div>
        </>
      )}
    </div>
  );
}

export default App;
