import { useMemo } from 'react';

import { DEFAULT_BOARD } from './config/BOARD';

export const useApp = () => {
  const chessBoard = useMemo(() => DEFAULT_BOARD, []);

  return {
    chessBoard
  };
};
