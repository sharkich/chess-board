import { IChessBoardWithPieces } from './IChessBoardWithPieces';
import { IChessSquare } from './IChessSquare';
import { ChessPieceColor } from '../models/ChessPieceColor';

export interface IChessPiece {
  readonly color: ChessPieceColor;
  getAttackingSquares(board: IChessBoardWithPieces): IChessSquare[];
}
