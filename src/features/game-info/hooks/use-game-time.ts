import { ChessPieceTeam, useGameStore, useGameInfoStore, GamePhase } from '@/shared';
import { useEffect } from 'react';

export function useGameTime() {
  const { whiteTime, blackTime, phase, setWhiteTime, setBlackTime } = useGameInfoStore();
  const { isCheckmate, currentPlayer } = useGameStore();

  useEffect(() => {
    if (isCheckmate || phase !== GamePhase.ONGOING) {
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
  }, [currentPlayer, isCheckmate, whiteTime, blackTime, phase, setWhiteTime, setBlackTime]);

  return {
    whiteTime,
    blackTime,
  };
}
