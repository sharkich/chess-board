import { ChessPieceColor } from '../../interfaces/ChessPieceColor';
import { ChessPieceType } from '../../interfaces/ChessPieceType';
import { IChessBoardWithPieces } from '../../interfaces/IChessBoardWithPieces';
import { IChessPiece } from '../../interfaces/IChessPiece';
import { IChessSquare } from '../../interfaces/IChessSquare';
import { ChessPiece } from '../ChessPiece';

export class PawnChessPiece extends ChessPiece implements IChessPiece {
  constructor(color: ChessPieceColor) {
    super(ChessPieceType.Pawn, color);
  }

  getAttackingSquares(board: IChessBoardWithPieces): IChessSquare[] {
    return [];
  }
}
