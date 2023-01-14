import { useMemo, useState } from 'react';

import { DEFAULT_BOARD } from './config/BOARD';
import { IChessSquareWithPiece } from './interfaces/IChessSquareWithPiece';
import { Nullable } from './types/fp';

export const useApp = () => {
  const chessBoard = useMemo(() => DEFAULT_BOARD, []);
  const [selectedSquare, setSelectedSquare] = useState<Nullable<IChessSquareWithPiece>>(null);

  const handleSquareClick = (square: IChessSquareWithPiece) => setSelectedSquare(square);

  return {
    chessBoard,
    selectedSquare,
    handleSquareClick
  };
};
