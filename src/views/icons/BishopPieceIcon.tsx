import { BishopBlackPieceIcon } from './BishopBlackPieceIcon';
import { BishopWhitePieceIcon } from './BishopWhitePieceIcon';
import { ChessPieceColor } from '../../interfaces/ChessPieceColor';
import { IconProps } from '../../types/IconProps';

interface Props extends IconProps {
  color: ChessPieceColor;
}

export const BishopPieceIcon = ({ color, ...props }: Props) => {
  switch (color) {
    case ChessPieceColor.White:
      return <BishopWhitePieceIcon {...props} />;
    case ChessPieceColor.Black:
      return <BishopBlackPieceIcon {...props} />;
    default:
      throw new Error(`Unknown color: ${color}`);
  }
};
