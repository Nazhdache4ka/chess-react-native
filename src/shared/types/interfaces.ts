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
