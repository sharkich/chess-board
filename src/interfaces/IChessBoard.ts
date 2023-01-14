import { IChessBoardWithPieces } from './IChessBoardWithPieces';
import { IChessPiece } from './IChessPiece';
import { IChessSquare } from './IChessSquare';
import { IChessSquareWithPiece } from './IChessSquareWithPiece';

export interface IChessBoard {
  get board(): IChessBoardWithPieces;
  addPiece(piece: IChessPiece, square: IChessSquare): void;
  movePiece(squareFrom: IChessSquareWithPiece, squareTo: IChessSquare): void;
}
