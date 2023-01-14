import { FC } from 'react';

import { IChessSquareWithPiece } from '../interfaces/IChessSquareWithPiece';

interface Props {
  square: IChessSquareWithPiece;
}

export const ChessBoardRowColumn: FC<Props> = ({ square }) => {
  return <div className="cell">{`${square.row}x${square.column}`}</div>;
};
