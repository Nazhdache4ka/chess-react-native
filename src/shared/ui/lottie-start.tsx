import { useEffect, useMemo, useRef } from 'react';
import { View, StyleSheet, Platform } from 'react-native';
import LottieView from 'lottie-react-native';
import Lottie from 'lottie-react';
import animationData from './assets/animation.json';
import { GamePhase, useStoreContext } from '@/shared';

export function LottieStart() {
  const animationRef = useRef<LottieView>(null);
  const { gameInfoStore } = useStoreContext();
  const { phase, setPhase } = gameInfoStore;

  const isVisible = useMemo(() => {
    return phase === GamePhase.START;
  }, [phase]);

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

  const onComplete = () => {
    setPhase(GamePhase.ONGOING);
  };

  if (Platform.OS === 'web') {
    return isVisible ? (
      <View style={styles.container}>
        <Lottie
          animationData={animationData}
          loop={false}
          onComplete={onComplete}
        />
      </View>
    ) : null;
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
