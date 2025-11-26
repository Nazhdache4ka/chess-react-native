import { ChessPieceTeam, ChessPieceType, IChessBoardElement } from '@/shared/types';
import { getCoordinatesFromId } from '@/shared/utils/';
import { rookAndQueenDetection, bishopAndQueenDetection, knightDetection, pawnDetection } from './utils/';

export function isKingChecked(elements: IChessBoardElement[][], currentPlayer: ChessPieceTeam) {
  const king = elements
    .flat()
    .find((element) => element.value?.type === ChessPieceType.KING && element.value?.team === currentPlayer);

  if (!king) {
    return false;
  }

  const { row: kingRow, col: kingCol } = getCoordinatesFromId(king.id);
  const opponentTeam = currentPlayer === ChessPieceTeam.WHITE ? ChessPieceTeam.BLACK : ChessPieceTeam.WHITE;

  if (rookAndQueenDetection(elements, opponentTeam, kingRow, kingCol)) {
    return true;
  }

  if (bishopAndQueenDetection(elements, opponentTeam, kingRow, kingCol)) {
    return true;
  }

  if (knightDetection(elements, opponentTeam, kingRow, kingCol)) {
    return true;
  }

  if (pawnDetection(elements, opponentTeam, currentPlayer, kingRow, kingCol)) {
    return true;
  }

  return false;
}
