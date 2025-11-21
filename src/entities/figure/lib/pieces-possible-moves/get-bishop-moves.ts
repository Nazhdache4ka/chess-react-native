import { IChessBoardElement, IChessPieceMovement } from '@/shared/types/';
import { MAX_ROW, MAX_COL, MIN_ROW, MIN_COL } from '@/shared/models/';
import { getCoordinatesFromId } from '@/shared/utils/';

export function getBishopMoves(element: IChessBoardElement): IChessPieceMovement[] {
  if (!element.value) {
    return [];
  }

  const { row, col } = getCoordinatesFromId(element.id);

  const moves: IChessPieceMovement[] = [];

  const directions = [
    { rowDelta: -1, colDelta: -1 },
    { rowDelta: -1, colDelta: 1 },
    { rowDelta: 1, colDelta: -1 },
    { rowDelta: 1, colDelta: 1 },
  ];

  for (const direction of directions) {
    let currentRow = row + direction.rowDelta;
    let currentCol = col + direction.colDelta;

    while (currentRow >= MIN_ROW && currentRow <= MAX_ROW && currentCol >= MIN_COL && currentCol <= MAX_COL) {
      moves.push({ row: currentRow, col: currentCol });

      currentRow += direction.rowDelta;
      currentCol += direction.colDelta;
    }
  }

  return moves;
}
