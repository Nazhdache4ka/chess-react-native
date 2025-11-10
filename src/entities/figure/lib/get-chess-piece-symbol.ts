import { ChessPieceTeam, IChessPiece } from "@/shared/types/";
import { BLACK_PIECES, WHITE_PIECES } from "../models/";

export function getChessPieceSymbol(value: IChessPiece | null): string {
    if (!value) {
        return '';
    }

    if (value.team === ChessPieceTeam.WHITE) {
        return WHITE_PIECES[value.type];
    }

    return BLACK_PIECES[value.type];
}