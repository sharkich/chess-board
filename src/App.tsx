import React from 'react';

import './App.css';
import { useApp } from './useApp';
import { ChessBoard } from './views/ChessBoard';
import { SelectedSquare } from './views/SelectedSquare';

export const App = () => {
  const { chessBoard, selectedSquare, handleSquareClick } = useApp();

  return (
    <div className="App">
      <h1 style={{ textAlign: 'center' }}>Chess Board</h1>
      <div style={{ display: 'flex' }}>
        <ChessBoard boardWithPieces={chessBoard.board} onSelectPiece={handleSquareClick} />
        <SelectedSquare square={selectedSquare} />
      </div>
    </div>
  );
};
