import { StyleSheet, TouchableOpacity } from 'react-native';
import { getCellColor } from '../lib/';
import { IChessBoardElement, IChessPieceMovement } from '@/shared/types/';
import { Piece } from '@/entities/figure/';

interface CellProps {
  rowIndex: number;
  colIndex: number;
  element: IChessBoardElement;
  highlightedElements: IChessPieceMovement[];
  handleClick: (rowIndex: number, colIndex: number, element: IChessBoardElement) => void;
}

export function Cell({ rowIndex, colIndex, element, highlightedElements, handleClick }: CellProps) {
  const color = getCellColor(rowIndex, colIndex);

  const isHighlighted = highlightedElements.some(
    (move: IChessPieceMovement) => move.row === rowIndex && move.col === colIndex
  );

  return (
    <TouchableOpacity
      style={[styles.cell, { backgroundColor: color }, isHighlighted && styles.highlighted]}
      onPress={() => handleClick(rowIndex, colIndex, element)}
      activeOpacity={0.7}
    >
      <Piece value={element.value} />
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  cell: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    borderWidth: 1,
    borderColor: 'black',
  },

  highlighted: {
    backgroundColor: 'red',
  },
});
