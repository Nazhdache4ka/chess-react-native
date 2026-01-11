import { Pressable, Text, StyleSheet, Platform } from 'react-native';

interface ButtonProps {
  disabled?: boolean;
  children: React.ReactNode;
  onPress: () => void;
}

export function Button({ disabled, children, onPress }: ButtonProps) {
  return (
    <Pressable
      onPress={onPress}
      disabled={disabled}
      style={({ pressed }) => [styles.button, pressed && styles.buttonPressed, disabled && styles.buttonDisabled]}
    >
      {({ pressed }) => <Text style={[styles.buttonText, pressed && styles.buttonTextPressed]}>{children}</Text>}
    </Pressable>
  );
}

const styles = StyleSheet.create({
  button: {
    padding: Platform.select({
      web: 15,
      default: 10,
    }),
    borderColor: 'black',
    borderWidth: 1,
    width: Platform.OS === 'web' ? 300 : 'auto',
    height: Platform.OS === 'web' ? 100 : 'auto',
    borderRadius: Platform.OS === 'web' ? 15 : 5,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: 'transparent',
    margin: Platform.select({
      web: 15,
      default: 10,
    }),
  },

  buttonText: {
    fontSize: Platform.select({
      web: 36,
      default: 16,
    }),
    fontWeight: 'bold',
    color: 'black',
  },

  buttonPressed: {
    backgroundColor: 'black',
  },

  buttonTextPressed: {
    color: 'white',
  },

  buttonDisabled: {
    opacity: 0.5,
  },
});
