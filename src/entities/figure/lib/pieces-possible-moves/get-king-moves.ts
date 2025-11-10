import { MAX_COL, MAX_ROW, MIN_COL, MIN_ROW } from "@/shared/models/";
import { IChessBoardElement, IChessPieceMovement } from "@/shared/types/";
import { getCoordinatesFromId } from "@/shared/utils/";

export function getKingMoves(element: IChessBoardElement): IChessPieceMovement[] {
    if (!element.value) {
        return [];
    }

    const { row, col } = getCoordinatesFromId(element.id);

    const moves: IChessPieceMovement[] = [];
    
    for (const move of kingMoves) {
        const newRow = row + move.row;
        const newCol = col + move.col;
        if (newRow >= MIN_ROW && newRow <= MAX_ROW && newCol >= MIN_COL && newCol <= MAX_COL) {
            moves.push({ row: newRow, col: newCol });
        }
    }

    return moves;
}

const kingMoves = [
    { row: -1, col: -1 },
    { row: -1, col: 0 },
    { row: -1, col: 1 },
    { row: 0, col: -1 },
    { row: 0, col: 1 },
    { row: 1, col: -1 },
    { row: 1, col: 0 },
    { row: 1, col: 1 },
]