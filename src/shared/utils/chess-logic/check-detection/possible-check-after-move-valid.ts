import { ChessPieceTeam, IChessBoardElement } from '@/shared/types';
import { checkIsKingChecked } from './check-is-king-checked';
import { getCoordinatesFromId, getShallowElements } from '@/shared/utils';

export function possibleCheckAfterMoveValidation(
  elements: IChessBoardElement[][],
  currentPlayer: ChessPieceTeam,
  selectedElement: IChessBoardElement,
  rowIndex: number,
  colIndex: number
) {
  const { row: selectedElementRow, col: selectedElementCol } = getCoordinatesFromId(selectedElement.id);

  const newElements = getShallowElements(elements);

  const newElement = newElements[selectedElementRow][selectedElementCol].value;
  newElements[rowIndex][colIndex].value = newElement;
  newElements[selectedElementRow][selectedElementCol].value = null;

  if (checkIsKingChecked(newElements, currentPlayer)) {
    return true;
  }
  return false;
}
