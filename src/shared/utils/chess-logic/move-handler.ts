import { ICastleRights, IChessBoardElement, simulateMoves } from '@/shared';
import { isCastleMove, performCastle } from './castle-logic';

export function moveHandler(
  elements: IChessBoardElement[][],
  selectedElement: IChessBoardElement | null,
  rowIndex: number,
  colIndex: number,
  castleRights: ICastleRights
) {
  if (selectedElement === null) {
    return;
  }

  if (isCastleMove(elements, selectedElement, rowIndex, colIndex, castleRights)) {
    return performCastle(elements, selectedElement, rowIndex, colIndex);
  }

  const newElements = simulateMoves(elements, selectedElement, rowIndex, colIndex);

  if (!newElements) {
    return;
  }

  return newElements;
}
