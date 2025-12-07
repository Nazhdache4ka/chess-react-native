import { Pressable, Text, StyleSheet } from 'react-native';

interface ButtonProps {
  title: string;
  disabled?: boolean;
  onPress: () => void;
}

export function Button({ title, disabled, onPress }: ButtonProps) {
  return (
    <Pressable
      onPress={onPress}
      disabled={disabled}
      style={({ pressed }) => [styles.button, pressed && styles.buttonPressed]}
    >
      {({ pressed }) => <Text style={[styles.buttonText, pressed && styles.buttonTextPressed]}>{title}</Text>}
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
});
