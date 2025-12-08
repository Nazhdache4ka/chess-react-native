import { View, StyleSheet } from 'react-native';
import { useState } from 'react';
import { Button, ModalSettings } from './components';
import { ChessPieceTeam, GamePhase, useGameInfoStore, useGameStore } from '@/shared';
import { fillChessBoard, getInitialElements } from '@/entities/board';

export function GameSettings() {
  const { phase, setPhase, setWhiteTime, setBlackTime } = useGameInfoStore();
  const { setElements, setCurrentPlayer, setIsKingChecked, setIsCheckmate } = useGameStore();
  const [showSettingsModal, setShowSettingsModal] = useState(false);

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

  const handleShowSettingsModal = () => {
    setShowSettingsModal(true);
  };

  const handleCloseSettingsModal = () => {
    setShowSettingsModal(false);
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
      <Button
        onPress={handleShowSettingsModal}
        disabled={phase === GamePhase.ONGOING || phase === GamePhase.START}
      >
        ⚙
      </Button>
      <ModalSettings
        isOpen={showSettingsModal}
        onClose={handleCloseSettingsModal}
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
