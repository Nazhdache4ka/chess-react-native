import { useEffect, useRef } from 'react';
import { View, StyleSheet } from 'react-native';
import LottieView from 'lottie-react-native';

interface LottieStartProps {
  isVisible: boolean;
  onComplete: () => void;
}

export function LottieStart({ isVisible, onComplete }: LottieStartProps) {
  const animationRef = useRef<LottieView>(null);

  useEffect(() => {
    if (isVisible && animationRef.current) {
      animationRef.current.play();
    } else if (!isVisible && animationRef.current) {
      animationRef.current.reset();
    }
  }, [isVisible]);

  if (!isVisible) {
    return null;
  }

  return (
    <View style={styles.container}>
      <LottieView
        ref={animationRef}
        // eslint-disable-next-line @typescript-eslint/no-require-imports
        source={require('./assets/animation.json')}
        loop={false}
        onAnimationFinish={onComplete}
        style={styles.animation}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    justifyContent: 'center',
    alignItems: 'center',
    zIndex: 1000,
  },
  animation: {
    width: 300,
    height: 300,
  },
});
