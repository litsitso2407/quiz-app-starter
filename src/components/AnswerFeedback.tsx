interface AnswerFeedbackProps {
  isCorrect: boolean;
  explanation: string;
}

export function AnswerFeedback({ isCorrect, explanation }: AnswerFeedbackProps) {
  return (
    <div className="feedback-container">
      <div className={`feedback-text ${isCorrect ? "correct-text" : "incorrect-text"}`}>
        {isCorrect ? " Correct!" : " Incorrect!"}
      </div>
      <p className="explanation">
        <strong>Explanation:</strong> {explanation}
      </p>
    </div>
  );
}
