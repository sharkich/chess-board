import { IChessPiece } from './IChessPiece';
import { IChessSquare } from './IChessSquare';
import { Nullable } from '../types/fp';

export interface IChessSquareWithPiece extends IChessSquare {
  piece: Nullable<IChessPiece>;
}
