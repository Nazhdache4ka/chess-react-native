import {
  ChessPieceType,
  IChessBoardElement,
  ICastleRights,
  ChessPieceTeam,
  IChessPieceMovement,
  MAX_ROW,
  MIN_ROW,
} from '@/shared';

export function getCastleMoves(
  elements: IChessBoardElement[][],
  element: IChessBoardElement,
  castleRights: ICastleRights,
  isKingChecked: boolean
) {
  if (!element.value || isKingChecked || element.value.type !== ChessPieceType.KING) {
    return [];
  }

  const { hasKingMoved, hasRookKingSideMoved, hasRookQueenSideMoved } = castleRights[element.value.team];

  if (hasKingMoved || (hasRookKingSideMoved && hasRookQueenSideMoved)) {
    return [];
  }

  const moves: IChessPieceMovement[] = [];

  if (element.value.team === ChessPieceTeam.WHITE) {
    if (!hasRookKingSideMoved) {
      if (!elements[MAX_ROW][5].value && !elements[MAX_ROW][6].value) {
        moves.push({ row: MAX_ROW, col: 6 });
      }
    }
    if (!hasRookQueenSideMoved) {
      if (!elements[MAX_ROW][3].value && !elements[MAX_ROW][2].value && !elements[MAX_ROW][1].value) {
        moves.push({ row: MAX_ROW, col: 2 });
      }
    }
  }

  if (element.value.team === ChessPieceTeam.BLACK) {
    if (!hasRookKingSideMoved) {
      if (!elements[MIN_ROW][5].value && !elements[MIN_ROW][6].value) {
        moves.push({ row: MIN_ROW, col: 6 });
      }
    }
    if (!hasRookQueenSideMoved) {
      if (!elements[MIN_ROW][3].value && !elements[MIN_ROW][2].value && !elements[MIN_ROW][1].value) {
        moves.push({ row: MIN_ROW, col: 2 });
      }
    }
  }

  return moves;
}
