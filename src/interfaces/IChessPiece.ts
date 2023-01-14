import { IChessBoardWithPieces } from './IChessBoardWithPieces';
import { IChessSquare } from './IChessSquare';

export interface IChessPiece {
  getAttackingSquares(board: IChessBoardWithPieces): IChessSquare[];
}
