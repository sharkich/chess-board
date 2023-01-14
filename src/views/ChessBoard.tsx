import { FC } from 'react';

import { ChessBoardRow } from './ChessBoardRow';
import { IChessBoardWithPieces } from '../interfaces/IChessBoardWithPieces';

interface Props {
  boardWithPieces: IChessBoardWithPieces;
}

export const ChessBoard: FC<Props> = ({ boardWithPieces }) => {
  return (
    <div>
      <h1>Chess Board</h1>
      <div className="board">
        {boardWithPieces.map((row, index) => (
          <ChessBoardRow row={row} key={index} />
        ))}
      </div>
    </div>
  );
};
