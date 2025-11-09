import { ChessPieceType, IChessBoardElement, IChessPieceMovement } from "../../../shared/models/interfaces";
import { getPawnMoves } from "./pieces-possible-moves/get-pawn-moves";

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