import { ComponentType } from 'react';
import { ChessPieceTeam, ChessPieceType } from '@/shared/types';
import { ISvgProps } from '@/shared';
import { King } from './king';
import { Queen } from './queen';
import { Rook } from './rook';
import { Bishop } from './bishop';
import { Knight } from './knight';
import { Pawn } from './pawn';

export const pieceComponents: Record<ChessPieceTeam, Record<ChessPieceType, ComponentType<ISvgProps>>> = {
  [ChessPieceTeam.WHITE]: {
    [ChessPieceType.KING]: King,
    [ChessPieceType.QUEEN]: Queen,
    [ChessPieceType.ROOK]: Rook,
    [ChessPieceType.BISHOP]: Bishop,
    [ChessPieceType.KNIGHT]: Knight,
    [ChessPieceType.PAWN]: Pawn,
  },
  [ChessPieceTeam.BLACK]: {
    [ChessPieceType.KING]: King,
    [ChessPieceType.QUEEN]: Queen,
    [ChessPieceType.ROOK]: Rook,
    [ChessPieceType.BISHOP]: Bishop,
    [ChessPieceType.KNIGHT]: Knight,
    [ChessPieceType.PAWN]: Pawn,
  },
};
