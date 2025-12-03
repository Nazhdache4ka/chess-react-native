import { useState } from 'react';
import { ChessPieceTeam, IChessBoardElement, IChessPieceMovement, useGameStore } from '@/shared';
import { useHighlightedElements } from './use-highlighted-elements';
import { moveHandler, possibleCheckAfterMoveValidation } from '../lib';

export function useChessClickHandler() {
  const { elements, currentPlayer, isCheckmate, setElements, setCurrentPlayer } = useGameStore();
  const [selectedElement, setSelectedElement] = useState<IChessBoardElement | null>(null);
  const highlightedElements = useHighlightedElements(selectedElement, elements);

  const handleClick = (rowIndex: number, colIndex: number, element: IChessBoardElement) => {
    if (isCheckmate) {
      return;
    }

    if (selectedElement === null && element.value !== null) {
      if (element.value?.team === currentPlayer) {
        setSelectedElement(element);
      }
    }

    if (selectedElement !== null) {
      const isHighlightedCell = highlightedElements.some(
        (move: IChessPieceMovement) => move.row === rowIndex && move.col === colIndex
      );

      if (isHighlightedCell) {
        if (possibleCheckAfterMoveValidation(elements, currentPlayer, selectedElement, rowIndex, colIndex)) {
          setSelectedElement(null);
          alert('Illegal move');
          return;
        }
        const newElements = moveHandler(elements, selectedElement, rowIndex, colIndex);
        if (newElements) {
          setElements(newElements);
        }
        setCurrentPlayer(currentPlayer === ChessPieceTeam.WHITE ? ChessPieceTeam.BLACK : ChessPieceTeam.WHITE);
        setSelectedElement(null);
      } else {
        if (element.value?.team === currentPlayer) {
          setSelectedElement(element);
        } else {
          setSelectedElement(null);
        }
      }
    }
  };

  return {
    selectedElement,
    highlightedElements,
    handleClick,
  };
}
