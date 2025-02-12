interface PropTypes {
  value: number;
  color: string;
}

const ProgressBar: React.FC<PropTypes> = ({ value, color }) => {
  const progress = Math.min(100, Math.max(0, value));

  return (
    <div
      className="bg-secondary border-primary h-2 w-full overflow-hidden rounded-full border"
      aria-labelledby="form progress bar"
    >
      <div
        className="h-full transition-all duration-300"
        style={{ width: `${progress}%`, backgroundColor: color }}
      ></div>
    </div>
  );
};

export default ProgressBar;
