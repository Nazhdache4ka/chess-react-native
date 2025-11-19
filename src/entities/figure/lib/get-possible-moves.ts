import { ChessPieceType, IChessBoardElement, IChessPieceMovement } from "@/shared/types/";
import { getPawnMoves, getRookMoves, getKnightMoves, getKingMoves, getBishopMoves, getQueenMoves } from "./pieces-possible-moves/";

export function getPossibleMoves (element: IChessBoardElement): IChessPieceMovement[] {
    if (!element.value) {
        return [];
    }

    switch (element.value.type) {
        case ChessPieceType.PAWN:
            return getPawnMoves(element);
        case ChessPieceType.ROOK:
            return getRookMoves(element);
        case ChessPieceType.KNIGHT:
            return getKnightMoves(element);
        case ChessPieceType.KING:
            return getKingMoves(element);
        case ChessPieceType.BISHOP:
            return getBishopMoves(element);
        case ChessPieceType.QUEEN:
            return getQueenMoves(element);
        default:
            return [];
    }
}