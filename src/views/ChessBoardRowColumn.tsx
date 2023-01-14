import { FC } from 'react';

import { SquarePiece } from './SquarePiece';
import { BOARD_SIZE } from '../config/BOARD';
import { ChessSquareColor } from '../interfaces/ChessSquareColor';
import { IChessSquareWithPiece } from '../interfaces/IChessSquareWithPiece';

interface Props {
  square: IChessSquareWithPiece;
}

export const ChessBoardRowColumn: FC<Props> = ({ square }) => {
  const colorClassName = square.color === ChessSquareColor.White ? 'white' : 'black';

  return (
    <div className={`cell ${colorClassName}`}>
      <div className="cell__name">{`${String.fromCharCode(65 + square.column)}${BOARD_SIZE - square.row}`}</div>
      {square.piece && (
        <div className="cell__piece">
          <SquarePiece piece={square.piece} />
        </div>
      )}
    </div>
  );
};
