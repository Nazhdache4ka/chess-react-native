import { View, StyleSheet } from 'react-native';
import { IChessPiece } from '@/shared/types/';
import { pieceComponents } from './pieces/piece-components';

interface PieceProps {
  value: IChessPiece | null;
}

export function Piece({ value }: PieceProps) {
  if (!value) {
    return null;
  }

  const PieceComponent = pieceComponents[value.team][value.type];

  return (
    <View style={styles.pieceContainer}>
      <PieceComponent
        width="100%"
        height="100%"
      />
    </View>
  );
}

const styles = StyleSheet.create({
  pieceContainer: {
    width: '100%',
    height: '100%',
    justifyContent: 'center',
    alignItems: 'center',
  },
});
