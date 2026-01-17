import { create } from 'zustand';
import { GamePhase, IGameInfoStore } from '../types';

export const useGameInfoStoreAi = create<IGameInfoStore>((set) => ({
  whiteTime: 10,
  blackTime: 10,
  phase: GamePhase.PAUSE,
  setWhiteTime: (whiteTime: number) => set({ whiteTime }),
  setBlackTime: (blackTime: number) => set({ blackTime }),
  setPhase: (phase: GamePhase) => set({ phase }),
}));
