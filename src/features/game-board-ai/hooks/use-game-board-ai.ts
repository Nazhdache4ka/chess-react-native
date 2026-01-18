import { useEffect } from 'react';
import { useStoreContext, checkIsKingChecked, checkIfCheckmate } from '@/shared';
import { fillChessBoard, getInitialElements } from '@/entities/board';
import { useChessClickHandlerAi } from './use-chess-click-handler-ai';

export function useGameBoardAi() {
  const { gameStore } = useStoreContext();
  const { elements, currentPlayer, isInitialized, setElements, setIsKingChecked, setIsCheckmate, setIsInitialized } =
    gameStore;
  const { selectedElement, highlightedElements, modalVisible, handleClick, handlePawnPromotion, handleClosePromotion } =
    useChessClickHandlerAi();

  useEffect(() => {
    if (!isInitialized && elements.length === 0) {
      setElements(fillChessBoard(getInitialElements()));
      setIsInitialized(true);
    }
  }, [elements, isInitialized, setElements, setIsInitialized]);

  useEffect(() => {
    setIsKingChecked(checkIsKingChecked(elements, currentPlayer));
    setIsCheckmate(checkIfCheckmate(elements, currentPlayer));
  }, [elements, currentPlayer, setIsKingChecked, setIsCheckmate]);

  return {
    elements,
    highlightedElements,
    selectedElement,
    modalVisible,
    handleClick,
    handlePawnPromotion,
    handleClosePromotion,
  };
}
