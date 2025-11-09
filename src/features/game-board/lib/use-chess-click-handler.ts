import { useState } from "react";
import { IChessBoardElement, IChessPieceMovement } from "../../../shared/models/interfaces";
import { useHighlightedElements } from "./use-highlighted-elements";
import { moveHandler } from "./move-handler";

export function useChessClickHandler(elements: IChessBoardElement[][], setElements: React.Dispatch<React.SetStateAction<IChessBoardElement[][]>>) {
    const [selectedElement, setSelectedElement] = useState<IChessBoardElement | null>(null);
    const highlightedElements = useHighlightedElements(selectedElement, elements);

    const handleClick = (rowIndex: number, colIndex: number, element: IChessBoardElement) => {
        if (selectedElement === null && element.value !== null) {
            setSelectedElement(element);
        }

        if (selectedElement !== null) {
            const isHighlightedCell = highlightedElements.some((move: IChessPieceMovement) => move.row === rowIndex && move.col === colIndex);

            if (isHighlightedCell) {
                moveHandler(selectedElement, rowIndex, colIndex, elements, setElements);
                setSelectedElement(null);
            } else {
                if (element.value?.team) {
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