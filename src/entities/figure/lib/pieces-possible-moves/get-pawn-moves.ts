import { ChessPieceTeam, IChessPiece, IChessPieceMovement } from "../../../../shared/models/interfaces";
import { MAX_ROW, MAX_COL, MIN_ROW, MIN_COL } from "../../../../shared/models/model";

export function getPawnMoves (value: IChessPiece | null, row: number, col: number): IChessPieceMovement[] {
    if (!value) {
        return [];
    }

    const moves: IChessPieceMovement[] = [];

    if (value.team === ChessPieceTeam.WHITE) {

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

    if (value.team === ChessPieceTeam.BLACK) {

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