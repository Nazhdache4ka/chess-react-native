import { ComponentType } from 'react';
import { ChessPieceTeam, ChessPieceType } from '@/shared/types/';
import {
  WhiteKing,
  WhiteQueen,
  WhiteRook,
  WhiteBishop,
  WhiteKnight,
  WhitePawn,
  BlackKing,
  BlackQueen,
  BlackRook,
  BlackBishop,
  BlackKnight,
  BlackPawn,
} from './index';

interface PieceComponentProps {
  width?: number | string;
  height?: number | string;
}

export const pieceComponents: Record<ChessPieceTeam, Record<ChessPieceType, ComponentType<PieceComponentProps>>> = {
  [ChessPieceTeam.WHITE]: {
    [ChessPieceType.KING]: WhiteKing,
    [ChessPieceType.QUEEN]: WhiteQueen,
    [ChessPieceType.ROOK]: WhiteRook,
    [ChessPieceType.BISHOP]: WhiteBishop,
    [ChessPieceType.KNIGHT]: WhiteKnight,
    [ChessPieceType.PAWN]: WhitePawn,
  },
  [ChessPieceTeam.BLACK]: {
    [ChessPieceType.KING]: BlackKing,
    [ChessPieceType.QUEEN]: BlackQueen,
    [ChessPieceType.ROOK]: BlackRook,
    [ChessPieceType.BISHOP]: BlackBishop,
    [ChessPieceType.KNIGHT]: BlackKnight,
    [ChessPieceType.PAWN]: BlackPawn,
  },
};
