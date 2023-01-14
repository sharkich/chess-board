import { useEffect, useMemo } from 'react';

import { ChessBoard } from './models/ChessBoard';
import { ChessPieceColor } from './models/ChessPieceColor';
import { KingChessPiece } from './models/ChessPieces/KingChessPiece';
import { ChessSquare } from './models/ChessSquare';

export const useApp = () => {
  const chessBoard = useMemo(() => new ChessBoard(), []);

  useEffect(() => {
    chessBoard.addPiece(new KingChessPiece(ChessPieceColor.White), new ChessSquare(0, 4));
    // eslint-disable-next-line
  }, []);

  return {
    chessBoard
  };
};
