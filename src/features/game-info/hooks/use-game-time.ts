import { ChessPieceTeam, GamePhase, useStoreContext } from '@/shared';
import { useEffect } from 'react';

export function useGameTime() {
  const { gameInfoStore, gameStore } = useStoreContext();
  const { whiteTime, blackTime, phase, setWhiteTime, setBlackTime } = gameInfoStore;
  const { isCheckmate, currentPlayer } = gameStore;

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
