import { MAX_COL, MIN_COL, MIN_ROW, MAX_ROW } from '@/shared/models/model';
import { ChessPieceTeam, ChessPieceType, IChessBoardElement } from '@/shared/types';

export function bishopDetection(
  elements: IChessBoardElement[][],
  opponentTeam: ChessPieceTeam,
  kingRow: number,
  kingCol: number,
  pieceTypes: ChessPieceType[] = [ChessPieceType.BISHOP]
) {
  for (let row = kingRow - 1, col = kingCol + 1; row >= MIN_ROW && col <= MAX_COL; row--, col++) {
    const element = elements[row][col];
    if (element.value) {
      if (element.value.team === opponentTeam && pieceTypes.includes(element.value.type)) {
        return true;
      }
      break;
    }
  }

  for (let row = kingRow - 1, col = kingCol - 1; row >= MIN_ROW && col >= MIN_COL; row--, col--) {
    const element = elements[row][col];
    if (element.value) {
      if (element.value.team === opponentTeam && pieceTypes.includes(element.value.type)) {
        return true;
      }
      break;
    }
  }

  for (let row = kingRow + 1, col = kingCol + 1; row <= MAX_ROW && col <= MAX_COL; row++, col++) {
    const element = elements[row][col];
    if (element.value) {
      if (element.value.team === opponentTeam && pieceTypes.includes(element.value.type)) {
        return true;
      }
      break;
    }
  }

  for (let row = kingRow + 1, col = kingCol - 1; row <= MAX_ROW && col >= MIN_COL; row++, col--) {
    const element = elements[row][col];
    if (element.value) {
      if (element.value.team === opponentTeam && pieceTypes.includes(element.value.type)) {
        return true;
      }
      break;
    }
  }

  return false;
}
