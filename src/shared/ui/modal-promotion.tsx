import { Button, ChessPieceType, ModalCompound, ModalCompoundProvider, useStoreContext } from '@/shared';
import { Text, StyleSheet } from 'react-native';
import { Queen, Rook, Bishop, Knight } from '@/entities/figure';

interface ModalPromotionProps {
  isOpen: boolean;
  onClose: () => void;
  handleClick: (piece: ChessPieceType) => void;
}

export function ModalPromotion({ isOpen, onClose, handleClick }: ModalPromotionProps) {
  const { gameStore } = useStoreContext();
  const { currentPlayer } = gameStore;
  const color = currentPlayer;
  if (!isOpen) return null;

  return (
    <ModalCompoundProvider
      isControlledOpen={isOpen}
      onOpenChange={onClose}
    >
      <ModalCompound.ModalRoot>
        <ModalCompound.ModalOverlay />
        <ModalCompound.ModalContainer>
          <ModalCompound.ModalContent>
            <ModalCompound.ModalHeader>
              <Text style={styles.title}>Promote Pawn</Text>
              <ModalCompound.ModalCloseButton />
            </ModalCompound.ModalHeader>
            <ModalCompound.ModalBody style={styles.body}>
              <Button onPress={() => handleClick(ChessPieceType.QUEEN)}>
                <Queen
                  height={30}
                  width={30}
                  color={color}
                />
              </Button>
              <Button onPress={() => handleClick(ChessPieceType.ROOK)}>
                <Rook
                  height={30}
                  width={30}
                  color={color}
                />
              </Button>
              <Button onPress={() => handleClick(ChessPieceType.BISHOP)}>
                <Bishop
                  height={30}
                  width={30}
                  color={color}
                />
              </Button>
              <Button onPress={() => handleClick(ChessPieceType.KNIGHT)}>
                <Knight
                  height={30}
                  width={30}
                  color={color}
                />
              </Button>
            </ModalCompound.ModalBody>
          </ModalCompound.ModalContent>
        </ModalCompound.ModalContainer>
      </ModalCompound.ModalRoot>
    </ModalCompoundProvider>
  );
}

const styles = StyleSheet.create({
  title: {
    fontSize: 20,
    fontWeight: 'bold',
  },

  body: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
  },
});
