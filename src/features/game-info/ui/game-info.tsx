import { PropsWithChildren } from 'react';
import { View, StyleSheet } from 'react-native';
import { ChessPieceTeam } from '@/shared';
import { Timer } from './components';

export function GameInfo({ children }: PropsWithChildren) {
  return (
    <View style={styles.container}>
      <View style={styles.upperSection}>
        <Timer currentTeam={ChessPieceTeam.BLACK} />
      </View>
      <View style={styles.boardContainer}>{children}</View>
      <View style={styles.lowerSection}>
        <Timer currentTeam={ChessPieceTeam.WHITE} />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    width: '100%',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
  },
  upperSection: {
    width: '100%',
    marginBottom: 10,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
  },
  boardContainer: {
    width: '100%',
    justifyContent: 'center',
    alignItems: 'center',
    paddingHorizontal: 20,
  },
  lowerSection: {
    width: '100%',
    marginTop: 10,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
  },
});
