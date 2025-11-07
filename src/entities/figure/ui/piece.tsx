import { View, Text, StyleSheet } from "react-native";
import { IChessPiece } from "../../../shared/models/interfaces";
import { getChessPieceSymbol } from "../lib/get-chess-piece-symbol"

interface PieceProps {
    value: IChessPiece | null;
    row: number;
    col: number;
}

export function Piece({ value, row, col }: PieceProps) {
    const pieceSymbol = getChessPieceSymbol(value);

    return (
        <View style={styles.pieceContainer}>
            <Text style={styles.piece}>{pieceSymbol}</Text>
        </View>
    )
}

const styles = StyleSheet.create({
    piece: {
        fontSize: 24,
        fontWeight: 'bold',
    },

    pieceContainer: {
        width: '100%',
        height: '100%',
        justifyContent: 'center',
        alignItems: 'center',
    }
})