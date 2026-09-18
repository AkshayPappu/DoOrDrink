import React, { useState, useRef } from 'react';
import {
  View,
  Text,
  TextInput,
  StyleSheet,
  StatusBar,
  ScrollView,
  KeyboardAvoidingView,
  Platform,
  TouchableOpacity,
  ViewStyle,
  TextStyle,
} from 'react-native';
import { useSafeAreaInsets } from 'react-native-safe-area-context';
import * as Haptics from 'expo-haptics';
import { PrimaryButton } from '../components/PrimaryButton';
import { PlayerChip } from '../components/PlayerChip';
import { Player } from '../types';
import { colors, typography, spacing, borderRadius } from '../theme';

interface PlayersScreenProps {
  players: Player[];
  onAddPlayer: (name: string) => boolean;
  onRemovePlayer: (id: string) => void;
  onStartGame: () => void;
  onBack: () => void;
}

export function PlayersScreen({
  players,
  onAddPlayer,
  onRemovePlayer,
  onStartGame,
  onBack,
}: PlayersScreenProps) {
  const insets = useSafeAreaInsets();
  const [inputValue, setInputValue] = useState('');
  const inputRef = useRef<TextInput>(null);

  const handleAddPlayer = () => {
    if (!inputValue.trim()) return;
    const success = onAddPlayer(inputValue);
    if (success) {
      Haptics.impactAsync(Haptics.ImpactFeedbackStyle.Light);
      setInputValue('');
    } else {
      Haptics.notificationAsync(Haptics.NotificationFeedbackType.Warning);
    }
  };

  const handleRemovePlayer = (id: string) => {
    Haptics.impactAsync(Haptics.ImpactFeedbackStyle.Light);
    onRemovePlayer(id);
  };

  const canStart = players.length >= 2;
  const isFull = players.length >= 12;

  return (
    <View style={styles.container}>
      <StatusBar barStyle="light-content" />
      <KeyboardAvoidingView
        behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
        style={styles.flex}
      >
        <View style={[styles.content, { paddingTop: insets.top + spacing.md }]}>
          <TouchableOpacity
            onPress={onBack}
            style={styles.backButton}
            hitSlop={{ top: 10, bottom: 10, left: 10, right: 10 }}
          >
            <Text style={styles.backText}>← Back</Text>
          </TouchableOpacity>

          <Text style={styles.title}>Who's playing?</Text>
          <Text style={styles.subtitle}>
            {players.length === 0
              ? 'Add at least 2 players to start.'
              : `${players.length} player${players.length !== 1 ? 's' : ''} added`}
          </Text>

          <ScrollView
            style={styles.playersList}
            contentContainerStyle={styles.playersContent}
            showsVerticalScrollIndicator={false}
            keyboardShouldPersistTaps="handled"
          >
            <View style={styles.chipsContainer}>
              {players.map((player) => (
                <PlayerChip
                  key={player.id}
                  name={player.name}
                  onRemove={() => handleRemovePlayer(player.id)}
                />
              ))}
            </View>
          </ScrollView>

          {!isFull && (
            <View style={styles.inputContainer}>
              <TextInput
                ref={inputRef}
                style={styles.input}
                placeholder="Enter a name..."
                placeholderTextColor={colors.textTertiary}
                value={inputValue}
                onChangeText={setInputValue}
                onSubmitEditing={handleAddPlayer}
                returnKeyType="done"
                autoCapitalize="words"
                autoCorrect={false}
                maxLength={20}
              />
              <TouchableOpacity
                onPress={handleAddPlayer}
                style={[
                  styles.addButton,
                  !inputValue.trim() && styles.addButtonDisabled,
                ]}
                disabled={!inputValue.trim()}
              >
                <Text
                  style={[
                    styles.addButtonText,
                    !inputValue.trim() && styles.addButtonTextDisabled,
                  ]}
                >
                  +
                </Text>
              </TouchableOpacity>
            </View>
          )}

          <View style={[styles.bottomSection, { paddingBottom: insets.bottom + spacing.lg }]}>
            <PrimaryButton
              title="START GAME"
              onPress={onStartGame}
              disabled={!canStart}
            />
          </View>
        </View>
      </KeyboardAvoidingView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.background,
  } as ViewStyle,
  flex: {
    flex: 1,
  } as ViewStyle,
  content: {
    flex: 1,
    paddingHorizontal: spacing.xl,
  } as ViewStyle,
  backButton: {
    alignSelf: 'flex-start',
    marginBottom: spacing.lg,
    paddingVertical: spacing.sm,
  } as ViewStyle,
  backText: {
    ...typography.headline,
    color: colors.accent,
  } as TextStyle,
  title: {
    ...typography.title1,
    color: colors.textPrimary,
    marginBottom: spacing.sm,
  } as TextStyle,
  subtitle: {
    ...typography.body,
    color: colors.textSecondary,
    marginBottom: spacing.xl,
  } as TextStyle,
  playersList: {
    flex: 1,
  } as ViewStyle,
  playersContent: {
    paddingBottom: spacing.md,
  } as ViewStyle,
  chipsContainer: {
    flexDirection: 'row',
    flexWrap: 'wrap',
  } as ViewStyle,
  inputContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: spacing.lg,
    gap: spacing.sm,
  } as ViewStyle,
  input: {
    flex: 1,
    height: 52,
    backgroundColor: colors.surfaceElevated,
    borderRadius: borderRadius.lg,
    paddingHorizontal: spacing.md,
    ...typography.body,
    color: colors.textPrimary,
    borderWidth: 1,
    borderColor: colors.separator,
  } as TextStyle,
  addButton: {
    width: 52,
    height: 52,
    borderRadius: borderRadius.lg,
    backgroundColor: colors.accent,
    alignItems: 'center',
    justifyContent: 'center',
  } as ViewStyle,
  addButtonDisabled: {
    backgroundColor: colors.surfaceBright,
  } as ViewStyle,
  addButtonText: {
    fontSize: 28,
    fontWeight: '600',
    color: colors.white,
    lineHeight: 30,
  } as TextStyle,
  addButtonTextDisabled: {
    color: colors.textTertiary,
  } as TextStyle,
  bottomSection: {
    paddingTop: spacing.md,
  } as ViewStyle,
});
