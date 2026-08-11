interface ResultsScreenProps {
  score: number;
  totalQuestions: number;
  percentage: number;
  onRestart: () => void;
}

export function ResultsScreen({
  score,
  totalQuestions,
  percentage,
  onRestart,
}: ResultsScreenProps) {
  return (
    <div className="app results-container">
      <h1>Quiz Completed! 🎉</h1>
      <div className="score-card">
        <h2>Your Score</h2>
        <p className="score-text">
          {score} / {totalQuestions}
        </p>
        <p className="score-percentage">{percentage}%</p>
      </div>
      <button className="restart-btn" onClick={onRestart}>
        Restart Quiz
      </button>
    </div>
  );
}
