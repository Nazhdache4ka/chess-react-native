import { IChessBoardElement } from "@/shared/types/"
import { BOARD_ROWS, BOARD_COLS } from "../model"

export function getInitialElements(): IChessBoardElement[][] {
    return Array.from({ length: BOARD_ROWS }, (_, rowIndex) => {
        return Array.from({ length: BOARD_COLS }, (_, colIndex) => ({
            id: `${rowIndex}-${colIndex}`,
            value: null,
        }))
    })
}