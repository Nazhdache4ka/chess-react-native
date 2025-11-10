import { getPossibleMoves } from "@/entities/figure/";
import { validateMove } from "../lib/";
import { IChessBoardElement } from "@/shared/types/";

export function useHighlightedElements(selectedElement: IChessBoardElement | null, elements: IChessBoardElement[][]) {
    if (selectedElement === null) {
        return [];
    }

    const possibleMoves = getPossibleMoves(selectedElement);
    const highlightedElements = validateMove(possibleMoves, selectedElement, elements);

    return highlightedElements;
}