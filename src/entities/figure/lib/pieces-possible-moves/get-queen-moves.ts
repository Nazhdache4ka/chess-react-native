import { IChessBoardElement, IChessPieceMovement } from '@/shared/types/';
import { getRookMoves } from './get-rook-moves';
import { getBishopMoves } from './get-bishop-moves';

export function getQueenMoves(element: IChessBoardElement): IChessPieceMovement[] {
  if (!element.value) {
    return [];
  }

  return [...getRookMoves(element), ...getBishopMoves(element)];
}
