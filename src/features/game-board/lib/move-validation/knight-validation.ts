import { IChessBoardElement, IChessPieceMovement } from '@/shared/types/';
import { getCoordinatesFromId } from '@/shared/utils/';

export function knightValidation(
  possibleMoves: IChessPieceMovement[],
  selectedElement: IChessBoardElement,
  elements: IChessBoardElement[][]
): IChessPieceMovement[] {
  if (possibleMoves.length === 0) {
    return [];
  }

  const { row: selectedElementRow, col: selectedElementCol } = getCoordinatesFromId(selectedElement.id);

  const highlightedElements: IChessPieceMovement[] = [];

  for (const move of possibleMoves) {
    const element = elements[move.row][move.col];

    if (element.value?.team === selectedElement.value?.team) {
      continue;
    }

    highlightedElements.push(move);
  }

  return highlightedElements;
}
