import { MAX_COL, MIN_COL, MIN_ROW, MAX_ROW } from '@/shared/models/model';
import { ChessPieceTeam, ChessPieceType, IChessBoardElement } from '@/shared/types';

export function rookDetection(
  elements: IChessBoardElement[][],
  opponentTeam: ChessPieceTeam,
  kingRow: number,
  kingCol: number,
  pieceTypes: ChessPieceType[] = [ChessPieceType.ROOK]
) {
  for (let col = kingCol + 1; col <= MAX_COL; col++) {
    const element = elements[kingRow][col];
    if (element.value) {
      if (element.value.team === opponentTeam && pieceTypes.includes(element.value.type)) {
        return true;
      }
      break;
    }
  }

  for (let col = kingCol - 1; col >= MIN_COL; col--) {
    const element = elements[kingRow][col];
    if (element.value) {
      if (element.value.team === opponentTeam && pieceTypes.includes(element.value.type)) {
        return true;
      }
      break;
    }
  }

  for (let row = kingRow + 1; row <= MAX_ROW; row++) {
    const element = elements[row][kingCol];
    if (element.value) {
      if (element.value.team === opponentTeam && pieceTypes.includes(element.value.type)) {
        return true;
      }
      break;
    }
  }

  for (let row = kingRow - 1; row >= MIN_ROW; row--) {
    const element = elements[row][kingCol];
    if (element.value) {
      if (element.value.team === opponentTeam && pieceTypes.includes(element.value.type)) {
        return true;
      }
      break;
    }
  }

  return false;
}
