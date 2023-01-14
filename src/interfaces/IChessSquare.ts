import { ChessSquareColor } from './ChessSquareColor';

export interface IChessSquare {
  readonly row: number;
  readonly column: number;
  readonly color: ChessSquareColor;
}
