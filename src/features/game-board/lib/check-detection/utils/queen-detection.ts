import { ChessPieceTeam, IChessBoardElement } from '@/shared/types';
import { bishopDetection } from './bishop-detection';
import { rookDetection } from './rook-detection';

export function queenDetection(
  elements: IChessBoardElement[][],
  opponentTeam: ChessPieceTeam,
  kingRow: number,
  kingCol: number
) {
  return (
    rookDetection(elements, opponentTeam, kingRow, kingCol) || bishopDetection(elements, opponentTeam, kingRow, kingCol)
  );
}
