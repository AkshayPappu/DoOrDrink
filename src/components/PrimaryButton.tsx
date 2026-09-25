import React from 'react';
import {
  TouchableOpacity,
  Text,
  StyleSheet,
  ViewStyle,
  TextStyle,
} from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';
import * as Haptics from '../utils/haptics';
import { colors, typography, borderRadius, spacing } from '../theme';

interface PrimaryButtonProps {
  title: string;
  onPress: () => void;
  variant?: 'primary' | 'secondary' | 'ghost';
  disabled?: boolean;
  style?: ViewStyle;
}

export function PrimaryButton({
  title,
  onPress,
  variant = 'primary',
  disabled = false,
  style,
}: PrimaryButtonProps) {
  const handlePress = () => {
    if (disabled) return;
    Haptics.impactAsync(Haptics.ImpactFeedbackStyle.Medium);
    onPress();
  };

  if (variant === 'ghost') {
    return (
      <TouchableOpacity
        onPress={handlePress}
        disabled={disabled}
        activeOpacity={0.6}
        style={[styles.ghostButton, disabled && styles.disabledGhost, style]}
      >
        <Text style={[styles.ghostText, disabled && styles.disabledText]}>
          {title}
        </Text>
      </TouchableOpacity>
    );
  }

  if (variant === 'secondary') {
    return (
      <TouchableOpacity
        onPress={handlePress}
        disabled={disabled}
        activeOpacity={0.7}
        style={[
          styles.secondaryButton,
          disabled && styles.disabledSecondary,
          style,
        ]}
      >
        <Text
          style={[styles.secondaryText, disabled && styles.disabledText]}
        >
          {title}
        </Text>
      </TouchableOpacity>
    );
  }

  return (
    <TouchableOpacity
      onPress={handlePress}
      disabled={disabled}
      activeOpacity={0.85}
      style={[disabled && styles.disabledWrapper, style]}
    >
      <LinearGradient
        colors={
          disabled
            ? [colors.surfaceBright, colors.surfaceBright]
            : [colors.accent, '#8B5CF6']
        }
        start={{ x: 0, y: 0 }}
        end={{ x: 1, y: 1 }}
        style={styles.primaryButton}
      >
        <Text style={[styles.primaryText, disabled && styles.disabledText]}>
          {title}
        </Text>
      </LinearGradient>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  primaryButton: {
    height: 58,
    borderRadius: borderRadius.xl,
    alignItems: 'center',
    justifyContent: 'center',
    paddingHorizontal: spacing.xl,
  } as ViewStyle,
  primaryText: {
    ...typography.buttonLarge,
    color: colors.white,
    textTransform: 'uppercase',
  } as TextStyle,
  secondaryButton: {
    height: 50,
    borderRadius: borderRadius.xl,
    alignItems: 'center',
    justifyContent: 'center',
    paddingHorizontal: spacing.xl,
    backgroundColor: colors.surfaceElevated,
    borderWidth: 1,
    borderColor: colors.separator,
  } as ViewStyle,
  secondaryText: {
    ...typography.buttonSmall,
    color: colors.textSecondary,
    textTransform: 'uppercase',
  } as TextStyle,
  ghostButton: {
    height: 44,
    alignItems: 'center',
    justifyContent: 'center',
    paddingHorizontal: spacing.md,
  } as ViewStyle,
  ghostText: {
    ...typography.buttonSmall,
    color: colors.textSecondary,
  } as TextStyle,
  disabledWrapper: {
    opacity: 0.5,
  } as ViewStyle,
  disabledSecondary: {
    opacity: 0.4,
  } as ViewStyle,
  disabledGhost: {
    opacity: 0.4,
  } as ViewStyle,
  disabledText: {
    color: colors.textTertiary,
  } as TextStyle,
});
