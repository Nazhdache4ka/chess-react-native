import { View } from 'react-native';
import { useEffect } from 'react';
import { Board, fillChessBoard, getInitialElements } from '@/entities/board';
import { LottieStart, useGameStore } from '@/shared';

export function GameBoardAi() {
  const { elements, setElements } = useGameStore();

  useEffect(() => {
    setElements(fillChessBoard(getInitialElements()));
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

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
