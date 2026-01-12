import { View, Pressable, Text, StyleSheet } from 'react-native';
import { NavigationScreen } from '../types';
import { useNavigationContext } from '../navigation';

export function Navbar() {
  const { screen, setScreen } = useNavigationContext();

  const handleSinglePlayer = () => {
    setScreen(NavigationScreen.SINGLE_PLAYER);
  };

  const handleAI = () => {
    setScreen(NavigationScreen.AI);
  };

  return (
    <View style={styles.container}>
      <Pressable onPress={handleSinglePlayer}>
        <Text style={[styles.text, screen === NavigationScreen.SINGLE_PLAYER && styles.textActive]}>Single Player</Text>
      </Pressable>
      <Pressable onPress={handleAI}>
        <Text style={[styles.text, screen === NavigationScreen.AI && styles.textActive]}>AI</Text>
      </Pressable>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    justifyContent: 'space-evenly',
    alignItems: 'center',
    padding: 10,
  },

  text: {
    fontSize: 16,
    color: 'black',
  },

  textActive: {
    fontWeight: 'bold',
    textDecorationLine: 'underline',
  },
});
