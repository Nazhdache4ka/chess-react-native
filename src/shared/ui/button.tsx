import { Pressable, Text, StyleSheet } from 'react-native';

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
    padding: 10,
    borderColor: 'black',
    borderWidth: 1,
    borderRadius: 5,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: 'transparent',
    margin: 10,
  },

  buttonText: {
    fontSize: 16,
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
