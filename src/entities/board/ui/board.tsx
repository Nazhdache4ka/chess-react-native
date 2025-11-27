import { View, Text, StyleSheet } from 'react-native';
import { Cell } from '@/entities/cell/';
import { IChessBoardElement, IChessPieceMovement } from '@/shared/types/';

interface BoardProps {
  elements: IChessBoardElement[][];
  highlightedElements: IChessPieceMovement[];
  isKingChecked: boolean;
  isCheckmate: boolean;
  handleClick: (rowIndex: number, colIndex: number, element: IChessBoardElement) => void;
}

export function Board({ elements, highlightedElements, isKingChecked, isCheckmate, handleClick }: BoardProps) {
  return (
    <View style={styles.container}>
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
      {isCheckmate ? (
        <Text style={styles.checkText}>Checkmate</Text>
      ) : (
        isKingChecked && <Text style={styles.checkText}>King is checked</Text>
      )}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    width: '100%',
    height: '45%',
  },
  board: {
    width: '100%',
    height: '100%',
  },
  row: {
    flexDirection: 'row',
    flex: 1,
  },
  checkText: {
    position: 'relative',
    fontSize: 24,
    fontWeight: 'bold',
    color: 'red',
    textAlign: 'center',
  },
});
