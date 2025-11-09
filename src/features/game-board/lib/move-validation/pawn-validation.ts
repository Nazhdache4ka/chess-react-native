import { ChessPieceTeam, IChessBoardElement, IChessPieceMovement } from "../../../../shared/models/interfaces";

export function pawnValidation(possibleMoves: IChessPieceMovement[], selectedElement: IChessBoardElement, elements: IChessBoardElement[][]): IChessPieceMovement[] {
    if (possibleMoves.length === 0) {
        return [];
    }

    const highlightedElements: IChessPieceMovement[] = [];

    for (const move of possibleMoves) {
        const element = elements[move.row][move.col];

        const selectedElementRow = parseInt(selectedElement.id.split('-')[0]);
        const selectedElementCol = parseInt(selectedElement.id.split('-')[1]);

        if (element.value && element.value?.team !== selectedElement.value?.team) { // diagonal capture
        
            if (selectedElement.value?.team === ChessPieceTeam.WHITE) {
                if (move.col !== selectedElementCol) {
                    highlightedElements.push(move);
                }
            }

            if (selectedElement.value?.team === ChessPieceTeam.BLACK) {
                if (move.col !== selectedElementCol) {
                    highlightedElements.push(move);
                }
            }
        }

        if (selectedElement.value?.team === ChessPieceTeam.WHITE) { // white pawn double forward move 
            if (move.row === selectedElementRow - 2 && elements[selectedElementRow - 1][selectedElementCol]?.value === null) {
                highlightedElements.push(move);
            }
        }

        if (selectedElement.value?.team === ChessPieceTeam.BLACK) { // black pawn double forward move 
            if (move.row === selectedElementRow + 2 && elements[selectedElementRow + 1][selectedElementCol]?.value === null) {
                highlightedElements.push(move);
            }
        }

        if (element.value === null && move.col === selectedElementCol) { // forward move
            highlightedElements.push(move);
        }
    }

    return highlightedElements;
}