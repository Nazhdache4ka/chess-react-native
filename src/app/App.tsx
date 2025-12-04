import { StyleSheet, KeyboardAvoidingView } from 'react-native';
import { ChessBoard } from '@/widgets';

export default function App() {
  return (
    <KeyboardAvoidingView
      behavior="padding"
      style={styles.container}
    >
      <ChessBoard />
    </KeyboardAvoidingView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
