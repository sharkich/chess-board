import { FC } from 'react';

import { IChessBoardWithPieces } from '../interfaces/IChessBoardWithPieces';

interface Props {
  boardWithPieces: IChessBoardWithPieces;
}

export const ChessBoard: FC<Props> = () => {
  return (
    <div>
      <h1>Chess Board</h1>
    </div>
  );
};
