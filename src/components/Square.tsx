interface Props {
  value: string;
  onSquareClick: () => void;
}

const Square = ({ value, onSquareClick }: Props) => {
  return (
    <button
      className="square"
      onClick={onSquareClick}
    >
      {value}
    </button>
  );
};

export default Square;
