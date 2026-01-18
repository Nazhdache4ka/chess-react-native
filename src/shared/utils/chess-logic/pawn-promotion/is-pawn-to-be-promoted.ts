import { IChessBoardElement, ChessPieceType, ChessPieceTeam, MAX_ROW, MIN_ROW } from '@/shared';

export function isPawnToBePromoted(selectedElement: IChessBoardElement, rowIndex: number) {
  if (!selectedElement.value) {
    return false;
  }

  if (selectedElement.value.type !== ChessPieceType.PAWN) {
    return false;
  }

  if (rowIndex === MIN_ROW && selectedElement.value.team === ChessPieceTeam.WHITE) {
    return true;
  }

  if (rowIndex === MAX_ROW && selectedElement.value.team === ChessPieceTeam.BLACK) {
    return true;
  }

  return false;
}
