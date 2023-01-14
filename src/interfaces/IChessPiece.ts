import { ChessPieceColor } from './ChessPieceColor';
import { IChessBoardWithPieces } from './IChessBoardWithPieces';
import { IChessSquare } from './IChessSquare';

export interface IChessPiece {
  readonly color: ChessPieceColor;
  getAttackingSquares(board: IChessBoardWithPieces): IChessSquare[];
}
