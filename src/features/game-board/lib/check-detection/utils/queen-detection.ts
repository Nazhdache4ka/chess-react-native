import { ChessPieceTeam, ChessPieceType, IChessBoardElement } from '@/shared/types';
import { bishopDetection } from './bishop-detection';
import { rookDetection } from './rook-detection';

export function queenDetection(
  elements: IChessBoardElement[][],
  opponentTeam: ChessPieceTeam,
  kingRow: number,
  kingCol: number
) {
  const queenTypes = [ChessPieceType.QUEEN];

  return (
    rookDetection(elements, opponentTeam, kingRow, kingCol, queenTypes) ||
    bishopDetection(elements, opponentTeam, kingRow, kingCol, queenTypes)
  );
}
