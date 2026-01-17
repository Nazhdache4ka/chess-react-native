import { IAiMoveResponse, IChessBoardElement } from '@/shared';
import { convertNotationToCoordinates } from './convert-coordinates';
import { validateAiMove } from './vaildate-ai-move';

export function convertAiMove(
  aiResponse: IAiMoveResponse | null,
  elements: IChessBoardElement[][]
): { selectedElement: IChessBoardElement | null; rowIndex: number; colIndex: number } | null {
  if (!aiResponse) {
    return null;
  }

  try {
    const aiMove = aiResponse;

    if (!aiMove.from || !aiMove.to) {
      return null;
    }

    const fromCoords = convertNotationToCoordinates(aiMove.from);
    if (!fromCoords) {
      return null;
    }

    const toCoords = convertNotationToCoordinates(aiMove.to);
    if (!toCoords) {
      return null;
    }

    const selectedElement = elements[fromCoords.row]?.[fromCoords.col];
    if (!selectedElement) {
      return null;
    }

    if (!selectedElement.value || selectedElement.value.type !== aiMove.piece) {
      return null;
    }

    if (!validateAiMove(selectedElement, toCoords.row, toCoords.col, elements)) {
      console.error('Error invalid AI move');
      return null;
    }

    return {
      selectedElement,
      rowIndex: toCoords.row,
      colIndex: toCoords.col,
    };
  } catch (error) {
    console.error('Error parsing AI move:', error);
    return null;
  }
}
