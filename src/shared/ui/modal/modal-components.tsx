import { PropsWithChildren } from 'react';
import { useModalContext } from './modal-context';
import { Modal, Pressable, View, StyleSheet } from 'react-native';
import { Button } from '../button';

export function ModalRoot({ children }: PropsWithChildren) {
  const { isOpen } = useModalContext();

  return (
    <Modal
      visible={isOpen}
      transparent
      animationType="fade"
    >
      {children}
    </Modal>
  );
}

export function ModalOverlay() {
  const { isOpen, setIsOpen } = useModalContext();

  if (!isOpen) return null;

  const handlePress = () => {
    setIsOpen(false);
  };

  return (
    <Pressable
      onPress={handlePress}
      style={styles.overlay}
    />
  );
}

export function ModalContainer({ children }: PropsWithChildren) {
  return <View style={styles.container}>{children}</View>;
}

export function ModalContent({ children }: PropsWithChildren) {
  const { isOpen } = useModalContext();

  if (!isOpen) return null;

  return <View style={styles.content}>{children}</View>;
}

export function ModalHeader({ children }: PropsWithChildren) {
  return <View style={styles.header}>{children}</View>;
}

export function ModalBody({ children }: PropsWithChildren) {
  return <View style={styles.body}>{children}</View>;
}

export function ModalFooter({ children }: PropsWithChildren) {
  return <View style={styles.footer}>{children}</View>;
}

export function ModalCloseButton() {
  const { setIsOpen } = useModalContext();

  const handlePress = () => {
    setIsOpen(false);
  };

  return <Button onPress={handlePress}>✕</Button>;
}

export function ModalTrigger({ children, disabled }: PropsWithChildren<{ disabled?: boolean }>) {
  const { setIsOpen } = useModalContext();

  const handlePress = () => {
    setIsOpen(true);
  };

  return (
    <Button
      onPress={handlePress}
      disabled={disabled}
    >
      {children}
    </Button>
  );
}

const styles = StyleSheet.create({
  overlay: {
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
  },

  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },

  content: {
    backgroundColor: 'white',
    borderRadius: 10,
    padding: 20,
    width: '80%',
    maxWidth: 400,
  },

  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 20,
  },

  body: {
    gap: 10,
  },

  footer: {
    gap: 10,
  },
});
