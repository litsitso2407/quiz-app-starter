import { useState } from "react";
import type { Question, AnsweredQuestions } from "../types/quiz";

/**
 * Owns all quiz state and the logic for moving through it:
 * current question, score, selected option, answered history, and results.
 *
 * Keeping this in one hook means App.tsx (and any future component)
 * just consumes the returned values/handlers instead of re-implementing
 * or duplicating this state.
 */
export function useQuiz(questions: Question[]) {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [score, setScore] = useState(0);
  const [selectedOption, setSelectedOption] = useState<number | null>(null);
  const [showResults, setShowResults] = useState(false);
  const [answeredQuestions, setAnsweredQuestions] =
    useState<AnsweredQuestions>({});

  const currentQuestion = questions[currentIndex];
  const totalQuestions = questions.length;
  const isCurrentQuestionAnswered =
    answeredQuestions[currentIndex] !== undefined;
  const percentage = Math.round((score / totalQuestions) * 100);

  const selectOption = (index: number) => {
    if (selectedOption !== null) return; // answer is locked in once chosen
    setSelectedOption(index);

    setAnsweredQuestions((prev) => ({
      ...prev,
      [currentIndex]: index,
    }));

    if (index === currentQuestion.correctAnswer) {
      setScore((prevScore) => prevScore + 1);
    }
  };

  const goToNext = () => {
    if (currentIndex < totalQuestions - 1) {
      const nextIndex = currentIndex + 1;
      setCurrentIndex(nextIndex);
      setSelectedOption(answeredQuestions[nextIndex] ?? null);
    } else {
      setShowResults(true);
    }
  };

  const goToPrevious = () => {
    if (currentIndex === 0) return;
    const prevIndex = currentIndex - 1;
    setCurrentIndex(prevIndex);
    setSelectedOption(answeredQuestions[prevIndex] ?? null);
  };

  const restart = () => {
    setCurrentIndex(0);
    setScore(0);
    setSelectedOption(null);
    setShowResults(false);
    setAnsweredQuestions({});
  };

  return {
    currentQuestion,
    currentIndex,
    totalQuestions,
    score,
    percentage,
    selectedOption,
    showResults,
    isCurrentQuestionAnswered,
    selectOption,
    goToNext,
    goToPrevious,
    restart,
  };
}
