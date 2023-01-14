import { ChessSquareColor } from '../interfaces/ChessSquareColor';
import { IChessSquare } from '../interfaces/IChessSquare';

export class ChessSquare implements IChessSquare {
  readonly color: ChessSquareColor;

  constructor(readonly row: number, readonly column: number) {
    this.color = row % 2 ^ column % 2 ? ChessSquareColor.Black : ChessSquareColor.White;
  }
}
