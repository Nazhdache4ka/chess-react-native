import {
  ChessPieceTeam,
  ChessPieceType,
  IChessBoardElement,
  MAX_ROW,
  MAX_COL,
  MIN_ROW,
  MIN_COL,
  getShallowElements,
  simulateMoves,
} from '@/shared';

export function performCastle(
  elements: IChessBoardElement[][],
  element: IChessBoardElement,
  rowIndex: number,
  colIndex: number
) {
  if (!element.value) {
    return;
  }

  if (element.value.type !== ChessPieceType.KING) {
    return;
  }

  const newElements = getShallowElements(elements);

  const movedElements = simulateMoves(newElements, element, rowIndex, colIndex);

  if (!movedElements) {
    return;
  }

  if (element.value.team === ChessPieceTeam.WHITE) {
    if (colIndex === 6) {
      const rook = movedElements[MAX_ROW][MAX_COL];
      if (rook.value) {
        movedElements[MAX_ROW][5].value = rook.value;
        movedElements[MAX_ROW][MAX_COL].value = null;
      }
    }
    if (colIndex === 2) {
      const rook = movedElements[MAX_ROW][MIN_COL];
      if (rook.value) {
        movedElements[MAX_ROW][3].value = rook.value;
        movedElements[MAX_ROW][MIN_COL].value = null;
      }
    }
  }

  if (element.value.team === ChessPieceTeam.BLACK) {
    if (colIndex === 6) {
      const rook = movedElements[MIN_ROW][MAX_COL];
      if (rook.value) {
        movedElements[MIN_ROW][5].value = rook.value;
        movedElements[MIN_ROW][MAX_COL].value = null;
      }
    }
    if (colIndex === 2) {
      const rook = movedElements[MIN_ROW][MIN_COL];
      if (rook.value) {
        movedElements[MIN_ROW][3].value = rook.value;
        movedElements[MIN_ROW][MIN_COL].value = null;
      }
    }
  }

  return movedElements;
}
