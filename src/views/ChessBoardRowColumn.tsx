import { FC, HTMLProps } from 'react';

import { SquarePiece } from './SquarePiece';
import { squareName } from '../helpers/squareName';
import { ChessSquareColor } from '../interfaces/ChessSquareColor';
import { IChessSquareWithPiece } from '../interfaces/IChessSquareWithPiece';

interface Props extends HTMLProps<HTMLDivElement> {
  square: IChessSquareWithPiece;
}

export const ChessBoardRowColumn: FC<Props> = ({ square, ...props }) => {
  const colorClassName = square.color === ChessSquareColor.White ? 'white' : 'black';
  const pieceClassName = square.piece ? 'cell-with-piece' : '';

  return (
    <div className={`cell ${colorClassName} ${pieceClassName}`} {...props}>
      <div className="cell__name">{squareName(square)}</div>
      {square.piece && (
        <div className="cell__piece">
          <SquarePiece piece={square.piece} />
        </div>
      )}
    </div>
  );
};
