import { useState, Dispatch, SetStateAction } from 'react';
import { ChessPieceTeam, IChessBoardElement, IChessPieceMovement } from '@/shared/types/';
import { useHighlightedElements } from './use-highlighted-elements';
import { moveHandler } from '../lib';
import { possibleCheckAfterMoveValidation } from '../lib';

export function useChessClickHandler(
  elements: IChessBoardElement[][],
  currentPlayer: ChessPieceTeam,
  setElements: Dispatch<SetStateAction<IChessBoardElement[][]>>,
  setCurrentPlayer: Dispatch<SetStateAction<ChessPieceTeam>>
) {
  const [selectedElement, setSelectedElement] = useState<IChessBoardElement | null>(null);
  const highlightedElements = useHighlightedElements(selectedElement, elements);

  const handleClick = (rowIndex: number, colIndex: number, element: IChessBoardElement) => {
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
          alert('Illegal move');
          return;
        }
        moveHandler(selectedElement, rowIndex, colIndex, elements, setElements);
        setCurrentPlayer((prevPlayer) =>
          prevPlayer === ChessPieceTeam.WHITE ? ChessPieceTeam.BLACK : ChessPieceTeam.WHITE
        );
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
    setSelectedElement,
    handleClick,
  };
}
