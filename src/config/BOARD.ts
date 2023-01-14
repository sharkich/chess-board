import { ChessPieceColor } from '../interfaces/ChessPieceColor';
import { ChessBoard } from '../models/ChessBoard';
import { BishopChessPiece } from '../models/ChessPieces/BishopChessPiece';
import { KingChessPiece } from '../models/ChessPieces/KingChessPiece';
import { KnightChessPiece } from '../models/ChessPieces/KnightChessPiece';
import { PawnChessPiece } from '../models/ChessPieces/PawnChessPiece';
import { QueenChessPiece } from '../models/ChessPieces/QueenChessPiece';
import { RookChessPiece } from '../models/ChessPieces/RookChessPiece';
import { ChessSquare } from '../models/ChessSquare';

export const BOARD_SIZE = 8;

export const DEFAULT_BOARD = new ChessBoard();

DEFAULT_BOARD.addPiece(new PawnChessPiece(ChessPieceColor.White), new ChessSquare(6, 0));
DEFAULT_BOARD.addPiece(new PawnChessPiece(ChessPieceColor.White), new ChessSquare(6, 1));
DEFAULT_BOARD.addPiece(new PawnChessPiece(ChessPieceColor.White), new ChessSquare(6, 2));
DEFAULT_BOARD.addPiece(new PawnChessPiece(ChessPieceColor.White), new ChessSquare(6, 3));
DEFAULT_BOARD.addPiece(new PawnChessPiece(ChessPieceColor.White), new ChessSquare(6, 4));
DEFAULT_BOARD.addPiece(new PawnChessPiece(ChessPieceColor.White), new ChessSquare(6, 5));
DEFAULT_BOARD.addPiece(new PawnChessPiece(ChessPieceColor.White), new ChessSquare(6, 6));
DEFAULT_BOARD.addPiece(new PawnChessPiece(ChessPieceColor.White), new ChessSquare(6, 7));
DEFAULT_BOARD.addPiece(new RookChessPiece(ChessPieceColor.White), new ChessSquare(7, 0));
DEFAULT_BOARD.addPiece(new KnightChessPiece(ChessPieceColor.White), new ChessSquare(7, 1));
DEFAULT_BOARD.addPiece(new BishopChessPiece(ChessPieceColor.White), new ChessSquare(7, 2));
DEFAULT_BOARD.addPiece(new QueenChessPiece(ChessPieceColor.White), new ChessSquare(7, 3));
DEFAULT_BOARD.addPiece(new KingChessPiece(ChessPieceColor.White), new ChessSquare(7, 4));
DEFAULT_BOARD.addPiece(new BishopChessPiece(ChessPieceColor.White), new ChessSquare(7, 5));
DEFAULT_BOARD.addPiece(new KnightChessPiece(ChessPieceColor.White), new ChessSquare(7, 6));
DEFAULT_BOARD.addPiece(new RookChessPiece(ChessPieceColor.White), new ChessSquare(7, 7));

DEFAULT_BOARD.addPiece(new PawnChessPiece(ChessPieceColor.Black), new ChessSquare(1, 0));
DEFAULT_BOARD.addPiece(new PawnChessPiece(ChessPieceColor.Black), new ChessSquare(1, 1));
DEFAULT_BOARD.addPiece(new PawnChessPiece(ChessPieceColor.Black), new ChessSquare(1, 2));
DEFAULT_BOARD.addPiece(new PawnChessPiece(ChessPieceColor.Black), new ChessSquare(1, 3));
DEFAULT_BOARD.addPiece(new PawnChessPiece(ChessPieceColor.Black), new ChessSquare(1, 4));
DEFAULT_BOARD.addPiece(new PawnChessPiece(ChessPieceColor.Black), new ChessSquare(1, 5));
DEFAULT_BOARD.addPiece(new PawnChessPiece(ChessPieceColor.Black), new ChessSquare(1, 6));
DEFAULT_BOARD.addPiece(new PawnChessPiece(ChessPieceColor.Black), new ChessSquare(1, 7));
DEFAULT_BOARD.addPiece(new RookChessPiece(ChessPieceColor.Black), new ChessSquare(0, 0));
DEFAULT_BOARD.addPiece(new KnightChessPiece(ChessPieceColor.Black), new ChessSquare(0, 1));
DEFAULT_BOARD.addPiece(new BishopChessPiece(ChessPieceColor.Black), new ChessSquare(0, 2));
DEFAULT_BOARD.addPiece(new QueenChessPiece(ChessPieceColor.Black), new ChessSquare(0, 3));
DEFAULT_BOARD.addPiece(new KingChessPiece(ChessPieceColor.Black), new ChessSquare(0, 4));
DEFAULT_BOARD.addPiece(new BishopChessPiece(ChessPieceColor.Black), new ChessSquare(0, 5));
DEFAULT_BOARD.addPiece(new KnightChessPiece(ChessPieceColor.Black), new ChessSquare(0, 6));
DEFAULT_BOARD.addPiece(new RookChessPiece(ChessPieceColor.Black), new ChessSquare(0, 7));
