import { View, StyleSheet, Text } from 'react-native';
import { ModalSettings } from './components';
import {
  ChessPieceTeam,
  GamePhase,
  useGameInfoStore,
  useGameStore,
  Button,
  ModalCompound,
  getInitialCastleRights,
} from '@/shared';
import { fillChessBoard, getInitialElements } from '@/entities/board';

export function GameSettings() {
  const { phase, setPhase, setWhiteTime, setBlackTime } = useGameInfoStore();
  const { setElements, setCurrentPlayer, setIsKingChecked, setIsCheckmate, setCastleRights } = useGameStore();

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
    setCastleRights(getInitialCastleRights());
  };

  return (
    <View style={styles.container}>
      <Button
        onPress={handleStart}
        disabled={phase !== GamePhase.PAUSE}
      >
        Start
      </Button>
      <Button
        onPress={handlePause}
        disabled={phase !== GamePhase.ONGOING}
      >
        Pause
      </Button>
      <Button onPress={handleRestart}>Restart</Button>
      <ModalCompound.ModalTrigger disabled={phase !== GamePhase.PAUSE}>
        <Text style={styles.triggerContent}>⚙</Text>
      </ModalCompound.ModalTrigger>
      <ModalSettings />
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

  triggerContent: {
    padding: 10,
  },
});
