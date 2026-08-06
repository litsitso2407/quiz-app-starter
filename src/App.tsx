import questions from "./data/questions";
import "./App.css";
import { useState } from "react";

function App() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [score, setScore] = useState(0);
  const [selectedOption, setSelectedOption] = useState<number | null>(null);
  const [showResults, setShowResults] = useState(false);
  // Track which questions have been answered and what option was selected
  const [answeredQuestions, setAnsweredQuestions] = useState<{[key: number]: number}>({});

  const currentQuestion = questions[currentIndex];
  const totalQuestions = questions.length;

  // Handle when a user clicks an option
  const handleOptionClick = (index: number) => {
    if (selectedOption !== null) return; // Prevent changing the answer once selected
    setSelectedOption(index);
    
    // Record this answer
    setAnsweredQuestions(prev => ({
      ...prev,
      [currentIndex]: index
    }));
    
    if (index === currentQuestion.correctAnswer) {
      setScore((prevScore) => prevScore + 1);
    }
  };

  // Handle moving to the next question or finishing the quiz
  const handleNext = () => {
    if (currentIndex < totalQuestions - 1) {
      const nextIndex = currentIndex + 1;
      setCurrentIndex(nextIndex);
      // Restore the selected option if this question was answered before
      setSelectedOption(answeredQuestions[nextIndex] !== undefined ? answeredQuestions[nextIndex] : null);
    } else {
      setShowResults(true); // Quiz is done
    }
  };

  // Handle going back to the previous question
  const handlePrevious = () => {
    if (currentIndex > 0) {
      const prevIndex = currentIndex - 1;
      setCurrentIndex(prevIndex);
      // Restore the previously selected option
      setSelectedOption(answeredQuestions[prevIndex] !== undefined ? answeredQuestions[prevIndex] : null);
    }
  };

  // Handle restarting the quiz
  const handleRestart = () => {
    setCurrentIndex(0);
    setScore(0);
    setSelectedOption(null);
    setShowResults(false);
    setAnsweredQuestions({});
  };

  // Results Screen
  if (showResults) {
    const percentage = Math.round((score / totalQuestions) * 100);
    return (
      <div className="app results-container">
        <h1>Quiz Completed! 🎉</h1>
        <div className="score-card">
          <h2>Your Score</h2>
          <p className="score-text">{score} / {totalQuestions}</p>
          <p className="score-percentage">{percentage}%</p>
        </div>
        <button className="restart-btn" onClick={handleRestart}>
          Restart Quiz
        </button>
      </div>
    );
  }

  // Check if current question was already answered
  const isCurrentQuestionAnswered = answeredQuestions[currentIndex] !== undefined;

  // Main Quiz Screen
  return (
    <div className="app">
      <h1>Quiz App</h1>
      
      {/* Progress Bar */}
      <div className="progress-bar-container">
        <div 
          className="progress-bar" 
          style={{ width: `${((currentIndex + 1) / totalQuestions) * 100}%` }}
        ></div>
      </div>

      {/* Header (Count & Category) */}
      <div className="question-header">
        <p className="question-count">
          Question {currentIndex + 1} of {totalQuestions}
          {isCurrentQuestionAnswered && <span className="answered-badge"> ✓ Answered</span>}
        </p>
        <span className="category-badge">{currentQuestion.category}</span>
      </div>

      {/* Question Text */}
      <h2 className="question-text">{currentQuestion.question}</h2>

      {/* Options */}
      <div className="options-container">
        {currentQuestion.options.map((option, index) => {
          let buttonClass = "option-btn";
          
          // Apply correct/incorrect styles after an option is selected
          if (selectedOption !== null) {
            if (index === currentQuestion.correctAnswer) {
              buttonClass += " correct";
            } else if (index === selectedOption && index !== currentQuestion.correctAnswer) {
              buttonClass += " incorrect";
            }
          }

          return (
            <button
              key={index}
              className={buttonClass}
              onClick={() => handleOptionClick(index)}
              disabled={selectedOption !== null} // Disable buttons after an answer is picked
            >
              {option}
            </button>
          );
        })}
      </div>

      {/* Navigation Buttons - Always visible */}
      <div className="navigation-buttons">
        <button 
          className="prev-btn" 
          onClick={handlePrevious}
          disabled={currentIndex === 0}
        >
          ← Previous
        </button>
        <button 
          className="next-btn" 
          onClick={handleNext}
          disabled={selectedOption === null && !isCurrentQuestionAnswered}
        >
          {currentIndex < totalQuestions - 1 ? "Next Question →" : "Finish Quiz 🏁"}
        </button>
      </div>

      {/* Feedback - Only shows after an option is selected */}
      {selectedOption !== null && (
        <div className="feedback-container">
          <div className={`feedback-text ${selectedOption === currentQuestion.correctAnswer ? 'correct-text' : 'incorrect-text'}`}>
            {selectedOption === currentQuestion.correctAnswer ? " Correct!" : " Incorrect!"}
          </div>
          <p className="explanation">
            <strong>Explanation:</strong> {currentQuestion.explanation}
          </p>
        </div>
      )}
    </div>
  );
}

export default App;