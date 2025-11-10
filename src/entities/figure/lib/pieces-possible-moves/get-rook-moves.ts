import { IChessBoardElement, IChessPieceMovement } from "@/shared/types/";
import { MAX_ROW, MAX_COL, MIN_ROW, MIN_COL } from "@/shared/models/";
import { getCoordinatesFromId } from "@/shared/utils/";

export function getRookMoves (element: IChessBoardElement): IChessPieceMovement[] {
    if (!element.value) {
        return [];
    }

    const { row, col } = getCoordinatesFromId(element.id);

    const moves: IChessPieceMovement[] = [];

    for (let i = MIN_ROW; i <= MAX_ROW; i++) {
        if (i === row) continue;

        moves.push({ row: i, col: col });
    }

    for (let j = MIN_COL; j <= MAX_COL; j++) {
        if (j === col) continue;

        moves.push({ row: row, col: j });
    }

    return moves;
}