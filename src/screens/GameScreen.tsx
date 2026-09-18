import React, { useEffect, useRef, useState } from 'react';
import {
  View,
  Text,
  StyleSheet,
  StatusBar,
  Dimensions,
  TouchableOpacity,
  Modal,
  Animated,
  PanResponder,
  ViewStyle,
  TextStyle,
} from 'react-native';
import { useSafeAreaInsets } from 'react-native-safe-area-context';
import * as Haptics from 'expo-haptics';
import { PrimaryButton } from '../components/PrimaryButton';
import { GameCardComponent, CARD_HEIGHT } from '../components/GameCard';
import { CardStack } from '../components/CardStack';
import { Player, GameCard } from '../types';
import { colors, typography, spacing, borderRadius } from '../theme';

const { width: SCREEN_WIDTH, height: SCREEN_HEIGHT } = Dimensions.get('window');
const SWIPE_THRESHOLD = -120;

interface GameScreenProps {
  currentPlayer: Player | null;
  currentCard: GameCard | null;
  phase: 'waiting' | 'drawing' | 'showing';
  cardsRemaining: number;
  players: Player[];
  onDrawCard: () => void;
  onShowCard: () => void;
  onNextPlayer: () => void;
  onSkipCard: () => void;
  onAddPlayer: (name: string) => boolean;
  onRemovePlayer: (id: string) => void;
  onRestartGame: () => void;
  onEndGame: () => void;
}

