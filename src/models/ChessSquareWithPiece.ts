import { ChessSquare } from './ChessSquare';
import { IChessPiece } from '../interfaces/IChessPiece';
import { IChessSquareWithPiece } from '../interfaces/IChessSquareWithPiece';
import { Nullable } from '../types/fp';

export class ChessSquareWithPiece extends ChessSquare implements IChessSquareWithPiece {
  #piece: Nullable<IChessPiece>;

  constructor(row: number, column: number, piece: Nullable<IChessPiece>) {
    super(row, column);
    this.#piece = piece;
  }

  get piece(): Nullable<IChessPiece> {
    return this.#piece;
  }

  set piece(piece: Nullable<IChessPiece>) {
    if (piece && this.#piece) {
      throw new Error('Square already occupied');
    }
    if (!piece && !this.#piece) {
      return;
    }
    this.#piece = piece;
  }

  move(squareTo: IChessSquareWithPiece) {
    squareTo.piece = this.piece;
    this.#piece = null;
  }
}
