export type CardType = 'do' | 'group' | 'vote' | 'social';
export type Intensity = 1 | 2 | 3;

export interface GameCard {
  id: string;
  type: CardType;
  text: string;
  minPlayers: number;
  intensity: Intensity;
}
