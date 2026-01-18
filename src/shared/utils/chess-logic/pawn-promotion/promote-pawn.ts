import {
  ChessPieceType,
  IChessBoardElement,
  getCoordinatesFromId,
  simulateMoves,
  ITargetPawn,
  getShallowElements,
} from '@/shared';

export function promotePawn(
  elements: IChessBoardElement[][],
  targetPawn: ITargetPawn,
  selectedPiece: ChessPieceType | null
) {
  if (!targetPawn.selectedElement.value) {
    return;
  }

  if (!selectedPiece) {
    return;
  }

  const { row, col } = getCoordinatesFromId(targetPawn.selectedElement.id);

  const newElements = getShallowElements(elements);

  const newElement = newElements[row][col];

  if (!newElement.value) {
    return;
  }

  newElement.value.type = selectedPiece;

  const movedElements = simulateMoves(newElements, newElement, targetPawn.rowIndex, targetPawn.colIndex);

  return movedElements;
}
