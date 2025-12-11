import { getPossibleMoves } from '@/entities/figure/';
import { validateMove } from '../lib/';
import { IChessBoardElement } from '@/shared/types/';
import { useMemo } from 'react';

export function useHighlightedElements(selectedElement: IChessBoardElement | null, elements: IChessBoardElement[][]) {
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

    return validateMove(possibleMoves, selectedElement, elements);
  }, [possibleMoves, selectedElement, elements]);
}
