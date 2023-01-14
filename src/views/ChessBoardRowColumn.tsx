import { FC } from 'react';

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
    </div>
  );
};
