import { useState } from 'react';

import { IChessBoard } from './interfaces/IChessBoard';
import { ChessBoard } from './models/ChessBoard';

export const useApp = () => {
  const [chessBoard] = useState<IChessBoard>(new ChessBoard());

  return {
    chessBoard
  };
};
