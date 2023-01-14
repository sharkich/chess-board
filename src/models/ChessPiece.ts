import { ChessPieceColor } from './ChessPieceColor';
import { IChessBoardWithPieces } from '../interfaces/IChessBoardWithPieces';
import { IChessPiece } from '../interfaces/IChessPiece';
import { IChessSquare } from '../interfaces/IChessSquare';

export class ChessPiece implements IChessPiece {
  protected color: ChessPieceColor;

  getAttackingSquares(board: IChessBoardWithPieces): IChessSquare[] {
    throw new Error('Method not implemented.');
  }
}

export class ChessPieceWhite extends ChessPiece {
  constructor() {
    super();
    this.color = ChessPieceColor.White;
  }
}

export class ChessPieceBlack extends ChessPiece {
  constructor() {
    super();
    this.color = ChessPieceColor.White;
  }
}
