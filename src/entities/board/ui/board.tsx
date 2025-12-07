import { View, StyleSheet } from 'react-native';
import { Cell } from '@/entities/cell/';
import { IChessBoardElement, IChessPieceMovement } from '@/shared/types/';

interface BoardProps {
  elements: IChessBoardElement[][];
  highlightedElements: IChessPieceMovement[];
  handleClick: (rowIndex: number, colIndex: number, element: IChessBoardElement) => void;
}

export function Board({ elements, highlightedElements, handleClick }: BoardProps) {
  console.log('board render');
  return (
    <View style={styles.board}>
      {elements.map((row: IChessBoardElement[], rowIndex: number) => (
        <View
          key={rowIndex}
          style={styles.row}
        >
          {row.map((element: IChessBoardElement, colIndex: number) => (
            <Cell
              highlightedElements={highlightedElements}
              key={element.id}
              rowIndex={rowIndex}
              colIndex={colIndex}
              element={element}
              handleClick={handleClick}
            />
          ))}
        </View>
      ))}
    </View>
  );
}

const styles = StyleSheet.create({
  board: {
    width: '100%',
    aspectRatio: 1,
    maxWidth: '100%',
    justifyContent: 'center',
    alignItems: 'center',
  },
  row: {
    flex: 1,
    flexDirection: 'row',
    margin: -1,
  },
});
