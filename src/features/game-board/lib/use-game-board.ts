import { useState, useEffect } from "react";
import { getInitialElements } from "../../../entities/board/lib/get-initial-value";
import { fillChessBoard } from "../../../entities/board/lib/fill-chess-board";
import { IChessBoardElement } from "../../../shared/models/interfaces";
import { useChessClickHandler } from "./use-chess-click-handler";

export function useGameBoard() {
    const [elements, setElements] = useState<IChessBoardElement[][]>(() => getInitialElements());
    const {
         selectedElement,
         highlightedElements,
         setSelectedElement,
         handleClick,
    } = useChessClickHandler(elements, setElements);

    useEffect(() => {
        setElements(fillChessBoard(getInitialElements()));
    }, []);

    return {
         elements,
         highlightedElements,
         selectedElement,
         handleClick,
         setSelectedElement,
    };
}