import { IChessBoardWithPieces } from '../../interfaces/IChessBoardWithPieces';
import { IChessPiece } from '../../interfaces/IChessPiece';
import { IChessSquare } from '../../interfaces/IChessSquare';
import { ChessPiece } from '../ChessPiece';

export class PawnChessPiece extends ChessPiece implements IChessPiece {
  getAttackingSquares(board: IChessBoardWithPieces): IChessSquare[] {
    return [];
  }
}
