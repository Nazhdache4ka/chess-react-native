import { useEffect } from 'react';
import { GamePhase, useStoreContext } from '@/shared';

export function GamePhaseManager() {
  const { gameInfoStore, gameStore } = useStoreContext();
  const { whiteTime, blackTime, setPhase } = gameInfoStore;
  const { isCheckmate } = gameStore;

  useEffect(() => {
    if (isCheckmate) {
      setPhase(GamePhase.FINISHED);
    }
  }, [isCheckmate, setPhase]);

  useEffect(() => {
    if (whiteTime !== 0 && blackTime !== 0) {
      return;
    }

    setPhase(GamePhase.FINISHED);
  }, [whiteTime, blackTime, setPhase]);

  return null;
}
