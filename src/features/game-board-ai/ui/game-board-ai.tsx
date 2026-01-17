import { View } from 'react-native';
import { useEffect } from 'react';
import { Board, fillChessBoard, getInitialElements } from '@/entities/board';
import { LottieStart, useStoreContext } from '@/shared';

export function GameBoardAi() {
  const { gameStore } = useStoreContext();
  const { elements, isInitialized, setElements, setIsInitialized } = gameStore;

  useEffect(() => {
    if (!isInitialized && elements.length === 0) {
      setElements(fillChessBoard(getInitialElements()));
      setIsInitialized(true);
    }
  }, [elements, isInitialized, setElements, setIsInitialized]);

  return (
    <View>
      <Board
        elements={elements}
        highlightedElements={[]}
        handleClick={() => {}}
      />
      <LottieStart />
    </View>
  );
}
