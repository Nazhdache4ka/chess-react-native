import { ChessPieceTeam, useGameStore } from '@/shared';
import { useEffect, useState } from 'react';

export function useGameTime() {
  const [whiteTime, setWhiteTime] = useState(60);
  const [blackTime, setBlackTime] = useState(60);
  const { isCheckmate, currentPlayer } = useGameStore();

  useEffect(() => {
    if (isCheckmate) {
      return;
    }

    const interval = setInterval(() => {
      if (currentPlayer === ChessPieceTeam.WHITE) {
        setWhiteTime((prev) => {
          if (prev > 0) {
            return prev - 1;
          }
          return 0;
        });
      } else {
        setBlackTime((prev) => {
          if (prev > 0) {
            return prev - 1;
          }
          return 0;
        });
      }
    }, 1000);

    return () => clearInterval(interval);
  }, [currentPlayer, isCheckmate]);

  return {
    whiteTime,
    blackTime,
  };
}
