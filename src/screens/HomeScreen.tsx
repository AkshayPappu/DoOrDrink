import React, { useState } from 'react';
import {
  View,
  Text,
  StyleSheet,
  StatusBar,
  Modal,
  TouchableOpacity,
  ScrollView,
  ViewStyle,
  TextStyle,
} from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';
import { useSafeAreaInsets } from 'react-native-safe-area-context';
import { PrimaryButton } from '../components/PrimaryButton';
import { colors, typography, spacing, borderRadius } from '../theme';

interface HomeScreenProps {
  onPlay: () => void;
}

export function HomeScreen({ onPlay }: HomeScreenProps) {
  const insets = useSafeAreaInsets();
  const [showRules, setShowRules] = useState(false);

  return (
    <View style={styles.container}>
      <StatusBar barStyle="light-content" />
      <LinearGradient
        colors={['#0F0A1A', '#0A0A0A', '#0A0A0A']}
        style={styles.gradient}
      >
        <View style={[styles.content, { paddingTop: insets.top + spacing.xxxl }]}>
          <View style={styles.hero}>
            <View style={styles.brandContainer}>
              <Text style={styles.brandDO}>DO</Text>
              <Text style={styles.brandOR}>or</Text>
              <Text style={styles.brandDRINK}>DRINK</Text>
            </View>
            <Text style={styles.tagline}>The party game with two choices.</Text>
          </View>

          <View
            style={[styles.buttonContainer, { paddingBottom: insets.bottom + spacing.xl }]}
          >
            <PrimaryButton title="PLAY" onPress={onPlay} />
            <View style={styles.buttonSpacer} />
            <PrimaryButton
              title="HOW TO PLAY"
              onPress={() => setShowRules(true)}
              variant="secondary"
            />
          </View>
        </View>
      </LinearGradient>

      <Modal
        visible={showRules}
        transparent
        animationType="slide"
        onRequestClose={() => setShowRules(false)}
      >
        <View style={[styles.rulesOverlay, { paddingTop: insets.top }]}>
          <View style={styles.rulesContainer}>
            <View style={styles.rulesHandle} />
            <ScrollView
              showsVerticalScrollIndicator={false}
              contentContainerStyle={styles.rulesScroll}
            >
              <Text style={styles.rulesTitle}>How to Play</Text>

              <View style={styles.step}>
                <Text style={styles.stepNumber}>1</Text>
                <View style={styles.stepContent}>
                  <Text style={styles.stepTitle}>Add Players</Text>
                  <Text style={styles.stepBody}>
                    Enter the names of everyone playing. You need at least 2 people.
                  </Text>
                </View>
              </View>

              <View style={styles.step}>
                <Text style={styles.stepNumber}>2</Text>
                <View style={styles.stepContent}>
                  <Text style={styles.stepTitle}>Draw a Card</Text>
                  <Text style={styles.stepBody}>
                    Each round, a player taps "Draw Card" to reveal a challenge. Pass the phone around or set it where everyone can see.
                  </Text>
                </View>
              </View>

              <View style={styles.step}>
                <Text style={styles.stepNumber}>3</Text>
                <View style={styles.stepContent}>
                  <Text style={styles.stepTitle}>Do It or Drink</Text>
                  <Text style={styles.stepBody}>
                    Complete the challenge — or take a drink. It's that simple. The group keeps each other honest.
                  </Text>
                </View>
              </View>

              <View style={styles.step}>
                <Text style={styles.stepNumber}>4</Text>
                <View style={styles.stepContent}>
                  <Text style={styles.stepTitle}>Next Player</Text>
                  <Text style={styles.stepBody}>
                    Tap "Done" or swipe the card up to move to the next player. The game loops forever — stop whenever you want.
                  </Text>
                </View>
              </View>

              <View style={styles.cardTypesSection}>
                <Text style={styles.cardTypesTitle}>Card Types</Text>

                <View style={styles.cardType}>
                  <View style={[styles.typeBadge, { backgroundColor: '#7B2FBE' }]}>
                    <Text style={styles.typeBadgeText}>DO</Text>
                  </View>
                  <Text style={styles.typeDesc}>Personal dares and phone challenges</Text>
                </View>

                <View style={styles.cardType}>
                  <View style={[styles.typeBadge, { backgroundColor: '#F97316' }]}>
                    <Text style={styles.typeBadgeText}>EVERYONE</Text>
                  </View>
                  <Text style={styles.typeDesc}>The whole group participates</Text>
                </View>

                <View style={styles.cardType}>
                  <View style={[styles.typeBadge, { backgroundColor: '#0EA5E9' }]}>
                    <Text style={styles.typeBadgeText}>VOTE</Text>
                  </View>
                  <Text style={styles.typeDesc}>Point to who fits the prompt — most votes drinks</Text>
                </View>

                <View style={styles.cardType}>
                  <View style={[styles.typeBadge, { backgroundColor: '#EF4444' }]}>
                    <Text style={styles.typeBadgeText}>SOCIAL</Text>
                  </View>
                  <Text style={styles.typeDesc}>1v1 challenges between two players</Text>
                </View>
              </View>
            </ScrollView>

            <View style={[styles.rulesBottom, { paddingBottom: insets.bottom + spacing.md }]}>
              <PrimaryButton title="GOT IT" onPress={() => setShowRules(false)} />
            </View>
          </View>
        </View>
      </Modal>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.background,
  } as ViewStyle,
  gradient: {
    flex: 1,
  } as ViewStyle,
  content: {
    flex: 1,
    justifyContent: 'space-between',
    paddingHorizontal: spacing.xl,
  } as ViewStyle,
  hero: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  } as ViewStyle,
  brandContainer: {
    alignItems: 'center',
    marginBottom: spacing.lg,
  } as ViewStyle,
  brandDO: {
    fontSize: 72,
    fontWeight: '900',
    color: colors.white,
    letterSpacing: 6,
    lineHeight: 78,
  } as TextStyle,
  brandOR: {
    fontSize: 24,
    fontWeight: '300',
    color: colors.textTertiary,
    letterSpacing: 8,
    lineHeight: 36,
    textTransform: 'lowercase',
  } as TextStyle,
  brandDRINK: {
    fontSize: 72,
    fontWeight: '900',
    color: colors.accent,
    letterSpacing: 6,
    lineHeight: 78,
  } as TextStyle,
  tagline: {
    ...typography.body,
    color: colors.textSecondary,
    textAlign: 'center',
  } as TextStyle,
  buttonContainer: {
    width: '100%',
  } as ViewStyle,
  buttonSpacer: {
    height: spacing.md,
  } as ViewStyle,

  rulesOverlay: {
    flex: 1,
    backgroundColor: colors.background,
  } as ViewStyle,
  rulesContainer: {
    flex: 1,
  } as ViewStyle,
  rulesHandle: {
    width: 36,
    height: 5,
    borderRadius: 3,
    backgroundColor: colors.surfaceBright,
    alignSelf: 'center',
    marginTop: spacing.sm,
    marginBottom: spacing.md,
  } as ViewStyle,
  rulesScroll: {
    paddingHorizontal: spacing.xl,
    paddingBottom: spacing.xxl,
  } as ViewStyle,
  rulesTitle: {
    ...typography.title1,
    color: colors.textPrimary,
    marginBottom: spacing.xl,
  } as TextStyle,
  step: {
    flexDirection: 'row',
    marginBottom: spacing.lg,
    alignItems: 'flex-start',
  } as ViewStyle,
  stepNumber: {
    width: 32,
    height: 32,
    borderRadius: 16,
    backgroundColor: colors.accent,
    color: colors.white,
    fontSize: 16,
    fontWeight: '700',
    textAlign: 'center',
    lineHeight: 32,
    marginRight: spacing.md,
    overflow: 'hidden',
  } as TextStyle,
  stepContent: {
    flex: 1,
  } as ViewStyle,
  stepTitle: {
    ...typography.headline,
    color: colors.textPrimary,
    marginBottom: spacing.xs,
  } as TextStyle,
  stepBody: {
    ...typography.body,
    color: colors.textSecondary,
    lineHeight: 22,
  } as TextStyle,
  cardTypesSection: {
    marginTop: spacing.lg,
    paddingTop: spacing.lg,
    borderTopWidth: StyleSheet.hairlineWidth,
    borderTopColor: colors.separator,
  } as ViewStyle,
  cardTypesTitle: {
    ...typography.title3,
    color: colors.textPrimary,
    marginBottom: spacing.md,
  } as TextStyle,
  cardType: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: spacing.md,
  } as ViewStyle,
  typeBadge: {
    paddingHorizontal: spacing.sm + 2,
    paddingVertical: spacing.xs + 1,
    borderRadius: borderRadius.sm,
    marginRight: spacing.md,
    minWidth: 80,
    alignItems: 'center',
  } as ViewStyle,
  typeBadgeText: {
    fontSize: 11,
    fontWeight: '800',
    color: colors.white,
    letterSpacing: 1.5,
  } as TextStyle,
  typeDesc: {
    ...typography.subhead,
    color: colors.textSecondary,
    flex: 1,
  } as TextStyle,
  rulesBottom: {
    paddingHorizontal: spacing.xl,
    paddingTop: spacing.md,
    borderTopWidth: StyleSheet.hairlineWidth,
    borderTopColor: colors.separator,
  } as ViewStyle,
});
