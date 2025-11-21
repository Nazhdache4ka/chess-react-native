import { IChessBoardElement } from '@/shared/types/';

export function getInitialElements(): IChessBoardElement[][] {
  return Array.from({ length: 8 }, (_, rowIndex) => {
    return Array.from({ length: 8 }, (_, columnIndex) => ({
      id: `${rowIndex}-${columnIndex}`,
      value: null,
    }));
  });
}
