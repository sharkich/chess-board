import { ChessPieceColor } from '../interfaces/ChessPieceColor';
import { IChessBoardWithPieces } from '../interfaces/IChessBoardWithPieces';
import { IChessPiece } from '../interfaces/IChessPiece';
import { IChessSquare } from '../interfaces/IChessSquare';

export class ChessPiece implements IChessPiece {
  constructor(readonly color: ChessPieceColor) {}

  getAttackingSquares(board: IChessBoardWithPieces): IChessSquare[] {
    throw new Error('Method not implemented.');
  }
}
