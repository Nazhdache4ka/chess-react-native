import { IChessBoardElement } from "@/shared/types/";

export function moveHandler(selectedElement: IChessBoardElement | null, rowIndex: number, colIndex: number, elements: IChessBoardElement[][], setElements: React.Dispatch<React.SetStateAction<IChessBoardElement[][]>>) {
    if (selectedElement === null) {
        return;
    }

    setElements((prevElements: IChessBoardElement[][]) => {
        const newElements = prevElements.map((row: IChessBoardElement[]) => row.map((element: IChessBoardElement) => 
            ({...element})
        ));

        let fromRow = -1; let fromColumn = -1;
        let toRow = -1; let toColumn = -1;

        for (let i = 0; i < newElements.length; i++) {
            for (let j = 0; j < newElements[i].length; j++) {
                if (newElements[i][j].id === selectedElement.id) {
                    fromRow = i; fromColumn = j;
                }
                if (newElements[i][j].id === `${rowIndex}-${colIndex}`) {
                    toRow = i; toColumn = j;
                }
            }
        }

        if (fromRow !== -1 && fromColumn !== -1 && toRow !== -1 && toColumn !== -1) {
            const newElement = newElements[fromRow][fromColumn].value;
            newElements[toRow][toColumn].value = newElement;
            newElements[fromRow][fromColumn].value = null;
        }

        return newElements;
    })
}