import { PawnBlackPieceIcon } from './PawnBlackPieceIcon';
import { PawnWhitePieceIcon } from './PawnWhitePieceIcon';
import { ChessPieceColor } from '../../interfaces/ChessPieceColor';
import { IconProps } from '../../types/IconProps';

interface Props extends IconProps {
  color: ChessPieceColor;
}

export const PawnPieceIcon = ({ color, ...props }: Props) => {
  switch (color) {
    case ChessPieceColor.White:
      return <PawnWhitePieceIcon {...props} />;
    case ChessPieceColor.Black:
      return <PawnBlackPieceIcon {...props} />;
    default:
      throw new Error(`Unknown color: ${color}`);
  }
};
