import { useState, useEffect } from 'react';
import { getInitialElements } from '@/entities/board/';
import { fillChessBoard } from '@/entities/board/';
import { isKingChecked as checkIfKingIsChecked } from '../lib/check-detection/is-king-checked';
import { ChessPieceTeam, IChessBoardElement } from '@/shared/types/';
import { useChessClickHandler } from './use-chess-click-handler';
import { isCheckmate as checkIfCheckmate } from '../lib/checkmate-detection';

export function useGameBoard() {
  const [elements, setElements] = useState<IChessBoardElement[][]>(() => fillChessBoard(getInitialElements()));
  const [currentPlayer, setCurrentPlayer] = useState<ChessPieceTeam>(ChessPieceTeam.WHITE);
  const [isKingChecked, setIsKingChecked] = useState<boolean>(false);
  const [isCheckmate, setIsCheckmate] = useState<boolean>(false);
  const { selectedElement, highlightedElements, setSelectedElement, handleClick } = useChessClickHandler(
    elements,
    currentPlayer,
    isCheckmate,
    setElements,
    setCurrentPlayer
  );

  useEffect(() => {
    setIsKingChecked(checkIfKingIsChecked(elements, currentPlayer));
    setIsCheckmate(checkIfCheckmate(elements, currentPlayer));
  }, [elements, currentPlayer]);

  return {
    elements,
    highlightedElements,
    selectedElement,
    isKingChecked,
    isCheckmate,
    handleClick,
    setSelectedElement,
  };
}
