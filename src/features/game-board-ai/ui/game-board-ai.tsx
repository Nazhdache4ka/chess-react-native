import { View } from 'react-native';
import { Board } from '@/entities/board';
import { LottieStart, ModalPromotion } from '@/shared';
import { useGameBoardAi } from '../hooks';

export function GameBoardAi() {
  const { elements, highlightedElements, modalVisible, handleClick, handlePawnPromotion, handleClosePromotion } =
    useGameBoardAi();

  return (
    <View>
      <Board
        elements={elements}
        highlightedElements={highlightedElements}
        handleClick={handleClick}
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
