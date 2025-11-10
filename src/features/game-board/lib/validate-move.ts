import { ChessPieceType, IChessBoardElement, IChessPieceMovement } from "@/shared/types/";
import { pawnValidation } from "./move-validation/";

export function validateMove(possibleMoves: IChessPieceMovement[], selectedElement: IChessBoardElement, elements: IChessBoardElement[][]): IChessPieceMovement[] {
    if (possibleMoves.length === 0) {
        return [];
    }

    switch (selectedElement.value?.type) {
        case ChessPieceType.PAWN:
            return pawnValidation(possibleMoves, selectedElement, elements);
        default:
            return [];
    }
}