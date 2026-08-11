interface OptionsListProps {
  options: string[];
  correctAnswer: number;
  selectedOption: number | null;
  onSelect: (index: number) => void;
}

export function OptionsList({
  options,
  correctAnswer,
  selectedOption,
  onSelect,
}: OptionsListProps) {
  return (
    <div className="options-container">
      {options.map((option, index) => {
        let buttonClass = "option-btn";

        if (selectedOption !== null) {
          if (index === correctAnswer) {
            buttonClass += " correct";
          } else if (index === selectedOption) {
            buttonClass += " incorrect";
          }
        }

        return (
          <button
            key={index}
            className={buttonClass}
            onClick={() => onSelect(index)}
            disabled={selectedOption !== null}
          >
            {option}
          </button>
        );
      })}
    </div>
  );
}
