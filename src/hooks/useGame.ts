import { useState, useCallback, useRef } from 'react';
import { GameCard, Player, GameState } from '../types';
import { cards as allCards } from '../data/cards';
import { shuffle, generateId } from '../utils/shuffle';

const INITIAL_STATE: GameState = {
  players: [],
  currentPlayerIndex: 0,
  remainingCards: [],
  currentCard: null,
  phase: 'waiting',
};

export function useGame() {
  const [state, setState] = useState<GameState>(INITIAL_STATE);
  const usedCardsRef = useRef<Set<string>>(new Set());

  const addPlayer = useCallback((name: string) => {
    const trimmed = name.trim();
    if (!trimmed) return false;

    setState((prev) => {
      if (prev.players.length >= 12) return prev;
      if (prev.players.some((p) => p.name.toLowerCase() === trimmed.toLowerCase())) {
        return prev;
      }
      return {
        ...prev,
        players: [...prev.players, { id: generateId(), name: trimmed }],
      };
    });
    return true;
  }, []);

  const removePlayer = useCallback((playerId: string) => {
    setState((prev) => {
      const newPlayers = prev.players.filter((p) => p.id !== playerId);
      const newIndex = prev.currentPlayerIndex >= newPlayers.length
        ? 0
        : prev.currentPlayerIndex;
      return { ...prev, players: newPlayers, currentPlayerIndex: newIndex };
    });
  }, []);

  const startGame = useCallback(() => {
    const shuffledPlayers = shuffle(state.players);
    const eligibleCards = allCards.filter(
      (card) => card.minPlayers <= shuffledPlayers.length
    );
    const shuffledCards = shuffle(eligibleCards);
    usedCardsRef.current = new Set();

    setState({
      players: shuffledPlayers,
      currentPlayerIndex: 0,
      remainingCards: shuffledCards,
      currentCard: null,
      phase: 'waiting',
    });
  }, [state.players]);

  const drawCard = useCallback(() => {
    setState((prev) => {
      let deck = prev.remainingCards;

      if (deck.length === 0) {
        const eligibleCards = allCards.filter(
          (card) => card.minPlayers <= prev.players.length
        );
        deck = shuffle(eligibleCards);
        usedCardsRef.current = new Set();
      }

      const card = deck[0];
      usedCardsRef.current.add(card.id);

      return {
        ...prev,
        remainingCards: deck.slice(1),
        currentCard: card,
        phase: 'drawing',
      };
    });
  }, []);

  const showCard = useCallback(() => {
    setState((prev) => ({ ...prev, phase: 'showing' }));
  }, []);

  const nextPlayer = useCallback(() => {
    setState((prev) => ({
      ...prev,
      currentPlayerIndex: (prev.currentPlayerIndex + 1) % prev.players.length,
      currentCard: null,
      phase: 'waiting',
    }));
  }, []);

  const skipCard = useCallback(() => {
    setState((prev) => ({
      ...prev,
      currentCard: null,
      phase: 'waiting',
    }));
  }, []);

  const restartGame = useCallback(() => {
    const shuffledPlayers = shuffle(state.players);
    const eligibleCards = allCards.filter(
      (card) => card.minPlayers <= shuffledPlayers.length
    );
    const shuffledCards = shuffle(eligibleCards);
    usedCardsRef.current = new Set();

    setState({
      players: shuffledPlayers,
      currentPlayerIndex: 0,
      remainingCards: shuffledCards,
      currentCard: null,
      phase: 'waiting',
    });
  }, [state.players]);

  const endGame = useCallback(() => {
    setState(INITIAL_STATE);
  }, []);

  const currentPlayer: Player | null =
    state.players.length > 0
      ? state.players[state.currentPlayerIndex]
      : null;

  const cardsRemaining = state.remainingCards.length;
  const isGameActive = state.players.length >= 2;

  return {
    state,
    currentPlayer,
    cardsRemaining,
    isGameActive,
    addPlayer,
    removePlayer,
    startGame,
    drawCard,
    showCard,
    nextPlayer,
    skipCard,
    restartGame,
    endGame,
  };
}
