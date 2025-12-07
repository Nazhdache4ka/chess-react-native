import { View, StyleSheet } from 'react-native';
import { Button } from './components';
import { ChessPieceTeam, GamePhase, useGameInfoStore, useGameStore } from '@/shared';
import { fillChessBoard, getInitialElements } from '@/entities/board';

export function GameSettings() {
  const { phase, setPhase, setWhiteTime, setBlackTime } = useGameInfoStore();
  const { setElements, setCurrentPlayer, setIsKingChecked, setIsCheckmate } = useGameStore();

  const handleStart = () => {
    setPhase(GamePhase.START);
  };

  const handlePause = () => {
    setPhase(GamePhase.PAUSE);
  };

  const handleRestart = () => {
    setPhase(GamePhase.PAUSE);
    setElements(fillChessBoard(getInitialElements()));
    setCurrentPlayer(ChessPieceTeam.WHITE);
    setWhiteTime(60);
    setBlackTime(60);
    setIsKingChecked(false);
    setIsCheckmate(false);
  };

  console.log(phase);

  return (
    <View style={styles.container}>
      <Button
        title="Start"
        onPress={handleStart}
        disabled={phase === GamePhase.ONGOING || phase === GamePhase.START}
      />
      <Button
        title="Pause"
        onPress={handlePause}
        disabled={phase === GamePhase.PAUSE}
      />
      <Button
        title="Restart"
        onPress={handleRestart}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    paddingTop: 10,
    paddingBottom: 0,
    marginBottom: -25,
    width: '100%',
  },
});
