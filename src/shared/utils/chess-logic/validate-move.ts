import { ChessPieceType, IChessBoardElement, IChessPieceMovement } from '@/shared/types/';
import {
  pawnValidation,
  rookValidation,
  knightValidation,
  kingValidation,
  bishopValidation,
  queenValidation,
} from './move-validation/';

export function validateMove(
  possibleMoves: IChessPieceMovement[],
  selectedElement: IChessBoardElement,
  elements: IChessBoardElement[][]
): IChessPieceMovement[] {
  if (possibleMoves.length === 0) {
    return [];
  }

  switch (selectedElement.value?.type) {
    case ChessPieceType.PAWN:
      return pawnValidation(possibleMoves, selectedElement, elements);
    case ChessPieceType.ROOK:
      return rookValidation(possibleMoves, selectedElement, elements);
    case ChessPieceType.KNIGHT:
      return knightValidation(possibleMoves, selectedElement, elements);
    case ChessPieceType.KING:
      return kingValidation(possibleMoves, selectedElement, elements);
    case ChessPieceType.BISHOP:
      return bishopValidation(possibleMoves, selectedElement, elements);
    case ChessPieceType.QUEEN:
      return queenValidation(possibleMoves, selectedElement, elements);
    default:
      return [];
  }
}
