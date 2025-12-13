import { useCallback, useState, useEffect } from 'react';
import { ChessPieceTeam, ChessPieceType, ITargetPawn } from '@/shared/types';
import { promotePawn } from '../lib/pawn-promotion';
import { useGameStore } from '@/shared/store/use-game-store';

export function usePawnPromotion() {
  const [targetPawn, setTargetPawn] = useState<ITargetPawn | null>(null);
  const [modalVisible, setModalVisible] = useState(false);
  const { elements, setElements, currentPlayer, setCurrentPlayer } = useGameStore();

  useEffect(() => {
    setModalVisible(targetPawn !== null);
  }, [targetPawn]);

  const handlePawnPromotion = useCallback(
    (selectedPiece: ChessPieceType) => {
      if (!targetPawn) {
        return;
      }
      const newElements = promotePawn(elements, targetPawn, selectedPiece);
      if (newElements) {
        setElements(newElements);
      }
      setCurrentPlayer(currentPlayer === ChessPieceTeam.WHITE ? ChessPieceTeam.BLACK : ChessPieceTeam.WHITE);
      setTargetPawn(null);
      setModalVisible(false);
    },
    [elements, targetPawn, setElements, currentPlayer, setCurrentPlayer]
  );

  const handleClosePromotion = useCallback(() => {
    setTargetPawn(null);
    setModalVisible(false);
  }, []);

  return {
    targetPawn,
    modalVisible,
    setTargetPawn,
    handlePawnPromotion,
    handleClosePromotion,
  };
}
