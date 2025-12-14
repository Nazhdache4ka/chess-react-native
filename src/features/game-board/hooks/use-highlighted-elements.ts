import { getPossibleMoves } from '@/entities/figure/';
import { getCastleMoves, validateMove } from '../lib/';
import { ChessPieceType, IChessBoardElement, useGameStore } from '@/shared';
import { useMemo } from 'react';

export function useHighlightedElements(selectedElement: IChessBoardElement | null, elements: IChessBoardElement[][]) {
  const castleRights = useGameStore((state) => state.castleRights);
  const isKingChecked = useGameStore((state) => state.isKingChecked);

  const possibleMoves = useMemo(() => {
    if (!selectedElement) {
      return [];
    }

    return getPossibleMoves(selectedElement);
  }, [selectedElement]);

  return useMemo(() => {
    if (!selectedElement) {
      return [];
    }

    if (selectedElement.value?.type === ChessPieceType.KING) {
      const castleMoves = getCastleMoves(elements, selectedElement, castleRights, isKingChecked);

      return [...validateMove(possibleMoves, selectedElement, elements), ...castleMoves];
    }

    return validateMove(possibleMoves, selectedElement, elements);
  }, [possibleMoves, selectedElement, elements, castleRights, isKingChecked]);
}
