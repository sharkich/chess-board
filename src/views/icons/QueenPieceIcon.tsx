import { QueenBlackPieceIcon } from './QueenBlackPieceIcon';
import { QueenWhitePieceIcon } from './QueenWhitePieceIcon';
import { ChessPieceColor } from '../../interfaces/ChessPieceColor';
import { IconProps } from '../../types/IconProps';

interface Props extends IconProps {
  color: ChessPieceColor;
}

export const QueenPieceIcon = ({ color, ...props }: Props) => {
  switch (color) {
    case ChessPieceColor.White:
      return <QueenWhitePieceIcon {...props} />;
    case ChessPieceColor.Black:
      return <QueenBlackPieceIcon {...props} />;
    default:
      throw new Error(`Unknown color: ${color}`);
  }
};
