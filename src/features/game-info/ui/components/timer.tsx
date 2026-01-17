import { View, Text, StyleSheet } from 'react-native';
import { useGameTime } from '../../hooks';
import { getConvertedTime } from '../../lib';
import { ChessPieceTeam, useStoreContext } from '@/shared';

interface TimerProps {
  currentTeam: ChessPieceTeam;
}

export function Timer({ currentTeam }: TimerProps) {
  const { whiteTime, blackTime } = useGameTime();
  const { gameStore } = useStoreContext();
  const { currentPlayer } = gameStore;

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
    padding: 10,
    borderRadius: 10,
    justifyContent: 'center',
    alignItems: 'center',
  },

  timerText: {
    fontSize: 24,
    fontWeight: 'bold',
  },
  currentPlayer: {
    backgroundColor: 'lightgreen',
  },
  outOfTime: {
    backgroundColor: '#ffcccc',
  },
});
