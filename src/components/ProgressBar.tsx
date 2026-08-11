interface ProgressBarProps {
  currentIndex: number;
  totalQuestions: number;
}

export function ProgressBar({ currentIndex, totalQuestions }: ProgressBarProps) {
  const percentComplete = ((currentIndex + 1) / totalQuestions) * 100;

  return (
    <div className="progress-bar-container">
      <div className="progress-bar" style={{ width: `${percentComplete}%` }} />
    </div>
  );
}
