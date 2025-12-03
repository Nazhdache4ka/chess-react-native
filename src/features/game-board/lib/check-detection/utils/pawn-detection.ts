import { ChessPieceTeam, IChessBoardElement, ChessPieceType } from '@/shared/types';
import { MIN_ROW, MAX_ROW, MIN_COL, MAX_COL } from '@/shared/models';

export function pawnDetection(
  elements: IChessBoardElement[][],
  opponentTeam: ChessPieceTeam,
  currentPlayer: ChessPieceTeam,
  kingRow: number,
  kingCol: number
) {
  if (currentPlayer === ChessPieceTeam.WHITE) {
    const pawnRow = kingRow - 1;
    if (pawnRow >= MIN_ROW) {
      if (kingCol - 1 >= MIN_COL) {
        const element = elements[pawnRow][kingCol - 1];
        if (element.value && element.value.team === opponentTeam && element.value.type === ChessPieceType.PAWN) {
          return true;
        }
      }

      if (kingCol + 1 <= MAX_COL) {
        const element = elements[pawnRow][kingCol + 1];
        if (element.value && element.value.team === opponentTeam && element.value.type === ChessPieceType.PAWN) {
          return true;
        }
      }
    }
  } else {
    const pawnRow = kingRow + 1;
    if (pawnRow <= MAX_ROW) {
      if (kingCol - 1 >= MIN_COL) {
        const element = elements[pawnRow][kingCol - 1];
        if (element.value && element.value.team === opponentTeam && element.value.type === ChessPieceType.PAWN) {
          return true;
        }
      }

      if (kingCol + 1 <= MAX_COL) {
        const element = elements[pawnRow][kingCol + 1];
        if (element.value && element.value.team === opponentTeam && element.value.type === ChessPieceType.PAWN) {
          return true;
        }
      }
    }
  }

  return false;
}
