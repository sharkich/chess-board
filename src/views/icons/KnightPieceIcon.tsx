import { KnightBlackPieceIcon } from './KnightBlackPieceIcon';
import { KnightWhitePieceIcon } from './KnightWhitePieceIcon';
import { ChessPieceColor } from '../../interfaces/ChessPieceColor';
import { IconProps } from '../../types/IconProps';

interface Props extends IconProps {
  color: ChessPieceColor;
}

export const KnightPieceIcon = ({ color, ...props }: Props) => {
  switch (color) {
    case ChessPieceColor.White:
      return <KnightWhitePieceIcon {...props} />;
    case ChessPieceColor.Black:
      return <KnightBlackPieceIcon {...props} />;
    default:
      throw new Error(`Unknown color: ${color}`);
  }
};
