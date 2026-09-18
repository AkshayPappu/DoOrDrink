export interface Player {
  id: string;
  name: string;
}

export interface GameState {
  players: Player[];
  currentPlayerIndex: number;
  remainingCards: import('./Card').GameCard[];
  currentCard: import('./Card').GameCard | null;
  phase: 'waiting' | 'drawing' | 'showing';
}
