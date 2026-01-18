import { IChessBoardElement, validateMove } from '@/shared';
import { getPossibleMoves } from '@/entities/figure';

export function validateAiMove(
  selectedElement: IChessBoardElement,
  rowIndex: number,
  colIndex: number,
  elements: IChessBoardElement[][]
) {
  if (!selectedElement) {
    return false;
  }

  const possibleMoves = getPossibleMoves(selectedElement);

  const validMoves = validateMove(possibleMoves, selectedElement, elements);
  if (validMoves.length === 0) {
    return false;
  }

  return validMoves.some((move) => move.row === rowIndex && move.col === colIndex);
}
