export const colors = {
  background: '#0A0A0A',
  surface: '#141414',
  surfaceElevated: '#1C1C1E',
  surfaceBright: '#2C2C2E',

  white: '#FFFFFF',
  textPrimary: '#FFFFFF',
  textSecondary: 'rgba(255, 255, 255, 0.6)',
  textTertiary: 'rgba(255, 255, 255, 0.35)',

  separator: 'rgba(255, 255, 255, 0.08)',
  overlay: 'rgba(0, 0, 0, 0.5)',

  accent: '#BF5AF2',

  cardGradients: {
    do: ['#7B2FBE', '#4F46E5'] as const,
    group: ['#F97316', '#EC4899'] as const,
    vote: ['#0EA5E9', '#06B6D4'] as const,
    social: ['#EF4444', '#D946EF'] as const,
  },

  cardText: '#FFFFFF',

  danger: '#FF453A',
  success: '#30D158',
} as const;
