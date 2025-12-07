import { create } from 'zustand';

interface GameInfoStore {
  whiteTime: number;
  blackTime: number;
  setWhiteTime: (whiteTime: number) => void;
  setBlackTime: (blackTime: number) => void;
}

export const useGameInfoStore = create<GameInfoStore>((set) => ({
  whiteTime: 60,
  blackTime: 60,
  setWhiteTime: (whiteTime: number) => set({ whiteTime }),
  setBlackTime: (blackTime: number) => set({ blackTime }),
}));
