import { FC } from 'react';

import { squareName } from '../helpers/squareName';
import { IChessSquareWithPiece } from '../interfaces/IChessSquareWithPiece';
import { Nullable } from '../types/fp';

interface Props {
  square: Nullable<IChessSquareWithPiece>;
}

export const SelectedSquare: FC<Props> = ({ square }) => {
  return (
    <div style={{ marginTop: 24 }}>
      <div>Selected Square: {square ? squareName(square) : 'none'}</div>
    </div>
  );
};
