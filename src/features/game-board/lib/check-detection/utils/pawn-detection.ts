import { ChessPieceTeam, IChessBoardElement } from '@/shared/types';
import { MIN_ROW, MAX_ROW, MIN_COL, MAX_COL } from '@/shared/models/model';
import { ChessPieceType } from '@/shared/types';

export function pawnDetection(
  elements: IChessBoardElement[][],
  opponentTeam: ChessPieceTeam,
  currentPlayer: ChessPieceTeam,
  kingRow: number,
  kingCol: number
) {
  // Check for pawns
  // White pawns attack up-left and up-right (row - 1)
  // Black pawns attack down-left and down-right (row + 1)
  if (currentPlayer === ChessPieceTeam.WHITE) {
    // Check for black pawns attacking from below (up-left and up-right from king's perspective)
    const pawnRow = kingRow - 1;
    if (pawnRow >= MIN_ROW) {
      // Check up-left
      if (kingCol - 1 >= MIN_COL) {
        const element = elements[pawnRow][kingCol - 1];
        if (element.value && element.value.team === opponentTeam && element.value.type === ChessPieceType.PAWN) {
          return true;
        }
      }
      // Check up-right
      if (kingCol + 1 <= MAX_COL) {
        const element = elements[pawnRow][kingCol + 1];
        if (element.value && element.value.team === opponentTeam && element.value.type === ChessPieceType.PAWN) {
          return true;
        }
      }
    }
  } else {
    // Check for white pawns attacking from above (down-left and down-right from king's perspective)
    const pawnRow = kingRow + 1;
    if (pawnRow <= MAX_ROW) {
      // Check down-left
      if (kingCol - 1 >= MIN_COL) {
        const element = elements[pawnRow][kingCol - 1];
        if (element.value && element.value.team === opponentTeam && element.value.type === ChessPieceType.PAWN) {
          return true;
        }
      }
      // Check down-right
      if (kingCol + 1 <= MAX_COL) {
        const element = elements[pawnRow][kingCol + 1];
        if (element.value && element.value.team === opponentTeam && element.value.type === ChessPieceType.PAWN) {
          return true;
        }
      }
    }
  }
}
