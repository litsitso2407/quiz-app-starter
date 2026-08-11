import questions from "./data/questions";
import "./App.css";
import { useQuiz } from "./hooks/useQuiz";
import { QuizScreen } from "./components/QuizeScreen";
import { ResultsScreen } from "./components/ResultsScreen";

function App() {
  const {
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
  } = useQuiz(questions);

  if (showResults) {
    return (
      <ResultsScreen
        score={score}
        totalQuestions={totalQuestions}
        percentage={percentage}
        onRestart={restart}
      />
    );
  }

  return (
    <QuizScreen
      question={currentQuestion}
      currentIndex={currentIndex}
      totalQuestions={totalQuestions}
      selectedOption={selectedOption}
      isCurrentQuestionAnswered={isCurrentQuestionAnswered}
      onSelectOption={selectOption}
      onPrevious={goToPrevious}
      onNext={goToNext}
    />
  );
}

export default App;
