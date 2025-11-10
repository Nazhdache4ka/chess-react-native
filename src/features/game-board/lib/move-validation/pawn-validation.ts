import { ChessPieceTeam, IChessBoardElement, IChessPieceMovement } from "@/shared/types/";
import { getCoordinatesFromId } from "@/shared/utils/";

export function pawnValidation(possibleMoves: IChessPieceMovement[], selectedElement: IChessBoardElement, elements: IChessBoardElement[][]): IChessPieceMovement[] {
    if (possibleMoves.length === 0) {
        return [];
    }

    const highlightedElements: IChessPieceMovement[] = [];

    for (const move of possibleMoves) {
        const element = elements[move.row][move.col];

        const { row: selectedElementRow, col: selectedElementCol } = getCoordinatesFromId(selectedElement.id);

        if (element.value && element.value?.team !== selectedElement.value?.team) { // diagonal capture
        
            if (move.col !== selectedElementCol) {
                highlightedElements.push(move);
            }
        }

        if (move.col === selectedElementCol) {

            const startRow = Math.min(selectedElementRow, move.row);
            const endRow = Math.max(selectedElementRow, move.row);

            if (element.value !== null) {
                continue;
            }

            let isPathClear = true;

            for (let j = startRow + 1; j <= endRow - 1; j++) {

                if (elements[j][selectedElementCol].value) {
                    isPathClear = false;
                    break;
                }
             
            }

            if (isPathClear) {
                highlightedElements.push(move);
            }
        }
    }

    return highlightedElements;
}