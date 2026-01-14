import { useCallback, useState } from 'react';
import {
  ChessPieceTeam,
  IChessBoardElement,
  IChessPieceMovement,
  onIllegalMoveVib,
  onRegularMoveVib,
  GamePhase,
  useStoreContext,
} from '@/shared';
import { useHighlightedElements } from './use-highlighted-elements';
import { usePawnPromotion } from './use-pawn-promotion';
import { moveHandler, possibleCheckAfterMoveValidation, getCastleRights } from '../lib';
import { isPawnToBePromoted } from '../lib/pawn-promotion';

export function useChessClickHandler() {
  const [selectedElement, setSelectedElement] = useState<IChessBoardElement | null>(null);
  const { gameStore, gameInfoStore } = useStoreContext();
  const { elements, currentPlayer, castleRights, setElements, setCurrentPlayer, setCastleRights } = gameStore;
  const { phase } = gameInfoStore;
  const highlightedElements = useHighlightedElements(selectedElement, elements);
  const { modalVisible, setTargetPawn, handlePawnPromotion, handleClosePromotion } = usePawnPromotion();

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
          if (isPawnToBePromoted(selectedElement, rowIndex)) {
            setTargetPawn({ selectedElement, rowIndex, colIndex }); // сюда передается выбранная пешка + коорды куда она переместится; сделал так, чтобы в handlePawnPromotion они были доступны
            setSelectedElement(null);
            onRegularMoveVib();
            return;
          }
          const newElements = moveHandler(elements, selectedElement, rowIndex, colIndex, castleRights);
          if (newElements) {
            setElements(newElements);
          }
          const updatedCastleRights = getCastleRights(selectedElement, rowIndex, colIndex, castleRights);
          if (updatedCastleRights) {
            setCastleRights(updatedCastleRights);
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
    [
      phase,
      selectedElement,
      currentPlayer,
      highlightedElements,
      elements,
      castleRights,
      setCurrentPlayer,
      setElements,
      setTargetPawn,
      setCastleRights,
    ]
  );

  return {
    selectedElement,
    highlightedElements,
    modalVisible,
    handleClick,
    handlePawnPromotion,
    handleClosePromotion,
  };
}
