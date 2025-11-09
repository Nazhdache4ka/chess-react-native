import { ChessPieceTeam, IChessBoardElement, IChessPieceMovement } from "../../../../shared/models/interfaces";
import { MAX_ROW, MAX_COL, MIN_ROW, MIN_COL } from "../../../../shared/models/model";

export function getPawnMoves (element: IChessBoardElement): IChessPieceMovement[] {
    if (!element.value) {
        return [];
    }

    const row = parseInt(element.id.split('-')[0]);
    const col = parseInt(element.id.split('-')[1]);

    const moves: IChessPieceMovement[] = [];

    if (element.value.team === ChessPieceTeam.WHITE) {

        if (row > MIN_ROW && row < MAX_ROW) {

            if (row === 6) { // first move
                moves.push({ row: row - 2, col: col });
            }

            moves.push({ row: row - 1, col: col });

            if (col > MIN_COL) {
                moves.push({ row: row - 1, col: col - 1 });
            }

            if (col < MAX_COL) {
                moves.push({ row: row - 1, col: col + 1 });
            }
        }
    } 

    if (element.value.team === ChessPieceTeam.BLACK) {

        if (row > MIN_ROW && row < MAX_ROW) {

            if (row === 1) { // first move
                moves.push({ row: row + 2, col: col });
            }

            moves.push({ row: row + 1, col: col });

            if (col > MIN_COL) {
                moves.push({ row: row + 1, col: col - 1 });
            }

            if (col < MAX_COL) {
                moves.push({ row: row + 1, col: col + 1 });
            }
        }
    }

    return moves;
}