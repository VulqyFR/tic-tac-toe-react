import React, { useCallback, useEffect, useState } from 'react';
import './App.css';

// prettier-ignore
const WINNING_COMBINATIONS = [
  [0, 1, 2], [3, 4, 5], [6, 7, 8], // Rows
  [0, 3, 6], [1, 4, 7], [2, 5, 8], // Columns
  [0, 4, 8], [2, 4, 6]             // Diagonals
];

export default function TicTacToe() {
  const [board, setBoard] = useState(Array(9).fill(null));
  const [player, setPlayer] = useState('X');

  const checkWinner = useCallback(() => {
    for (let combo of WINNING_COMBINATIONS) {
      const [a, b, c] = combo;
      if (board[a] && board[a] === board[b] && board[a] === board[c]) {
        return board[a];
      }
    }
    return null;
  }, [board]);

  const handleClick = index => {
    if (board[index] || checkWinner()) return;
    const newBoard = [...board];
    newBoard[index] = player;
    setBoard(newBoard);
    setPlayer(player === 'X' ? 'O' : 'X');
  };

  useEffect(() => {
    const winner = checkWinner();
    if (winner) {
      setTimeout(() => {
        alert(`Player ${winner} wins!`);
        setBoard(Array(9).fill(null));
        setPlayer('X');
      }, 100);
    } else if (!board.includes(null)) {
      setTimeout(() => {
        alert("It's a tie!");
        setBoard(Array(9).fill(null));
        setPlayer('X');
      }, 100);
    }
  }, [board, checkWinner]);

  return (
    <div className="container">
      <h1 className="title">Tic Tac Toe | {player} Turn</h1>
      <div className="board">
        {board.map((cell, index) => (
          <div key={index} className="cell" onClick={() => handleClick(index)}>
            {cell}
          </div>
        ))}
      </div>
      <button
        onClick={() => setBoard(Array(9).fill(null)) && setPlayer('X')}
        className="reset"
      >
        Reset
      </button>
    </div>
  );
}
