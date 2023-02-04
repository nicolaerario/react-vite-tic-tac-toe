import { useState } from 'react';
import './App.css';
import Square from './components/Square';

export default function App() {
  // States
  const [xIsNext, setXIsNext] = useState<boolean>(true);
  const [squares, setSquares] = useState<string[]>(Array(9).fill(''));

  const winner = calculateWinner(squares);
  let status: string;
  if (winner) {
    status = `Winner is ${winner}`;
  } else {
    status = xIsNext ? 'Next player: X' : 'Next player: O';
  }

  // Handlers
  const squareClickHandler = (i: number) => {
    // Check if square is already filled or if there is a winner and return early
    if (squares[i] || winner) return;

    const nextSquare = [...squares];
    xIsNext ? (nextSquare[i] = 'X') : (nextSquare[i] = 'O');
    setSquares(nextSquare);
    setXIsNext(!xIsNext);
  };

  return (
    <>
      <div>{status}</div>
      <div className="board-row">
        <Square
          value={squares[0]}
          onSquareClick={() => squareClickHandler(0)}
        />
        <Square
          value={squares[1]}
          onSquareClick={() => squareClickHandler(1)}
        />
        <Square
          value={squares[2]}
          onSquareClick={() => squareClickHandler(2)}
        />
      </div>
      <div className="board-row">
        <Square
          value={squares[3]}
          onSquareClick={() => squareClickHandler(3)}
        />
        <Square
          value={squares[4]}
          onSquareClick={() => squareClickHandler(4)}
        />
        <Square
          value={squares[5]}
          onSquareClick={() => squareClickHandler(5)}
        />
      </div>
      <div className="board-row">
        <Square
          value={squares[6]}
          onSquareClick={() => squareClickHandler(6)}
        />
        <Square
          value={squares[7]}
          onSquareClick={() => squareClickHandler(7)}
        />
        <Square
          value={squares[8]}
          onSquareClick={() => squareClickHandler(8)}
        />
      </div>
    </>
  );
}

function calculateWinner(squares: string[]): string | null {
  const lines = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 6],
  ];

  for (const line in lines) {
    const [a, b, c] = lines[line];

    if (squares[a] && squares[a] === squares[b] && squares[a] === squares[c]) {
      return squares[a];
    }
  }
  return null;
}
