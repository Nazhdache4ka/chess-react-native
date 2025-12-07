import { View } from 'react-native';
import { LottieStart } from './lottie-start';
import { Board } from '@/entities/board';
import { useGameBoard } from '../hooks';

export function GameBoard() {
  const { elements, highlightedElements, handleClick } = useGameBoard();

  return (
    <View>
      <Board
        elements={elements}
        handleClick={handleClick}
        highlightedElements={highlightedElements}
      />
      <LottieStart />
    </View>
  );
}
