import { FC } from 'react';

import { ChessPieceIcon } from './icons/ChessPieceIcon';
import { ChessPiece } from '../models/ChessPiece';

interface Props {
  piece: ChessPiece;
}

export const SquarePiece: FC<Props> = ({ piece }) => {
  return (
    <div className="square-piece">
      <ChessPieceIcon pieceType={piece.pieceType} color={piece.color} />
    </div>
  );
};
