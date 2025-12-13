import { View, StyleSheet } from 'react-native';
import { GameBoard, GameInfo, GameSettings } from '@/features';
import { GamePhaseManager } from './game-phase-manager';
import { ModalCompoundProvider } from '@/shared';

export function ChessBoard() {
  return (
    <ModalCompoundProvider>
      <View style={styles.container}>
        <GameSettings />
        <GameInfo>
          <GameBoard />
        </GameInfo>
        <GamePhaseManager />
      </View>
    </ModalCompoundProvider>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    paddingTop: 40,
  },
});