export function GameScreen({
  currentPlayer,
  currentCard,
  phase,
  cardsRemaining,
  players,
  onDrawCard,
  onShowCard,
  onNextPlayer,
  onSkipCard,
  onAddPlayer,
  onRemovePlayer,
  onRestartGame,
  onEndGame,
}: GameScreenProps) {
  const insets = useSafeAreaInsets();
  const [menuVisible, setMenuVisible] = useState(false);

  // Card draw animation
  const cardScale = useRef(new Animated.Value(0.85)).current;
  const cardOpacity = useRef(new Animated.Value(0)).current;
  const cardTranslateY = useRef(new Animated.Value(60)).current;
  const cardRotate = useRef(new Animated.Value(0)).current;

  // Bottom actions fade-in
  const bottomOpacity = useRef(new Animated.Value(0)).current;
  const bottomTranslateY = useRef(new Animated.Value(30)).current;

  // Swipe-to-next gesture
  const panY = useRef(new Animated.Value(0)).current;
  const panResponder = useRef(
    PanResponder.create({
      onMoveShouldSetPanResponder: (_, gestureState) =>
        Math.abs(gestureState.dy) > 10 && gestureState.dy < 0,
      onPanResponderMove: (_, gestureState) => {
        if (gestureState.dy < 0) {
          panY.setValue(gestureState.dy);
        }
      },
      onPanResponderRelease: (_, gestureState) => {
        if (gestureState.dy < SWIPE_THRESHOLD) {
          Animated.timing(panY, {
            toValue: -SCREEN_HEIGHT,
            duration: 300,
            useNativeDriver: true,
          }).start(() => {
            panY.setValue(0);
            onNextPlayer();
          });
          Haptics.impactAsync(Haptics.ImpactFeedbackStyle.Medium);
        } else {
          Animated.spring(panY, {
            toValue: 0,
            useNativeDriver: true,
            tension: 40,
            friction: 8,
          }).start();
        }
      },
    })
  ).current;

  useEffect(() => {
    if (phase === 'drawing') {
      cardScale.setValue(0.85);
      cardOpacity.setValue(0);
      cardTranslateY.setValue(60);
      cardRotate.setValue(0);
      bottomOpacity.setValue(0);
      bottomTranslateY.setValue(30);

      Haptics.impactAsync(Haptics.ImpactFeedbackStyle.Heavy);

      Animated.parallel([
        Animated.spring(cardScale, {
          toValue: 1,
          useNativeDriver: true,
          tension: 60,
          friction: 9,
        }),
        Animated.timing(cardOpacity, {
          toValue: 1,
          duration: 400,
          useNativeDriver: true,
        }),
        Animated.spring(cardTranslateY, {
          toValue: 0,
          useNativeDriver: true,
          tension: 50,
          friction: 8,
        }),
        Animated.sequence([
          Animated.timing(cardRotate, {
            toValue: 1,
            duration: 200,
            useNativeDriver: true,
          }),
          Animated.spring(cardRotate, {
            toValue: 2,
            useNativeDriver: true,
            tension: 40,
            friction: 6,
          }),
        ]),
      ]).start(() => {
        onShowCard();
        Animated.parallel([
          Animated.timing(bottomOpacity, {
            toValue: 1,
            duration: 300,
            useNativeDriver: true,
          }),
          Animated.spring(bottomTranslateY, {
            toValue: 0,
            useNativeDriver: true,
            tension: 50,
            friction: 10,
          }),
        ]).start();
      });
    }
  }, [phase]);

  const rotateInterpolate = cardRotate.interpolate({
    inputRange: [0, 1, 2],
    outputRange: ['-3deg', '2deg', '0deg'],
  });

  if (!currentPlayer) return null;

  return (
    <View style={styles.container}>
      <StatusBar barStyle="light-content" />

      <View style={[styles.header, { paddingTop: insets.top + spacing.sm }]}>
        <TouchableOpacity
          onPress={onEndGame}
          style={styles.endButton}
          hitSlop={{ top: 10, bottom: 10, left: 10, right: 10 }}
        >
          <Text style={styles.endButtonText}>← End</Text>
        </TouchableOpacity>
        <Text style={styles.cardsCount}>{cardsRemaining} cards left</Text>
        <TouchableOpacity
          onPress={() => setMenuVisible(true)}
          style={styles.menuButton}
          hitSlop={{ top: 10, bottom: 10, left: 10, right: 10 }}
        >
          <Text style={styles.menuDots}>•••</Text>
        </TouchableOpacity>
      </View>

      {phase === 'waiting' && (
        <View style={styles.centerContent}>
          <Text style={styles.playerName}>{currentPlayer.name.toUpperCase()}</Text>
          <Text style={styles.yourTurn}>You're up.</Text>
          <View style={styles.stackContainer}>
            <CardStack count={Math.min(cardsRemaining, 4)} />
          </View>
          <PrimaryButton title="DRAW CARD" onPress={onDrawCard} />
        </View>
      )}

      {(phase === 'drawing' || phase === 'showing') && currentCard && (
        <Animated.View
          style={[
            styles.cardContainer,
            {
              transform: [
                { scale: cardScale },
                { translateY: Animated.add(cardTranslateY, panY) },
                { rotate: rotateInterpolate },
              ],
              opacity: cardOpacity,
            },
          ]}
          {...(phase === 'showing' ? panResponder.panHandlers : {})}
        >
          <GameCardComponent card={currentCard} playerName={currentPlayer.name} />
        </Animated.View>
      )}

      {(phase === 'drawing' || phase === 'showing') && (
        <Animated.View
          style={[
            styles.bottomActions,
            {
              paddingBottom: insets.bottom + spacing.lg,
              opacity: bottomOpacity,
              transform: [{ translateY: bottomTranslateY }],
            },
          ]}
          pointerEvents={phase === 'showing' ? 'auto' : 'none'}
        >
          <PrimaryButton title="DONE — NEXT PLAYER" onPress={onNextPlayer} />
          <Text style={styles.swipeHint}>or swipe card up</Text>
        </Animated.View>
      )}

      {/* Menu Modal */}
      <Modal
        visible={menuVisible}
        transparent
        animationType="fade"
        onRequestClose={() => setMenuVisible(false)}
      >
        <TouchableOpacity
          style={styles.modalOverlay}
          activeOpacity={1}
          onPress={() => setMenuVisible(false)}
        >
          <View style={[styles.menuContainer, { paddingBottom: insets.bottom + spacing.lg }]}>
            <View style={styles.menuContent}>
              <Text style={styles.menuTitle}>Game Menu</Text>

              <TouchableOpacity
                style={styles.menuItem}
                onPress={() => {
                  setMenuVisible(false);
                  onSkipCard();
                }}
              >
                <Text style={styles.menuItemText}>Skip Card</Text>
              </TouchableOpacity>

              <View style={styles.menuSeparator} />

              <TouchableOpacity
                style={styles.menuItem}
                onPress={() => {
                  setMenuVisible(false);
                  onRestartGame();
                }}
              >
                <Text style={styles.menuItemText}>Restart Game</Text>
              </TouchableOpacity>

              <View style={styles.menuSeparator} />

              <TouchableOpacity
                style={styles.menuItem}
                onPress={() => {
                  setMenuVisible(false);
                  onEndGame();
                }}
              >
                <Text style={[styles.menuItemText, styles.dangerText]}>End Game</Text>
              </TouchableOpacity>
            </View>

            <TouchableOpacity
              style={styles.cancelButton}
              onPress={() => setMenuVisible(false)}
            >
              <Text style={styles.cancelText}>Cancel</Text>
            </TouchableOpacity>
          </View>
        </TouchableOpacity>
      </Modal>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.background,
  } as ViewStyle,
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingHorizontal: spacing.xl,
    paddingBottom: spacing.sm,
    zIndex: 10,
  } as ViewStyle,
  endButton: {
    paddingVertical: spacing.sm,
  } as ViewStyle,
  endButtonText: {
    ...typography.headline,
    color: colors.accent,
  } as TextStyle,
  cardsCount: {
    ...typography.footnote,
    color: colors.textTertiary,
  } as TextStyle,
  menuButton: {
    padding: spacing.sm,
  } as ViewStyle,
  menuDots: {
    ...typography.title3,
    color: colors.textSecondary,
    letterSpacing: 2,
  } as TextStyle,
  centerContent: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    paddingHorizontal: spacing.xl,
  } as ViewStyle,
  playerName: {
    fontSize: 48,
    fontWeight: '900',
    color: colors.white,
    letterSpacing: 2,
    textAlign: 'center',
    marginBottom: spacing.sm,
  } as TextStyle,
  yourTurn: {
    ...typography.title3,
    color: colors.textSecondary,
    marginBottom: spacing.xxl,
  } as TextStyle,
  stackContainer: {
    marginBottom: spacing.xxl,
    alignItems: 'center',
  } as ViewStyle,
  cardContainer: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    paddingHorizontal: spacing.xl,
  } as ViewStyle,
  bottomActions: {
    position: 'absolute',
    bottom: 0,
    left: 0,
    right: 0,
    paddingHorizontal: spacing.xl,
    paddingTop: spacing.md,
    alignItems: 'center',
  } as ViewStyle,
  swipeHint: {
    ...typography.caption,
    color: colors.textTertiary,
    marginTop: spacing.sm,
  } as TextStyle,

  // Menu modal
  modalOverlay: {
    flex: 1,
    backgroundColor: colors.overlay,
    justifyContent: 'flex-end',
  } as ViewStyle,
  menuContainer: {
    paddingHorizontal: spacing.md,
  } as ViewStyle,
  menuContent: {
    backgroundColor: colors.surfaceElevated,
    borderRadius: borderRadius.xl,
    overflow: 'hidden',
    marginBottom: spacing.sm,
  } as ViewStyle,
  menuTitle: {
    ...typography.footnote,
    color: colors.textTertiary,
    textAlign: 'center',
    paddingVertical: spacing.md,
    textTransform: 'uppercase',
    letterSpacing: 1,
  } as TextStyle,
  menuItem: {
    paddingVertical: spacing.md + 2,
    alignItems: 'center',
  } as ViewStyle,
  menuItemText: {
    ...typography.title3,
    color: colors.accent,
  } as TextStyle,
  menuSeparator: {
    height: StyleSheet.hairlineWidth,
    backgroundColor: colors.separator,
  } as ViewStyle,
  dangerText: {
    color: colors.danger,
  } as TextStyle,
  cancelButton: {
    backgroundColor: colors.surfaceElevated,
    borderRadius: borderRadius.xl,
    paddingVertical: spacing.md + 2,
    alignItems: 'center',
  } as ViewStyle,
  cancelText: {
    ...typography.title3,
    color: colors.accent,
    fontWeight: '700',
  } as TextStyle,
});
