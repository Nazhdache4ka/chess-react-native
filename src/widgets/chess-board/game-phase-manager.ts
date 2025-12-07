import { useEffect } from 'react';
import { useGameInfoStore, useGameStore, GamePhase } from '@/shared';

export function GamePhaseManager() {
  const { whiteTime, blackTime, setPhase } = useGameInfoStore();

  useEffect(() => {
    const unsubscribeChekmate = useGameStore.subscribe((state) => {
      if (state.isCheckmate) {
        setPhase(GamePhase.FINISHED);
      }
    });

    return () => unsubscribeChekmate();
  }, [setPhase]);

  useEffect(() => {
    if (whiteTime !== 0 && blackTime !== 0) {
      return;
    }

    setPhase(GamePhase.FINISHED);
  }, [whiteTime, blackTime, setPhase]);

  return null;
}
