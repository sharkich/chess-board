import { BOARD_SIZE } from '../config/BOARD';
import { IChessSquare } from '../interfaces/IChessSquare';

export const squareName = (square: IChessSquare): string =>
  `${String.fromCharCode(65 + square.column)}${BOARD_SIZE - square.row}`;
