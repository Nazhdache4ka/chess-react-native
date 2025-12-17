import { create } from 'zustand';
import { IChessBoardElement, ChessPieceTeam, ICastleRights } from '../types';
import { getInitialCastleRights } from '../utils';

interface GameStore {
  elements: IChessBoardElement[][];
  currentPlayer: ChessPieceTeam;
  isKingChecked: boolean;
  isCheckmate: boolean;
  castleRights: ICastleRights;
  setElements: (elements: IChessBoardElement[][]) => void;
  setCurrentPlayer: (currentPlayer: ChessPieceTeam) => void;
  setIsKingChecked: (isKingChecked: boolean) => void;
  setIsCheckmate: (isCheckmate: boolean) => void;
  setCastleRights: (castleRights: ICastleRights) => void;
}

export const useGameStore = create<GameStore>((set) => ({
  elements: [],
  currentPlayer: ChessPieceTeam.WHITE,
  isKingChecked: false,
  isCheckmate: false,
  castleRights: getInitialCastleRights(),
  setCastleRights: (castleRights: ICastleRights) => set({ castleRights }),
  setElements: (elements: IChessBoardElement[][]) => set({ elements }),
  setCurrentPlayer: (currentPlayer: ChessPieceTeam) => set({ currentPlayer }),
  setIsKingChecked: (isKingChecked: boolean) => set({ isKingChecked }),
  setIsCheckmate: (isCheckmate: boolean) => set({ isCheckmate }),
}));
