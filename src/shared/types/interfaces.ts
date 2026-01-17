import type { ChatCompletionMessageParam } from 'openai/resources/chat/completions';

export const ChessPieceTeam = {
  WHITE: 'white',
  BLACK: 'black',
} as const;

export type ChessPieceTeam = (typeof ChessPieceTeam)[keyof typeof ChessPieceTeam];

export const ChessPieceType = {
  KING: 'king',
  QUEEN: 'queen',
  ROOK: 'rook',
  BISHOP: 'bishop',
  KNIGHT: 'knight',
  PAWN: 'pawn',
} as const;

export const NavigationScreen = {
  AI: 'ai',
  SINGLE_PLAYER: 'single-player',
} as const;

export type NavigationScreen = (typeof NavigationScreen)[keyof typeof NavigationScreen];

export type ChessPieceType = (typeof ChessPieceType)[keyof typeof ChessPieceType];

export interface IChessPiece {
  type: ChessPieceType;
  team: ChessPieceTeam;
}

export interface IChessBoardElement {
  id: string;
  value: IChessPiece | null;
}

export interface IChessPieceMovement {
  row: number;
  col: number;
}

export interface IPlayerMove {
  piece: ChessPieceType;
  from: string;
  to: string;
  isPromotion?: boolean;
  isCastle?: boolean;
}

export const GamePhase = {
  START: 'start',
  PAUSE: 'pause',
  ONGOING: 'ongoing',
  FINISHED: 'finished',
} as const;

export type GamePhase = (typeof GamePhase)[keyof typeof GamePhase];

export interface ISvgProps {
  width?: number | string;
  height?: number | string;
  color?: ChessPieceTeam;
}

export interface ITargetPawn {
  selectedElement: IChessBoardElement;
  rowIndex: number;
  colIndex: number;
}

export interface ICastleInfo {
  hasKingMoved: boolean;
  hasRookKingSideMoved: boolean;
  hasRookQueenSideMoved: boolean;
}

export interface ICastleRights {
  white: ICastleInfo;
  black: ICastleInfo;
}

export interface IChatSession {
  initialize(apiKey: string, systemPrompt: string): void;
  sendMove(move: string): Promise<string>;
  reset(): void;
}

export type ChatSession = ChatCompletionMessageParam[];

export interface IGameStore {
  elements: IChessBoardElement[][];
  currentPlayer: ChessPieceTeam;
  isKingChecked: boolean;
  isCheckmate: boolean;
  castleRights: ICastleRights;
  isInitialized: boolean;
  setElements: (elements: IChessBoardElement[][]) => void;
  setCurrentPlayer: (currentPlayer: ChessPieceTeam) => void;
  setIsKingChecked: (isKingChecked: boolean) => void;
  setIsCheckmate: (isCheckmate: boolean) => void;
  setCastleRights: (castleRights: ICastleRights) => void;
  setIsInitialized: (isInitialized: boolean) => void;
}

export interface IGameInfoStore {
  whiteTime: number;
  blackTime: number;
  phase: GamePhase;
  setWhiteTime: (whiteTime: number) => void;
  setBlackTime: (blackTime: number) => void;
  setPhase: (phase: GamePhase) => void;
}

export interface IAiMoveResponse {
  piece: ChessPieceType;
  from: string;
  to: string;
  castling?: 'kingside' | 'queenside';
  promotion?: string;
  check?: boolean;
  checkmate?: boolean;
}
