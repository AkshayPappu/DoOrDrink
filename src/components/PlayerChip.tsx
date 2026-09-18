import React from 'react';
import {
  View,
  Text,
  TouchableOpacity,
  StyleSheet,
  ViewStyle,
  TextStyle,
} from 'react-native';
import { colors, typography, borderRadius, spacing } from '../theme';

interface PlayerChipProps {
  name: string;
  onRemove?: () => void;
  isActive?: boolean;
}

export function PlayerChip({ name, onRemove, isActive }: PlayerChipProps) {
  return (
    <View style={[styles.chip, isActive && styles.activeChip]}>
      <Text style={[styles.name, isActive && styles.activeName]} numberOfLines={1}>
        {name}
      </Text>
      {onRemove && (
        <TouchableOpacity
          onPress={onRemove}
          hitSlop={{ top: 8, bottom: 8, left: 8, right: 8 }}
          style={styles.removeButton}
        >
          <Text style={styles.removeText}>×</Text>
        </TouchableOpacity>
      )}
    </View>
  );
}

const styles = StyleSheet.create({
  chip: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: colors.surfaceElevated,
    borderRadius: borderRadius.pill,
    paddingVertical: spacing.sm + 2,
    paddingLeft: spacing.md,
    paddingRight: spacing.sm,
    marginRight: spacing.sm,
    marginBottom: spacing.sm,
    borderWidth: 1,
    borderColor: colors.separator,
  } as ViewStyle,
  activeChip: {
    borderColor: colors.accent,
    backgroundColor: 'rgba(191, 90, 242, 0.15)',
  } as ViewStyle,
  name: {
    ...typography.bodyBold,
    color: colors.textPrimary,
    marginRight: spacing.sm,
    maxWidth: 150,
  } as TextStyle,
  activeName: {
    color: colors.accent,
  } as TextStyle,
  removeButton: {
    width: 28,
    height: 28,
    borderRadius: 14,
    backgroundColor: 'rgba(255, 255, 255, 0.1)',
    alignItems: 'center',
    justifyContent: 'center',
  } as ViewStyle,
  removeText: {
    color: colors.textSecondary,
    fontSize: 18,
    fontWeight: '600',
    lineHeight: 20,
    marginTop: -1,
  } as TextStyle,
});
