import { View, StyleSheet } from 'react-native';
import { GameInfo, GameSettings } from '@/features';
import { GamePhaseManager } from './game-phase-manager';
import { PropsWithChildren } from 'react';

export function ChessBoard({ children }: PropsWithChildren) {
  return (
    <View style={styles.container}>
      <GameSettings />
      <GameInfo>{children}</GameInfo>
      <GamePhaseManager />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
});
