import { useCallback, useState } from 'react';
import {
  ChessPieceTeam,
  IChessBoardElement,
  IChessPieceMovement,
  useGameStore,
  onIllegalMoveVib,
  onRegularMoveVib,
  GamePhase,
  useGameInfoStore,
} from '@/shared';
import { useHighlightedElements } from './use-highlighted-elements';
import { moveHandler, possibleCheckAfterMoveValidation } from '../lib';

export function useChessClickHandler() {
  const { elements, currentPlayer, setElements, setCurrentPlayer } = useGameStore();
  const phase = useGameInfoStore((state) => state.phase);
  const [selectedElement, setSelectedElement] = useState<IChessBoardElement | null>(null);
  const highlightedElements = useHighlightedElements(selectedElement, elements);

  const handleClick = useCallback(
    (rowIndex: number, colIndex: number, element: IChessBoardElement) => {
      if (phase !== GamePhase.ONGOING) {
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
            onIllegalMoveVib();
            return;
          }
          const newElements = moveHandler(elements, selectedElement, rowIndex, colIndex);
          if (newElements) {
            setElements(newElements);
          }
          setCurrentPlayer(currentPlayer === ChessPieceTeam.WHITE ? ChessPieceTeam.BLACK : ChessPieceTeam.WHITE);
          onRegularMoveVib();
          setSelectedElement(null);
        } else {
          if (element.value?.team === currentPlayer) {
            setSelectedElement(element);
          } else {
            setSelectedElement(null);
          }
        }
      }
    },
    [phase, selectedElement, currentPlayer, highlightedElements, elements, setCurrentPlayer, setElements]
  );

  return {
    selectedElement,
    highlightedElements,
    handleClick,
  };
}
