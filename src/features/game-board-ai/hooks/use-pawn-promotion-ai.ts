import { useCallback, useState, useEffect } from 'react';
import { ChessPieceTeam, ChessPieceType, ITargetPawn, useStoreContext, promotePawn } from '@/shared';

export function usePawnPromotionAi() {
  const [targetPawn, setTargetPawn] = useState<ITargetPawn | null>(null);
  const [modalVisible, setModalVisible] = useState(false);
  const { gameStore } = useStoreContext();
  const { elements, currentPlayer, setElements, setCurrentPlayer } = gameStore;

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
