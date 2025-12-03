import { IChessBoardElement, simulateMoves } from '@/shared';

export function moveHandler(
  elements: IChessBoardElement[][],
  selectedElement: IChessBoardElement | null,
  rowIndex: number,
  colIndex: number
) {
  if (selectedElement === null) {
    return;
  }

  const newElements = simulateMoves(elements, selectedElement, rowIndex, colIndex);

  if (!newElements) {
    return;
  }

  return newElements;
}
