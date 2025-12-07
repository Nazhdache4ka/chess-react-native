import { create } from 'zustand';
import { GamePhase } from '../types';

interface GameInfoStore {
  whiteTime: number;
  blackTime: number;
  phase: GamePhase;
  setWhiteTime: (whiteTime: number) => void;
  setBlackTime: (blackTime: number) => void;
  setPhase: (phase: GamePhase) => void;
}

export const useGameInfoStore = create<GameInfoStore>((set) => ({
  whiteTime: 10,
  blackTime: 10,
  phase: GamePhase.PAUSE,
  setWhiteTime: (whiteTime: number) => set({ whiteTime }),
  setBlackTime: (blackTime: number) => set({ blackTime }),
  setPhase: (phase: GamePhase) => set({ phase }),
}));
