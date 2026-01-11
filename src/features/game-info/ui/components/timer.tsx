import { View, Text, StyleSheet, Platform } from 'react-native';
import { useGameTime } from '../../hooks';
import { getConvertedTime } from '../../lib';
import { ChessPieceTeam, useGameStore } from '@/shared';

interface TimerProps {
  currentTeam: ChessPieceTeam;
}

export function Timer({ currentTeam }: TimerProps) {
  const { whiteTime, blackTime } = useGameTime();
  const { currentPlayer } = useGameStore();

  const { whiteTime: convertedWhiteTime, blackTime: convertedBlackTime } = getConvertedTime(whiteTime, blackTime);

  if (currentTeam === ChessPieceTeam.WHITE) {
    const style =
      currentPlayer === ChessPieceTeam.WHITE ? (whiteTime === 0 ? styles.outOfTime : styles.currentPlayer) : '';

    return (
      <View style={[styles.timerContainer, style]}>
        <Text style={styles.timerText}>{convertedWhiteTime}</Text>
      </View>
    );
  }

  const style =
    currentPlayer === ChessPieceTeam.BLACK ? (blackTime === 0 ? styles.outOfTime : styles.currentPlayer) : '';

  return (
    <View style={[styles.timerContainer, style]}>
      <Text style={styles.timerText}>{convertedBlackTime}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  timerContainer: {
    padding: Platform.select({
      web: 20,
      default: 10,
    }),
    borderRadius: Platform.OS === 'web' ? 25 : 10,
    justifyContent: 'center',
    alignItems: 'center',
    width: Platform.OS === 'web' ? 150 : 'auto',
    height: Platform.OS === 'web' ? 150 : 'auto',
  },

  timerText: {
    fontSize: Platform.select({
      web: 48,
      default: 24,
    }),
    fontWeight: 'bold',
  },
  currentPlayer: {
    backgroundColor: 'lightgreen',
  },
  outOfTime: {
    backgroundColor: '#ffcccc',
  },
});
