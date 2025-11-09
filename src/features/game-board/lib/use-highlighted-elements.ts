import { getPossibleMoves } from "../../../entities/figure/lib/get-possible-moves";
import { validateMove } from "./validate-move";
import { IChessBoardElement } from "../../../shared/models/interfaces";

export function useHighlightedElements(selectedElement: IChessBoardElement | null, elements: IChessBoardElement[][]) {
    if (selectedElement === null) {
        return [];
    }

    const possibleMoves = getPossibleMoves(selectedElement);
    const highlightedElements = validateMove(possibleMoves, selectedElement, elements);

    return highlightedElements;
}