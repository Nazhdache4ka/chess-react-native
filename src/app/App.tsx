import { View, StyleSheet } from 'react-native';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import { AppRouting } from './app-routing';
import { NavigationContextProvider, ModalCompoundProvider } from '@/shared';

export default function App() {
  return (
    <SafeAreaProvider>
      <NavigationContextProvider>
        <ModalCompoundProvider>
          <View style={styles.container}>
            <AppRouting />
          </View>
        </ModalCompoundProvider>
      </NavigationContextProvider>
    </SafeAreaProvider>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
});
