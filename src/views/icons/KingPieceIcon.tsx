import { KingBlackPieceIcon } from './KingBlackPieceIcon';
import { KingWhitePieceIcon } from './KingWhitePieceIcon';
import { ChessPieceColor } from '../../interfaces/ChessPieceColor';
import { IconProps } from '../../types/IconProps';

interface Props extends IconProps {
  color: ChessPieceColor;
}

export const KingPieceIcon = ({ color, ...props }: Props) => {
  switch (color) {
    case ChessPieceColor.White:
      return <KingWhitePieceIcon {...props} />;
    case ChessPieceColor.Black:
      return <KingBlackPieceIcon {...props} />;
    default:
      throw new Error(`Unknown color: ${color}`);
  }
};
