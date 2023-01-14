import { ChessPieceColor } from './ChessPieceColor';
import { ChessPieceType } from './ChessPieceType';
import { IChessBoardWithPieces } from './IChessBoardWithPieces';
import { IChessSquare } from './IChessSquare';

export interface IChessPiece {
  readonly pieceType: ChessPieceType;
  readonly color: ChessPieceColor;
  getAttackingSquares(board: IChessBoardWithPieces): IChessSquare[];
}
