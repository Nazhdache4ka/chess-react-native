import { View, StyleSheet } from 'react-native';
import { GameBoard, GameInfo, GameSettings } from '@/features';
import { GamePhaseManager } from './game-phase-manager';

export function ChessBoard() {
  return (
    <View style={styles.container}>
      <GameSettings />
      <GameInfo>
        <GameBoard />
      </GameInfo>
      <GamePhaseManager />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    paddingTop: 40,
  },
});
