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

export const GamePhase = {
  START: 'start',
  PAUSE: 'pause',
  ONGOING: 'ongoing',
} as const;

export type GamePhase = (typeof GamePhase)[keyof typeof GamePhase];
