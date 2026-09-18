import React from 'react';
import { View, StyleSheet, ViewStyle } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';
import { colors, borderRadius, spacing } from '../theme';
import { CARD_WIDTH, CARD_HEIGHT } from './GameCard';

interface CardStackProps {
  count?: number;
}

export function CardStack({ count = 3 }: CardStackProps) {
  const stackCards = Array.from({ length: Math.min(count, 4) }, (_, i) => i);

  return (
    <View style={styles.container}>
      {stackCards.map((index) => {
        const offset = index * 4;
        const scale = 1 - index * 0.03;
        const opacity = 1 - index * 0.15;

        return (
          <View
            key={index}
            style={[
              styles.cardWrapper,
              {
                transform: [
                  { translateY: -offset },
                  { scale },
                ],
                opacity,
                zIndex: stackCards.length - index,
              },
            ]}
          >
            <LinearGradient
              colors={['#2C2C2E', '#1C1C1E']}
              start={{ x: 0, y: 0 }}
              end={{ x: 1, y: 1 }}
              style={styles.card}
            >
              <View style={styles.cardPattern}>
                <View style={styles.logoContainer}>
                  <View style={styles.logoDot} />
                </View>
              </View>
            </LinearGradient>
          </View>
        );
      })}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    width: CARD_WIDTH,
    height: CARD_HEIGHT,
    alignItems: 'center',
    justifyContent: 'center',
  } as ViewStyle,
  cardWrapper: {
    position: 'absolute',
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 8 },
    shadowOpacity: 0.3,
    shadowRadius: 16,
    elevation: 8,
  } as ViewStyle,
  card: {
    width: CARD_WIDTH,
    height: CARD_HEIGHT,
    borderRadius: borderRadius.card,
    overflow: 'hidden',
    borderWidth: 1,
    borderColor: 'rgba(255, 255, 255, 0.06)',
  } as ViewStyle,
  cardPattern: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  } as ViewStyle,
  logoContainer: {
    width: 60,
    height: 60,
    borderRadius: 30,
    backgroundColor: 'rgba(255, 255, 255, 0.04)',
    alignItems: 'center',
    justifyContent: 'center',
  } as ViewStyle,
  logoDot: {
    width: 24,
    height: 24,
    borderRadius: 12,
    backgroundColor: 'rgba(255, 255, 255, 0.06)',
  } as ViewStyle,
});
