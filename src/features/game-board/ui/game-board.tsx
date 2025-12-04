import { View, StyleSheet, Text } from 'react-native';
import { Board } from '@/entities/board/';
import { useGameBoard } from '../hooks/';

export function GameBoard() {
  const { elements, highlightedElements, isKingChecked, isCheckmate, handleClick } = useGameBoard();

  return (
    <View style={styles.container}>
      <Board
        elements={elements}
        handleClick={handleClick}
        highlightedElements={highlightedElements}
      />
      {isKingChecked && <Text style={styles.checkText}>King is checked</Text>}
      {isCheckmate && <Text style={styles.checkText}>Checkmate</Text>}
      {/* TODO: replace to new feature game-info */}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    height: '100%',
    width: '100%',
    alignItems: 'center',
    justifyContent: 'center',
  },

  checkText: {
    position: 'absolute',
    bottom: 100,
    fontSize: 24,
    fontWeight: 'bold',
    color: 'red',
    textAlign: 'center',
  },
});
