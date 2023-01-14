import { RookBlackPieceIcon } from './RookBlackPieceIcon';
import { RookWhitePieceIcon } from './RookWhitePieceIcon';
import { ChessPieceColor } from '../../interfaces/ChessPieceColor';
import { IconProps } from '../../types/IconProps';

interface Props extends IconProps {
  color: ChessPieceColor;
}

export const RookPieceIcon = ({ color, ...props }: Props) => {
  switch (color) {
    case ChessPieceColor.White:
      return <RookWhitePieceIcon {...props} />;
    case ChessPieceColor.Black:
      return <RookBlackPieceIcon {...props} />;
    default:
      throw new Error(`Unknown color: ${color}`);
  }
};
