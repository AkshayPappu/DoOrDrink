import React from 'react';
import { View, Text, StyleSheet, Dimensions, Platform, ViewStyle, TextStyle } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';
import { GameCard as GameCardType, CardType } from '../types';
import { colors, typography, borderRadius, spacing } from '../theme';

const { width: SCREEN_WIDTH, height: SCREEN_HEIGHT } = Dimensions.get('window');
const MAX_APP_WIDTH = 480;
const effectiveWidth = Platform.OS === 'web' ? Math.min(SCREEN_WIDTH, MAX_APP_WIDTH) : SCREEN_WIDTH;
const CARD_WIDTH = effectiveWidth - spacing.xl * 2;
const maxCardHeight = SCREEN_HEIGHT * 0.6;
const CARD_HEIGHT = Math.min(CARD_WIDTH * 1.45, maxCardHeight);

const TYPE_LABELS: Record<CardType, string> = {
  do: 'DO',
  group: 'EVERYONE',
  vote: 'VOTE',
  social: 'SOCIAL',
};

interface GameCardComponentProps {
  card: GameCardType;
  playerName?: string;
}

export function GameCardComponent({ card, playerName }: GameCardComponentProps) {
  const gradientColors = colors.cardGradients[card.type];

  return (
    <View style={styles.cardShadow}>
      <LinearGradient
        colors={[...gradientColors]}
        start={{ x: 0, y: 0 }}
        end={{ x: 1, y: 1 }}
        style={styles.card}
      >
        <View style={styles.cardInner}>
          <View style={styles.topSection}>
            <Text style={styles.typeLabel}>{TYPE_LABELS[card.type]}</Text>
            {playerName && (
              <Text style={styles.playerLabel}>{playerName}</Text>
            )}
          </View>

          <View style={styles.bodySection}>
            <Text style={styles.cardText}>{card.text}</Text>
          </View>

          <View style={styles.bottomSection}>
            {card.type === 'do' && (
              <Text style={styles.tagline}>Do it or drink.</Text>
            )}
            <Text style={styles.cardNumber}>
              {card.id.replace(/[a-z]/g, '').padStart(3, '0')}
            </Text>
          </View>
        </View>
      </LinearGradient>
    </View>
  );
}

export { CARD_WIDTH, CARD_HEIGHT };

const styles = StyleSheet.create({
  cardShadow: {
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 12 },
    shadowOpacity: 0.4,
    shadowRadius: 24,
    elevation: 16,
  } as ViewStyle,
  card: {
    width: CARD_WIDTH,
    height: CARD_HEIGHT,
    borderRadius: borderRadius.card,
    overflow: 'hidden',
  } as ViewStyle,
  cardInner: {
    flex: 1,
    padding: spacing.xl,
    justifyContent: 'space-between',
  } as ViewStyle,
  topSection: {
    gap: spacing.xs,
  } as ViewStyle,
  typeLabel: {
    ...typography.cardType,
    color: 'rgba(255, 255, 255, 0.7)',
  } as TextStyle,
  playerLabel: {
    ...typography.subhead,
    color: 'rgba(255, 255, 255, 0.5)',
    marginTop: spacing.xs,
  } as TextStyle,
  bodySection: {
    flex: 1,
    justifyContent: 'center',
    paddingVertical: spacing.lg,
  } as ViewStyle,
  cardText: {
    ...typography.cardBody,
    color: colors.cardText,
  } as TextStyle,
  bottomSection: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'flex-end',
  } as ViewStyle,
  tagline: {
    ...typography.subhead,
    color: 'rgba(255, 255, 255, 0.5)',
    fontStyle: 'italic',
  } as TextStyle,
  cardNumber: {
    ...typography.footnote,
    color: 'rgba(255, 255, 255, 0.3)',
    fontVariant: ['tabular-nums'],
  } as TextStyle,
});
