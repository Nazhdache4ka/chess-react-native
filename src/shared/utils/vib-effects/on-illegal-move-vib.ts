import * as Haptics from 'expo-haptics';

export function onIllegalMoveVib() {
  Haptics.notificationAsync(Haptics.NotificationFeedbackType.Error);
}
