import { IChessBoardElement } from '../types';
import { MAX_COL, MAX_ROW, MIN_COL, MIN_ROW } from '../models';
import { getCoordinatesFromId } from './get-coordinates-from-id';

export function simulateMoves(
  elements: IChessBoardElement[][],
  selectedElement: IChessBoardElement,
  rowIndex: number,
  colIndex: number
) {
  if (selectedElement === null) {
    return;
  }

  const { row: selectedElementRow, col: selectedElementCol } = getCoordinatesFromId(selectedElement.id);

  if (rowIndex < MIN_ROW || colIndex < MIN_COL || rowIndex > MAX_ROW || colIndex > MAX_COL) {
    return;
  }

  const newElements = elements.map((row: IChessBoardElement[]) =>
    row.map((element: IChessBoardElement) => ({ ...element }))
  );

  const newElement = newElements[selectedElementRow][selectedElementCol].value;
  newElements[rowIndex][colIndex].value = newElement;
  newElements[selectedElementRow][selectedElementCol].value = null;

  return newElements;
}
