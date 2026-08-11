interface NavigationButtonsProps {
  currentIndex: number;
  totalQuestions: number;
  onPrevious: () => void;
  onNext: () => void;
}

export function NavigationButtons({
  currentIndex,
  totalQuestions,
  onPrevious,
  onNext,
}: NavigationButtonsProps) {
  const isLastQuestion = currentIndex === totalQuestions - 1;

  return (
    <div className="navigation-buttons">
      <button className="prev-btn" onClick={onPrevious} disabled={currentIndex === 0}>
        ← Previous
      </button>
      <button className="next-btn" onClick={onNext}>
        {isLastQuestion ? "Finish Quiz 🏁" : "Next Question →"}
      </button>
    </div>
  );
}