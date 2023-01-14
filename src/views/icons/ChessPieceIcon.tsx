import { FC } from 'react';

import { BishopPieceIcon } from './BishopPieceIcon';
import { KingPieceIcon } from './KingPieceIcon';
import { KnightPieceIcon } from './KnightPieceIcon';
import { PawnPieceIcon } from './PawnPieceIcon';
import { QueenPieceIcon } from './QueenPieceIcon';
import { RookPieceIcon } from './RookPieceIcon';
import { ChessPieceColor } from '../../interfaces/ChessPieceColor';
import { ChessPieceType } from '../../interfaces/ChessPieceType';
import { IconProps } from '../../types/IconProps';

interface Props extends IconProps {
  pieceType: ChessPieceType;
  color: ChessPieceColor;
}

export const ChessPieceIcon: FC<Props> = ({ pieceType, ...props }) => {
  switch (pieceType) {
    case ChessPieceType.Bishop:
      return <BishopPieceIcon {...props} />;
    case ChessPieceType.King:
      return <KingPieceIcon {...props} />;
    case ChessPieceType.Knight:
      return <KnightPieceIcon {...props} />;
    case ChessPieceType.Pawn:
      return <PawnPieceIcon {...props} />;
    case ChessPieceType.Queen:
      return <QueenPieceIcon {...props} />;
    case ChessPieceType.Rook:
      return <RookPieceIcon {...props} />;
    default:
      throw new Error(`Unknown piece type: ${pieceType}`);
  }
};
