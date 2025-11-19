import { IChessBoardElement, IChessPieceMovement } from "@/shared/types/";
import { getCoordinatesFromId } from "@/shared/utils/";
import { MAX_ROW, MAX_COL, MIN_ROW, MIN_COL } from "@/shared/models/";

export function bishopValidation(possibleMoves: IChessPieceMovement[], selectedElement: IChessBoardElement, elements: IChessBoardElement[][]): IChessPieceMovement[] {
    if (possibleMoves.length === 0) {
        return [];
    }

    const highlightedElements: IChessPieceMovement[] = [];

    const { row: selectedElementRow, col: selectedElementCol } = getCoordinatesFromId(selectedElement.id);

    for (const move of possibleMoves) {
        const element = elements[move.row][move.col];

        const absX = Math.abs(move.row - selectedElementRow);
        const absY = Math.abs(move.col - selectedElementCol);

        if (absX !== absY) {
            continue;
        }

        if (element.value?.team === selectedElement.value?.team) {
            continue;
        }

        const rowDirection = selectedElementRow < move.row ? 1 : -1;
        const colDirection = selectedElementCol < move.col ? 1 : -1;

        let isPathClear = true;

        let currentRow = selectedElementRow + rowDirection;
        let currentCol = selectedElementCol + colDirection;

        if (currentRow < MIN_ROW || currentRow > MAX_ROW || currentCol < MIN_COL || currentCol > MAX_COL) {
            continue;
        }

        while (currentRow !== move.row && currentCol !== move.col) {
            if (elements[currentRow]?.[currentCol]?.value !== null) {
                isPathClear = false;
                break;
            }

            currentRow += rowDirection;
            currentCol += colDirection;
        }

        if (isPathClear) {
            highlightedElements.push(move);
        }
    }


    return highlightedElements;
}