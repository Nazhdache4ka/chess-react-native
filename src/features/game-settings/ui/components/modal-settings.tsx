import { Text, StyleSheet } from 'react-native';
import { Button, useGameInfoStore, ModalCompound, useModalContext } from '@/shared';

export function ModalSettings() {
  const { setOpen } = useModalContext();
  const setWhiteTime = useGameInfoStore((state) => state.setWhiteTime);
  const setBlackTime = useGameInfoStore((state) => state.setBlackTime);

  const handleSetTimeMinute = (time: number) => {
    setWhiteTime(time);
    setBlackTime(time);
    setOpen(false);
  };

  return (
    <ModalCompound.ModalRoot>
      <ModalCompound.ModalOverlay />
      <ModalCompound.ModalContainer>
        <ModalCompound.ModalContent>
          <ModalCompound.ModalHeader>
            <Text style={styles.title}>Settings</Text>
            <ModalCompound.ModalCloseButton />
          </ModalCompound.ModalHeader>
          <ModalCompound.ModalBody>
            <Button onPress={() => handleSetTimeMinute(60)}>1 min</Button>
            <Button onPress={() => handleSetTimeMinute(180)}>3 min</Button>
            <Button onPress={() => handleSetTimeMinute(600)}>10 min</Button>
          </ModalCompound.ModalBody>
        </ModalCompound.ModalContent>
      </ModalCompound.ModalContainer>
    </ModalCompound.ModalRoot>
  );
}

const styles = StyleSheet.create({
  title: {
    fontSize: 20,
    fontWeight: 'bold',
  },
  closeButton: {
    padding: 5,
  },
  closeButtonText: {
    fontSize: 24,
    color: '#666',
  },
});
