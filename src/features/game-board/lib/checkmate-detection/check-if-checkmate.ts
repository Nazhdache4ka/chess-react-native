import { getPossibleMoves } from '@/entities/figure';
import { ChessPieceTeam, IChessBoardElement } from '@/shared/types';
import { checkIsKingChecked, possibleCheckAfterMoveValidation } from '../check-detection';
import { validateMove } from '../validate-move';

export function checkIfCheckmate(elements: IChessBoardElement[][], currentPlayer: ChessPieceTeam) {
  if (!checkIsKingChecked(elements, currentPlayer)) {
    return false;
  }

  for (let row = 0; row < 8; row++) {
    for (let column = 0; column < 8; column++) {
      const element = elements[row][column];

      if (element.value?.team === currentPlayer) {
        const possibleMoves = getPossibleMoves(element);
        const validMoves = validateMove(possibleMoves, element, elements);

        for (const move of validMoves) {
          if (!possibleCheckAfterMoveValidation(elements, currentPlayer, element, move.row, move.col)) {
            return false;
          }
        }
      }
    }
  }

  return true;
}
