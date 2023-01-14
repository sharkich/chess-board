import { IChessSquare } from '../interfaces/IChessSquare';

export class ChessSquare implements IChessSquare {
  constructor(readonly row: number, readonly column: number) {}
}
