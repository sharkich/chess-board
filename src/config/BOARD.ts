import { ChessPieceColor } from '../interfaces/ChessPieceColor';
import { ChessBoard } from '../models/ChessBoard';
import { KingChessPiece } from '../models/ChessPieces/KingChessPiece';
import { ChessSquare } from '../models/ChessSquare';

export const BOARD_SIZE = 8;

export const DEFAULT_BOARD = new ChessBoard();
DEFAULT_BOARD.addPiece(new KingChessPiece(ChessPieceColor.White), new ChessSquare(7, 4));
