import { ChessPieceTeam, useGameStore, useGameInfoStore } from '@/shared';
import { useEffect } from 'react';

export function useGameTime() {
  const { whiteTime, blackTime, setWhiteTime, setBlackTime } = useGameInfoStore();
  const { isCheckmate, currentPlayer } = useGameStore();

  useEffect(() => {
    if (isCheckmate) {
      return;
    }

    const interval = setInterval(() => {
      if (currentPlayer === ChessPieceTeam.WHITE) {
        setWhiteTime(whiteTime > 0 ? whiteTime - 1 : 0);
      } else {
        setBlackTime(blackTime > 0 ? blackTime - 1 : 0);
      }
    }, 1000);

    return () => clearInterval(interval);
  }, [currentPlayer, isCheckmate, whiteTime, blackTime, setWhiteTime, setBlackTime]);

  return {
    whiteTime,
    blackTime,
  };
}
