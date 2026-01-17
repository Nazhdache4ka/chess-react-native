import { useCallback, useState, useEffect } from 'react';
import {
  ChessPieceTeam,
  IChessBoardElement,
  IChessPieceMovement,
  onIllegalMoveVib,
  onRegularMoveVib,
  GamePhase,
  useStoreContext,
  possibleCheckAfterMoveValidation,
  getCastleRights,
  isPawnToBePromoted,
  moveHandler,
  IPlayerMove,
  getCoordinatesFromId,
} from '@/shared';
import { useHighlightedElementsAi } from './use-highlighted-elements-ai';
import { usePawnPromotionAi } from './use-pawn-promotion-ai';
import { useAiMove } from './use-ai-move';
import { convertCoordinates, convertAiMove } from '../lib';

export function useChessClickHandlerAi() {
  const [selectedElement, setSelectedElement] = useState<IChessBoardElement | null>(null);
  const [playerMove, setPlayerMove] = useState<IPlayerMove | null>(null);
  const { gameStore, gameInfoStore } = useStoreContext();
  const { elements, currentPlayer, castleRights, setElements, setCurrentPlayer, setCastleRights } = gameStore;
  const { phase } = gameInfoStore;
  const highlightedElements = useHighlightedElementsAi(selectedElement, elements);
  const { modalVisible, setTargetPawn, handlePawnPromotion, handleClosePromotion } = usePawnPromotionAi();
  const aiMove = useAiMove(playerMove);

  useEffect(() => {
    if (!aiMove) {
      return;
    }

    if (!playerMove) {
      return;
    }

    if (aiMove && playerMove) {
      const moveData = convertAiMove(aiMove, elements);

      if (moveData && moveData.selectedElement) {
        const { selectedElement: aiSelectedElement, rowIndex, colIndex } = moveData;

        const newElements = moveHandler(elements, aiSelectedElement, rowIndex, colIndex, castleRights);
        if (newElements) {
          setElements(newElements);
        }

        const updatedCastleRights = getCastleRights(aiSelectedElement, rowIndex, colIndex, castleRights);
        if (updatedCastleRights) {
          setCastleRights(updatedCastleRights);
        }
        setCurrentPlayer(ChessPieceTeam.WHITE);
        // eslint-disable-next-line
        setPlayerMove(null);
      }
    }
  }, [aiMove, playerMove, elements, castleRights, setElements, setCastleRights, setCurrentPlayer]);

  const handleClick = useCallback(
    (rowIndex: number, colIndex: number, element: IChessBoardElement) => {
      if (phase !== GamePhase.ONGOING) {
        return;
      }

      if (currentPlayer === ChessPieceTeam.BLACK) {
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
            if (selectedElement.value?.type) {
              setPlayerMove({
                piece: selectedElement.value?.type,
                from: convertCoordinates(
                  getCoordinatesFromId(selectedElement.id).row,
                  getCoordinatesFromId(selectedElement.id).col
                ),
                to: convertCoordinates(rowIndex, colIndex),
              });
            }
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
