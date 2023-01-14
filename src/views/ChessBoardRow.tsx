import { FC } from 'react';

import { ChessBoardRowColumn } from './ChessBoardRowColumn';
import { IChessSquareWithPiece } from '../interfaces/IChessSquareWithPiece';

interface Props {
  row: IChessSquareWithPiece[];
  onSelectPiece: (square: IChessSquareWithPiece) => void;
}

export const ChessBoardRow: FC<Props> = ({ row, onSelectPiece }) => {
  return (
    <div className="row">
      {row.map((square, index) => (
        <ChessBoardRowColumn square={square} key={index} onClick={() => onSelectPiece(square)} />
      ))}
    </div>
  );
};
