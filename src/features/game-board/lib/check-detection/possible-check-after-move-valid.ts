import { ChessPieceTeam, IChessBoardElement } from '@/shared/types';
import { isKingChecked } from './is-king-checked';
import { simulateMoves } from '@/shared/utils/';

export function possibleCheckAfterMoveValidation(
  elements: IChessBoardElement[][],
  currentPlayer: ChessPieceTeam,
  selectedElement: IChessBoardElement,
  rowIndex: number,
  colIndex: number
) {
  const newElements = simulateMoves(elements, selectedElement, rowIndex, colIndex);

  if (!newElements) {
    return false;
  }

  if (isKingChecked(newElements, currentPlayer)) {
    return true;
  }
  return false;
}
