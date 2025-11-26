import { ChessPieceTeam, IChessBoardElement } from '@/shared/types';
import { MIN_ROW, MAX_ROW, MIN_COL, MAX_COL } from '@/shared/models/model';
import { ChessPieceType } from '@/shared/types';

export function knightDetection(
  elements: IChessBoardElement[][],
  opponentTeam: ChessPieceTeam,
  kingRow: number,
  kingCol: number
) {
  for (const coord of knightCoords) {
    const newRow = kingRow + coord.row;
    const newCol = kingCol + coord.col;
    if (newRow >= MIN_ROW && newRow <= MAX_ROW && newCol >= MIN_COL && newCol <= MAX_COL) {
      const element = elements[newRow][newCol];
      if (element.value && element.value.team === opponentTeam && element.value.type === ChessPieceType.KNIGHT) {
        return true;
      }
    }
  }

  return false;
}

const knightCoords = [
  { row: -2, col: -1 },
  { row: -2, col: 1 },
  { row: -1, col: -2 },
  { row: -1, col: 2 },
  { row: 1, col: -2 },
  { row: 1, col: 2 },
  { row: 2, col: -1 },
  { row: 2, col: 1 },
];
