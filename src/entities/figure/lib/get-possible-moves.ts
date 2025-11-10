import { ChessPieceType, IChessBoardElement, IChessPieceMovement } from "@/shared/types/";
import { getPawnMoves } from "./pieces-possible-moves/";

export function getPossibleMoves (element: IChessBoardElement): IChessPieceMovement[] {
    if (!element.value) {
        return [];
    }

    switch (element.value.type) {
        case ChessPieceType.PAWN:
            return getPawnMoves(element);
        default:
            return [];
    }
}