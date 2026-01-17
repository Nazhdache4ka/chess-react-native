import { create } from 'zustand';
import { ChessPieceTeam, ICastleRights, IChessBoardElement, IGameStore } from '../types';
import { getInitialCastleRights } from '../utils';

export const useGameStoreAi = create<IGameStore>((set) => ({
  elements: [],
  currentPlayer: ChessPieceTeam.WHITE,
  isKingChecked: false,
  isCheckmate: false,
  castleRights: getInitialCastleRights(),
  isInitialized: false,
  setCastleRights: (castleRights: ICastleRights) => set({ castleRights }),
  setElements: (elements: IChessBoardElement[][]) => set({ elements }),
  setCurrentPlayer: (currentPlayer: ChessPieceTeam) => set({ currentPlayer }),
  setIsKingChecked: (isKingChecked: boolean) => set({ isKingChecked }),
  setIsCheckmate: (isCheckmate: boolean) => set({ isCheckmate }),
  setIsInitialized: (isInitialized: boolean) => set({ isInitialized }),
}));
