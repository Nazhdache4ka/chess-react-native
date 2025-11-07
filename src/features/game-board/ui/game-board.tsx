import { Board } from "../../../entities/board/index"
import { useGameBoard } from "../lib/use-chess-game";

export function GameBoard() {
    const {
         elements,
         handleClick,
    } = useGameBoard();

    return (
        <Board elements={elements} handleClick={handleClick} />
    )
}