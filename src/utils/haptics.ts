import { Platform } from 'react-native';

const isWeb = Platform.OS === 'web';

type ImpactStyle = 'light' | 'medium' | 'heavy';
type NotificationType = 'success' | 'warning' | 'error';

const ImpactFeedbackStyle = {
  Light: 'light' as ImpactStyle,
  Medium: 'medium' as ImpactStyle,
  Heavy: 'heavy' as ImpactStyle,
};

const NotificationFeedbackType = {
  Success: 'success' as NotificationType,
  Warning: 'warning' as NotificationType,
  Error: 'error' as NotificationType,
};

async function impactAsync(_style?: ImpactStyle): Promise<void> {
  if (isWeb) return;
  const Haptics = require('expo-haptics');
  return Haptics.impactAsync(_style);
}

async function notificationAsync(_type?: NotificationType): Promise<void> {
  if (isWeb) return;
  const Haptics = require('expo-haptics');
  return Haptics.notificationAsync(_type);
}

async function selectionAsync(): Promise<void> {
  if (isWeb) return;
  const Haptics = require('expo-haptics');
  return Haptics.selectionAsync();
}

export {
  impactAsync,
  notificationAsync,
  selectionAsync,
  ImpactFeedbackStyle,
  NotificationFeedbackType,
};
