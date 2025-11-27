import { Board } from '@/entities/board/';
import { useGameBoard } from '../hooks/';

export function GameBoard() {
  const { elements, highlightedElements, isKingChecked, isCheckmate, handleClick } = useGameBoard();

  return (
    <Board
      elements={elements}
      handleClick={handleClick}
      highlightedElements={highlightedElements}
      isKingChecked={isKingChecked}
      isCheckmate={isCheckmate}
    />
  );
}
