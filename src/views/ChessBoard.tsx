import { FC } from 'react';

import { ChessBoardRow } from './ChessBoardRow';
import { IChessBoardWithPieces } from '../interfaces/IChessBoardWithPieces';
import { IChessSquareWithPiece } from '../interfaces/IChessSquareWithPiece';

interface Props {
  boardWithPieces: IChessBoardWithPieces;
  onSelectPiece: (square: IChessSquareWithPiece) => void;
}

export const ChessBoard: FC<Props> = ({ boardWithPieces, onSelectPiece }) => {
  return (
    <div className="board">
      {boardWithPieces.map((row, index) => (
        <ChessBoardRow row={row} key={index} onSelectPiece={onSelectPiece} />
      ))}
    </div>
  );
};
