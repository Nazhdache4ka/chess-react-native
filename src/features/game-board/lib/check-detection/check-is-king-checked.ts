import { ChessPieceTeam, ChessPieceType, IChessBoardElement } from '@/shared/types';
import { getCoordinatesFromId } from '@/shared/utils/';
import { rookDetection, bishopDetection, knightDetection, pawnDetection, queenDetection } from './utils';

export function checkIsKingChecked(elements: IChessBoardElement[][], currentPlayer: ChessPieceTeam) {
  const king = elements
    .flat()
    .find((element) => element.value?.type === ChessPieceType.KING && element.value?.team === currentPlayer);

  if (!king) {
    return false;
  }

  const { row: kingRow, col: kingCol } = getCoordinatesFromId(king.id);
  const opponentTeam = currentPlayer === ChessPieceTeam.WHITE ? ChessPieceTeam.BLACK : ChessPieceTeam.WHITE;

  if (rookDetection(elements, opponentTeam, kingRow, kingCol)) {
    return true;
  }

  if (bishopDetection(elements, opponentTeam, kingRow, kingCol)) {
    return true;
  }

  if (knightDetection(elements, opponentTeam, kingRow, kingCol)) {
    return true;
  }

  if (pawnDetection(elements, opponentTeam, currentPlayer, kingRow, kingCol)) {
    return true;
  }

  if (queenDetection(elements, opponentTeam, kingRow, kingCol)) {
    return true;
  }

  return false;
}
