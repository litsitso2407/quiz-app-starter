import type { Question } from "../types/quiz";

interface QuestionHeaderProps {
  currentIndex: number;
  totalQuestions: number;
  category: Question["category"];
  isAnswered: boolean;
}

export function QuestionHeader({
  currentIndex,
  totalQuestions,
  category,
  isAnswered,
}: QuestionHeaderProps) {
  return (
    <div className="question-header">
      <p className="question-count">
        Question {currentIndex + 1} of {totalQuestions}
        {isAnswered && <span className="answered-badge"> ✓ Answered</span>}
      </p>
      <span className="category-badge">{category}</span>
    </div>
  );
}
