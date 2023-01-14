import React from 'react';

import './App.css';
import { useApp } from './useApp';
import { ChessBoard } from './views/ChessBoard';

export const App = () => {
  const { chessBoard } = useApp();

  return (
    <div className="App">
      <ChessBoard boardWithPieces={chessBoard.board} />
    </div>
  );
};
