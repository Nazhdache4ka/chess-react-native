import { useEffect } from 'react';
import { useStoreContext } from '@/shared';
import { fillChessBoard, getInitialElements } from '@/entities/board';
import { useChessClickHandler } from './use-chess-click-handler';
import { checkIsKingChecked, checkIfCheckmate } from '../lib';

export function useGameBoard() {
  const { gameStore } = useStoreContext();
  const { elements, currentPlayer, isInitialized, setElements, setIsKingChecked, setIsCheckmate, setIsInitialized } =
    gameStore;
  const { selectedElement, highlightedElements, modalVisible, handleClick, handlePawnPromotion, handleClosePromotion } =
    useChessClickHandler();

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
