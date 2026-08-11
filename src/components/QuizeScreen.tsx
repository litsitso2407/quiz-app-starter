import { useState } from "react";
import type { Question } from "../types/quiz";
import { ProgressBar } from "./ProgressBar";
import { QuestionHeader } from "./QuestionHeader";
import { OptionsList } from "./OptionList";
import { NavigationButtons } from "./NavigationButtons";
import { AnswerFeedback } from "./AnswerFeedback";

interface QuizScreenProps {
  question: Question;
  currentIndex: number;
  totalQuestions: number;
  selectedOption: number | null;
  isCurrentQuestionAnswered: boolean;
  onSelectOption: (index: number) => void;
  onPrevious: () => void;
  onNext: () => void;
}

export function QuizScreen({
  question,
  currentIndex,
  totalQuestions,
  selectedOption,
  isCurrentQuestionAnswered,
  onSelectOption,
  onPrevious,
  onNext,
}: QuizScreenProps) {
  const [showUnansweredWarning, setShowUnansweredWarning] = useState(false);
  const hasAnswer = selectedOption !== null || isCurrentQuestionAnswered;

  const handleSelectOption = (index: number) => {
    setShowUnansweredWarning(false);
    onSelectOption(index);
  };

  const handleNext = () => {
    if (!hasAnswer) {
      setShowUnansweredWarning(true);
      return;
    }
    setShowUnansweredWarning(false);
    onNext();
  };

  const handlePrevious = () => {
    setShowUnansweredWarning(false);
    onPrevious();
  };

  return (
    <div className="app">
      <h1>Quiz App</h1>

      <ProgressBar currentIndex={currentIndex} totalQuestions={totalQuestions} />

      <QuestionHeader
        currentIndex={currentIndex}
        totalQuestions={totalQuestions}
        category={question.category}
        isAnswered={isCurrentQuestionAnswered}
      />

      <h2 className="question-text">{question.question}</h2>

      <OptionsList
        options={question.options}
        correctAnswer={question.correctAnswer}
        selectedOption={selectedOption}
        onSelect={handleSelectOption}
      />

      {showUnansweredWarning && (
        <p className="warning-message">Please select an answer before continuing.</p>
      )}

      <NavigationButtons
        currentIndex={currentIndex}
        totalQuestions={totalQuestions}
        onPrevious={handlePrevious}
        onNext={handleNext}
      />

      {selectedOption !== null && (
        <AnswerFeedback
          isCorrect={selectedOption === question.correctAnswer}
          explanation={question.explanation}
        />
      )}
    </div>
  );
}