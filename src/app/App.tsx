import { StyleSheet, KeyboardAvoidingView } from 'react-native';
import { GameBoard } from '@/features/game-board/index';

export default function App() {
  return (
    <KeyboardAvoidingView behavior='padding' style={styles.container}>
      <GameBoard />
    </KeyboardAvoidingView>
  );
  
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  }
});
