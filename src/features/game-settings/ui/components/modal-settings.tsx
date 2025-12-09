import { Modal, View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import { Button, useGameInfoStore } from '@/shared';

interface ModalSettingsProps {
  isOpen: boolean;
  onClose: () => void;
}

export function ModalSettings({ isOpen, onClose }: ModalSettingsProps) {
  const setWhiteTime = useGameInfoStore((state) => state.setWhiteTime);
  const setBlackTime = useGameInfoStore((state) => state.setBlackTime);

  const handleSetTimeMinute = (time: number) => {
    setWhiteTime(time);
    setBlackTime(time);
    onClose();
  };

  return (
    <Modal
      visible={isOpen}
      transparent
      animationType="fade"
      onRequestClose={onClose}
    >
      <View style={styles.overlay} />
      <View style={styles.modalContainer}>
        <View style={styles.modalContent}>
          <View style={styles.header}>
            <Text style={styles.title}>Settings</Text>
            <TouchableOpacity
              onPress={onClose}
              style={styles.closeButton}
            >
              <Text style={styles.closeButtonText}>✕</Text>
            </TouchableOpacity>
          </View>
          <View style={styles.body}>
            <Button onPress={() => handleSetTimeMinute(60)}>1 min.</Button>
            <Button onPress={() => handleSetTimeMinute(180)}>3 min.</Button>
            <Button onPress={() => handleSetTimeMinute(600)}>10 min.</Button>
          </View>
        </View>
      </View>
    </Modal>
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
  modalContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  modalContent: {
    backgroundColor: '#fff',
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
  body: {
    gap: 10,
  },
});
