import { useEffect } from 'react';
import { useGameStore } from '@/shared';
import { fillChessBoard, getInitialElements } from '@/entities/board';
import { useChessClickHandler } from './use-chess-click-handler';
import { checkIsKingChecked, checkIfCheckmate } from '../lib';

export function useGameBoard() {
  const { elements, currentPlayer, setElements, setIsKingChecked, setIsCheckmate } = useGameStore();
  const { selectedElement, highlightedElements, modalVisible, handleClick, handlePawnPromotion, handleClosePromotion } =
    useChessClickHandler();

  useEffect(() => {
    setElements(fillChessBoard(getInitialElements()));
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

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
