import { StyleSheet, TouchableOpacity } from "react-native"
import { getCellColor } from "../lib/get-cell-color"
import { IChessBoardElement } from "../../../shared/models/interfaces";
import { Piece } from "../../figure/ui/piece";

interface CellProps {
    rowIndex: number;
    colIndex: number;
    element: IChessBoardElement;
    handleClick: (rowIndex: number, colIndex: number) => void;
}

export function Cell({ rowIndex, colIndex, element, handleClick }: CellProps) {
    const color = getCellColor(rowIndex, colIndex);

    return (
        <TouchableOpacity 
            style={[styles.cell, { backgroundColor: color }]}
            onPress={() => handleClick(rowIndex, colIndex)}
            activeOpacity={0.7}
        >
            <Piece value={element.value} row={rowIndex} col={colIndex} />
        </TouchableOpacity>
    )
}

const styles = StyleSheet.create({
    cell: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        borderWidth: 1,
        borderColor: 'black',
    },
})