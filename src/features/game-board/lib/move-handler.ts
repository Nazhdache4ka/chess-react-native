import { IChessBoardElement } from '@/shared/types/';
import { simulateMoves } from '@/shared/utils/';

export function moveHandler(
  selectedElement: IChessBoardElement | null,
  rowIndex: number,
  colIndex: number,
  setElements: React.Dispatch<React.SetStateAction<IChessBoardElement[][]>>
) {
  if (selectedElement === null) {
    return;
  }

  setElements((prevElements: IChessBoardElement[][]) => {
    const newElements = simulateMoves(prevElements, selectedElement, rowIndex, colIndex);

    if (!newElements) {
      return prevElements;
    }

    return newElements;
  });
}
