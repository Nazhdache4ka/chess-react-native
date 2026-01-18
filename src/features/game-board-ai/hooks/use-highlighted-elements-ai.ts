import { ChessPieceType, IChessBoardElement, useStoreContext, getCastleMoves, validateMove } from '@/shared';
import { useMemo } from 'react';
import { getPossibleMoves } from '@/entities/figure';

export function useHighlightedElementsAi(selectedElement: IChessBoardElement | null, elements: IChessBoardElement[][]) {
  const { gameStore } = useStoreContext();
  const { castleRights, isKingChecked } = gameStore;

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
