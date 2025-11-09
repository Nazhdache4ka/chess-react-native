import { useState, useEffect } from "react";
import { getInitialElements } from "../../../entities/board/lib/get-initial-value";
import { fillChessBoard } from "../../../entities/board/lib/fill-chess-board";
import { ChessPieceTeam, IChessBoardElement } from "../../../shared/models/interfaces";
import { useChessClickHandler } from "./use-chess-click-handler";

export function useGameBoard() {
    const [elements, setElements] = useState<IChessBoardElement[][]>(() => getInitialElements());
    const [currentPlayer, setCurrentPlayer] = useState<ChessPieceTeam>(ChessPieceTeam.WHITE);
    const {
         selectedElement,
         highlightedElements,
         setSelectedElement,
         handleClick,
    } = useChessClickHandler(elements, currentPlayer, setElements, setCurrentPlayer);

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