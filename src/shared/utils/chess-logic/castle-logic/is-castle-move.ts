import { ChessPieceType, ICastleRights, IChessBoardElement, MAX_ROW, MIN_ROW } from '@/shared';

export function isCastleMove(
  elements: IChessBoardElement[][],
  element: IChessBoardElement,
  rowIndex: number,
  colIndex: number,
  castleRights: ICastleRights
) {
  if (!element.value) {
    return false;
  }

  if (element.value.type !== ChessPieceType.KING) {
    return false;
  }

  const { hasKingMoved, hasRookKingSideMoved, hasRookQueenSideMoved } = castleRights[element.value.team];

  if (hasKingMoved) {
    return false;
  }

  if (hasRookKingSideMoved && hasRookQueenSideMoved) {
    return false;
  }

  if (rowIndex === MAX_ROW && colIndex === 6) {
    if (!elements[MAX_ROW][5].value && !elements[MAX_ROW][6].value) {
      return true;
    }
  }

  if (rowIndex === MAX_ROW && colIndex === 2) {
    if (!elements[MAX_ROW][3].value && !elements[MAX_ROW][2].value && !elements[MAX_ROW][1].value) {
      return true;
    }
  }

  if (rowIndex === MIN_ROW && colIndex === 6) {
    if (!elements[MIN_ROW][5].value && !elements[MIN_ROW][6].value) {
      return true;
    }
  }

  if (rowIndex === MIN_ROW && colIndex === 2) {
    if (!elements[MIN_ROW][3].value && !elements[MIN_ROW][2].value && !elements[MIN_ROW][1].value) {
      return true;
    }
  }

  return false;
}
