import { View, StyleSheet, Text } from 'react-native';
import { Board } from '@/entities/board';
import { useGameStore } from '@/shared';
import { useGameBoard } from '../hooks';

export function GameBoard() {
  const { elements, highlightedElements, handleClick } = useGameBoard();
  const { isKingChecked, isCheckmate } = useGameStore();

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
    width: '100%',
    height: '100%',
    justifyContent: 'center',
    alignItems: 'center',
  },

  checkText: {
    position: 'relative',
    fontSize: 24,
    fontWeight: 'bold',
    color: 'red',
    textAlign: 'center',
  },
});
