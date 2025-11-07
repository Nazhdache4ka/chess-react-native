import { ChessPieceType, IChessPiece, IChessPieceMovement } from "../../../shared/models/interfaces";
import { getPawnMoves } from "./pieces-possible-moves/get-pawn-moves";

export function getPossibleMoves (value: IChessPiece | null, row: number, col: number): IChessPieceMovement[] {
    if (!value) {
        return [];
    }

    switch (value.type) {
        case ChessPieceType.PAWN:
            return getPawnMoves(value, row, col);
        default:
            return [];
    }
}