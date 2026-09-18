import React from 'react';
import {
  View,
  Text,
  StyleSheet,
  StatusBar,
  Dimensions,
  ViewStyle,
  TextStyle,
} from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';
import { useSafeAreaInsets } from 'react-native-safe-area-context';
import { PrimaryButton } from '../components/PrimaryButton';
import { colors, typography, spacing } from '../theme';

const { height: SCREEN_HEIGHT } = Dimensions.get('window');

interface HomeScreenProps {
  onPlay: () => void;
}

export function HomeScreen({ onPlay }: HomeScreenProps) {
  const insets = useSafeAreaInsets();

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
              onPress={() => {}}
              variant="secondary"
            />
          </View>
        </View>
      </LinearGradient>
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
});
