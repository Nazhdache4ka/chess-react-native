import { View, StyleSheet, Platform } from 'react-native';
import { useSafeAreaInsets } from 'react-native-safe-area-context';
import { GameBoardAi } from '@/features/';
import { Navbar, StoreContextProvider, useGameInfoStoreAi, useGameStoreAi } from '@/shared';
import { ChessBoard } from '@/widgets';

export function AiPage() {
  const gameStore = useGameStoreAi();
  const gameInfoStore = useGameInfoStoreAi();
  const insets = useSafeAreaInsets();

  return (
    <View style={[styles.container, { paddingTop: Platform.OS === 'web' ? 0 : insets.top }]}>
      <Navbar />
      <StoreContextProvider
        gameStore={gameStore}
        gameInfoStore={gameInfoStore}
      >
        <ChessBoard>
          <GameBoardAi />
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
