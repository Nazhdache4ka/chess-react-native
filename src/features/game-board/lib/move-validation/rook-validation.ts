import { IChessBoardElement, IChessPieceMovement } from "@/shared/types/";
import { getCoordinatesFromId } from "@/shared/utils/";

export function rookValidation(possibleMoves: IChessPieceMovement[], selectedElement: IChessBoardElement, elements: IChessBoardElement[][]): IChessPieceMovement[] {
    if (possibleMoves.length === 0) {
        return [];
    }

    const highlightedElements: IChessPieceMovement[] = [];

    const { row: selectedElementRow, col: selectedElementCol } = getCoordinatesFromId(selectedElement.id);

    for (const move of possibleMoves) {        
        const element = elements[move.row][move.col];

        const isHorizontalMove = move.row === selectedElementRow;
        const isVerticalMove = move.col === selectedElementCol;

        if (isHorizontalMove) {
            const startCol = Math.min(selectedElementCol, move.col);
            const endCol = Math.max(selectedElementCol, move.col);

            if (element.value?.team === selectedElement.value?.team) {
                continue;
            }

            let isPathClear = true;

            for (let i = startCol + 1; i <= endCol - 1; i++) {
                if (elements[selectedElementRow][i].value) {
                    isPathClear = false;
                    break;
                }
            }

            if (isPathClear) {
                highlightedElements.push(move);
            }
        }

        if (isVerticalMove) {
            const startRow = Math.min(selectedElementRow, move.row);
            const endRow = Math.max(selectedElementRow, move.row);

            if (element.value?.team === selectedElement.value?.team) {
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