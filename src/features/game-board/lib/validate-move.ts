import { ChessPieceType, IChessBoardElement, IChessPieceMovement } from "../../../shared/models/interfaces";
import { pawnValidation } from "./move-validation/pawn-validation";

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