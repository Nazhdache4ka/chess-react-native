import { ChessPieceType } from "@/shared/types/"

export const WHITE_PIECES = {
    [ChessPieceType.KING]: '♔',
    [ChessPieceType.QUEEN]: '♕',
    [ChessPieceType.ROOK]: '♖',
    [ChessPieceType.BISHOP]: '♗',
    [ChessPieceType.KNIGHT]: '♘',
    [ChessPieceType.PAWN]: '♙',
}

export const BLACK_PIECES = {
    [ChessPieceType.KING]: '♚',
    [ChessPieceType.QUEEN]: '♛',
    [ChessPieceType.ROOK]: '♜',
    [ChessPieceType.BISHOP]: '♝',
    [ChessPieceType.KNIGHT]: '♞',
    [ChessPieceType.PAWN]: '♟',
}