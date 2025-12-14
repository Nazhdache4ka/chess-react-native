import {
  IChessBoardElement,
  ChessPieceTeam,
  ChessPieceType,
  ICastleRights,
  MAX_ROW,
  MAX_COL,
  MIN_COL,
  MIN_ROW,
} from '@/shared';

export function setRights(
  element: IChessBoardElement,
  rowIndex: number,
  colIndex: number,
  castleRights: ICastleRights
) {
  if (!element.value) {
    return;
  }

  if (castleRights.white.hasKingMoved && castleRights.black.hasKingMoved) {
    return;
  }

  const updatedCastleRights = {
    white: { ...castleRights.white },
    black: { ...castleRights.black },
  };

  if (element.value.team === ChessPieceTeam.WHITE) {
    if (element.value.type === ChessPieceType.KING) {
      updatedCastleRights.white.hasKingMoved = true;
    }
    if (element.value.type === ChessPieceType.ROOK) {
      if (rowIndex === MAX_ROW && colIndex === MAX_COL) {
        updatedCastleRights.white.hasRookKingSideMoved = true;
      }
      if (rowIndex === MAX_ROW && colIndex === MIN_COL) {
        updatedCastleRights.white.hasRookQueenSideMoved = true;
      }
    }
  }

  if (element.value.team === ChessPieceTeam.BLACK) {
    if (element.value.type === ChessPieceType.KING) {
      updatedCastleRights.black.hasKingMoved = true;
    }
    if (element.value.type === ChessPieceType.ROOK) {
      if (rowIndex === MIN_ROW && colIndex === MAX_COL) {
        updatedCastleRights.black.hasRookKingSideMoved = true;
      }
      if (rowIndex === MIN_ROW && colIndex === MIN_COL) {
        updatedCastleRights.black.hasRookQueenSideMoved = true;
      }
    }
  }

  return updatedCastleRights;
}
