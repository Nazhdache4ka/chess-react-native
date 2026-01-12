import { View, StyleSheet, Platform } from 'react-native';
import { useSafeAreaInsets } from 'react-native-safe-area-context';
import { ChessBoard } from '@/widgets';
import { Navbar, useGameInfoStore, useGameStore, StoreContextProvider } from '@/shared';
import { GameBoard } from '@/features';

export function SinglePlayerPage() {
  const gameStore = useGameStore();
  const gameInfoStore = useGameInfoStore();
  const insets = useSafeAreaInsets();

  return (
    <View style={[styles.container, { paddingTop: Platform.OS === 'web' ? 0 : insets.top }]}>
      <Navbar />
      <StoreContextProvider
        gameStore={gameStore}
        gameInfoStore={gameInfoStore}
      >
        <ChessBoard>
          <GameBoard />
        </ChessBoard>
      </StoreContextProvider>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
