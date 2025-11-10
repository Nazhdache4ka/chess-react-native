import { IChessBoardElement, IChessPieceMovement } from "@/shared/types/";
import { rookValidation } from "./rook-validation";
import { bishopValidation } from "./bishop-validation";

export function queenValidation(possibleMoves: IChessPieceMovement[], selectedElement: IChessBoardElement, elements: IChessBoardElement[][]): IChessPieceMovement[] {
    if (possibleMoves.length === 0) {
        return [];
    }

    return [...rookValidation(possibleMoves, selectedElement, elements), ...bishopValidation(possibleMoves, selectedElement, elements)];
}