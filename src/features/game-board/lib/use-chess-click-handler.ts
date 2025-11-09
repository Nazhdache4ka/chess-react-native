import { useState } from "react";
import { ChessPieceTeam, IChessBoardElement, IChessPieceMovement } from "../../../shared/models/interfaces";
import { useHighlightedElements } from "./use-highlighted-elements";
import { moveHandler } from "./move-handler";

export function useChessClickHandler(elements: IChessBoardElement[][], currentPlayer: ChessPieceTeam, setElements: React.Dispatch<React.SetStateAction<IChessBoardElement[][]>>, setCurrentPlayer: React.Dispatch<React.SetStateAction<ChessPieceTeam>>) {
    const [selectedElement, setSelectedElement] = useState<IChessBoardElement | null>(null);
    const highlightedElements = useHighlightedElements(selectedElement, elements);

    const handleClick = (rowIndex: number, colIndex: number, element: IChessBoardElement) => {
        if (selectedElement === null && element.value !== null) {
            if (element.value?.team === currentPlayer) {
                setSelectedElement(element);
            }
        }

        if (selectedElement !== null) {
            const isHighlightedCell = highlightedElements.some((move: IChessPieceMovement) => move.row === rowIndex && move.col === colIndex);

            if (isHighlightedCell) {
                moveHandler(selectedElement, rowIndex, colIndex, elements, setElements);
                setCurrentPlayer(currentPlayer === ChessPieceTeam.WHITE ? ChessPieceTeam.BLACK : ChessPieceTeam.WHITE);
                setSelectedElement(null);
            } else {
                if (element.value?.team === currentPlayer) {
                    setSelectedElement(element);
                } else {
                    setSelectedElement(null);
                }
            }
        }
    }

    return {
        selectedElement,
        highlightedElements,
        setSelectedElement,
        handleClick,
    };
}