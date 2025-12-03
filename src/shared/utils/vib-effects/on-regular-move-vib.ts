import * as Haptics from 'expo-haptics';

export function onRegularMoveVib() {
  Haptics.impactAsync(Haptics.ImpactFeedbackStyle.Light);
}
