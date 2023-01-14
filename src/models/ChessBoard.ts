import { ChessSquareWithPiece } from './ChessSquareWithPiece';
import { BOARD_SIZE } from '../config/BOARD';
import { IChessBoard } from '../interfaces/IChessBoard';
import { IChessBoardWithPieces } from '../interfaces/IChessBoardWithPieces';
import { IChessPiece } from '../interfaces/IChessPiece';
import { IChessSquare } from '../interfaces/IChessSquare';
import { IChessSquareWithPiece } from '../interfaces/IChessSquareWithPiece';

export class ChessBoard implements IChessBoard {
  #board: IChessBoardWithPieces = [];

  constructor(protected size: number = BOARD_SIZE) {
    this.initializeBoard();
  }

  get board(): IChessBoardWithPieces {
    return this.#board;
  }

  addPiece(piece: IChessPiece, square: IChessSquare): void {
    if (this.isSquareOccupied(square)) {
      throw new Error('Square already occupied');
    }
    this.#board[square.row][square.column].piece = piece;
  }

  movePiece(squareFrom: IChessSquareWithPiece, squareTo: IChessSquareWithPiece): void {
    if (!this.isSquareOccupied(squareFrom)) {
      throw new Error('Square is empty');
    }
    squareFrom.move(squareTo);
  }

  private initializeBoard(): void {
    for (let row = 0; row < this.size; row++) {
      this.#board[row] = [];
      for (let column = 0; column < this.size; column++) {
        this.#board[row][column] = new ChessSquareWithPiece(row, column, null);
      }
    }
  }

  private isSquareOccupied(square: IChessSquare): boolean {
    return this.#board[square.row][square.column].piece !== null;
  }
}
