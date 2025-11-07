import { View, StyleSheet } from "react-native";
import { Cell } from "../../cell/index";
import { IChessBoardElement } from "../../../shared/models/interfaces";

interface BoardProps {
    elements: IChessBoardElement[][];
    handleClick: (rowIndex: number, colIndex: number) => void;
}

export function Board ({ elements, handleClick }: BoardProps) {
    return (
        <View style={styles.board}>
            {elements.map((row: IChessBoardElement[], rowIndex: number) => (
                <View key={rowIndex} style={styles.row}>
                    {row.map((element: IChessBoardElement, colIndex: number) => (
                        <Cell
                         key={element.id}
                         rowIndex={rowIndex}
                         colIndex={colIndex}
                         element={element}
                         handleClick={handleClick}
                        />
                    ))}
                </View>
            ))}
        </View>
    )
}

const styles = StyleSheet.create({
    board: {
        width: "100%",
        height: "45%",
    },
    row: {
        flexDirection: 'row',
        flex: 1,
    }
})