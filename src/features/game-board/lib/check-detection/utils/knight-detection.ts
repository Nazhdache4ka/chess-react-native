import { ChessPieceTeam, IChessBoardElement } from '@/shared/types';
import { MIN_ROW, MAX_ROW, MIN_COL, MAX_COL } from '@/shared/models';
import { knightMoves } from '@/shared/models';
import { ChessPieceType } from '@/shared/types';

export function knightDetection(
  elements: IChessBoardElement[][],
  opponentTeam: ChessPieceTeam,
  kingRow: number,
  kingCol: number
) {
  for (const move of knightMoves) {
    const newRow = kingRow + move.row;
    const newCol = kingCol + move.col;
    if (newRow >= MIN_ROW && newRow <= MAX_ROW && newCol >= MIN_COL && newCol <= MAX_COL) {
      const element = elements[newRow][newCol];
      if (element.value && element.value.team === opponentTeam && element.value.type === ChessPieceType.KNIGHT) {
        return true;
      }
    }
  }

  return false;
}
