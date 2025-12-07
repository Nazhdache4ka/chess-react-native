import { View } from 'react-native';
import { LottieStart } from './lottie-start';
import { Board } from '@/entities/board';
import { useGameBoard } from '../hooks';
import { GamePhase, useGameInfoStore } from '@/shared';

export function GameBoard() {
  const { elements, highlightedElements, handleClick } = useGameBoard();
  const { phase, setPhase } = useGameInfoStore();

  const handleLottieComplete = () => {
    setPhase(GamePhase.ONGOING);
  };

  return (
    <View>
      <Board
        elements={elements}
        handleClick={handleClick}
        highlightedElements={highlightedElements}
      />
      <LottieStart
        isVisible={phase === GamePhase.START}
        onComplete={handleLottieComplete}
      />
    </View>
  );
}
