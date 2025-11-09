import { Board } from "../../../entities/board/index"
import { useGameBoard } from "../lib/use-game-board";

export function GameBoard() {
    const {
         elements,
         highlightedElements,
         handleClick,
    } = useGameBoard();

    return (
        <Board elements={elements} handleClick={handleClick} highlightedElements={highlightedElements} />
    )
}