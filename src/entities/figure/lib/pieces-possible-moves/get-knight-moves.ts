import { IChessBoardElement, IChessPieceMovement } from '@/shared/types/';
import { getCoordinatesFromId } from '@/shared/utils/';
import { MAX_ROW, MAX_COL, MIN_ROW, MIN_COL } from '@/shared/models/';

export function getKnightMoves(element: IChessBoardElement): IChessPieceMovement[] {
  if (!element.value) {
    return [];
  }

  const { row, col } = getCoordinatesFromId(element.id);

  const moves: IChessPieceMovement[] = [];

  for (const move of knightMoves) {
    const newRow = row + move.row;
    const newCol = col + move.col;

    if (newRow >= MIN_ROW && newRow <= MAX_ROW && newCol >= MIN_COL && newCol <= MAX_COL) {
      moves.push({ row: newRow, col: newCol });
    }
  }

  return moves;
}

const knightMoves = [
  { row: -2, col: -1 },
  { row: -2, col: 1 },
  { row: -1, col: -2 },
  { row: -1, col: 2 },
  { row: 1, col: -2 },
  { row: 1, col: 2 },
  { row: 2, col: -1 },
  { row: 2, col: 1 },
];
