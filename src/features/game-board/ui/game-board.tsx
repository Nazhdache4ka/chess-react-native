import { View } from 'react-native';
import { LottieStart } from './lottie-start';
import { ModalPromotion } from './modal-promotion';
import { Board } from '@/entities/board';
import { useGameBoard } from '../hooks';

export function GameBoard() {
  const { elements, highlightedElements, modalVisible, handleClick, handlePawnPromotion, handleClosePromotion } =
    useGameBoard();

  return (
    <View>
      <Board
        elements={elements}
        handleClick={handleClick}
        highlightedElements={highlightedElements}
      />
      <LottieStart />
      <ModalPromotion
        isOpen={modalVisible}
        onClose={handleClosePromotion}
        handleClick={handlePawnPromotion}
      />
    </View>
  );
}
