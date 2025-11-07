import { useState, useEffect } from "react";
import { getInitialElements } from "../../../entities/board/lib/get-initial-value";
import { fillChessBoard } from "../../../entities/board/lib/fill-chess-board";
import { IChessBoardElement, IChessPiece } from "../../../shared/models/interfaces";

export function useGameBoard() {
    const [elements, setElements] = useState<IChessBoardElement[][]>(() => getInitialElements());
    const [selectedPiece, setSelectedPiece] = useState<IChessPiece | null>(null);

    const handleClick = (rowIndex: number, colIndex: number) => {
        console.log('click', rowIndex, colIndex);
    }

    useEffect(() => {
        setElements(fillChessBoard(getInitialElements()));
    }, []);

    return {
         elements,
         selectedPiece,
         setSelectedPiece,
         handleClick,
    };
}