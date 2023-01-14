import { FC } from 'react';

import { ChessBoardRowColumn } from './ChessBoardRowColumn';
import { IChessSquareWithPiece } from '../interfaces/IChessSquareWithPiece';

interface Props {
  row: IChessSquareWithPiece[];
}

export const ChessBoardRow: FC<Props> = ({ row }) => {
  return (
    <div className="row">
      {row.map((square, index) => (
        <ChessBoardRowColumn square={square} key={index} />
      ))}
    </div>
  );
};
