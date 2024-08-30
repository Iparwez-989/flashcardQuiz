import React from "react";

function Progress({ score, total, onRestart }) {
  return (
    <div className="text-center mt-4">
      <h2 className="text-2xl font-bold mb-4">Your Score: {score} / {total}</h2>
    </div>
  );
}

export default Progress;
