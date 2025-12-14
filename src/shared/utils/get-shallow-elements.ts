import { IChessBoardElement } from '../types';

export function getShallowElements(elements: IChessBoardElement[][]): IChessBoardElement[][] {
  return elements.map((row: IChessBoardElement[]) => row.map((element: IChessBoardElement) => ({ ...element })));
}
