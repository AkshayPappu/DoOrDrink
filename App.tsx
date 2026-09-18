import React, { useState } from 'react';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import { GestureHandlerRootView } from 'react-native-gesture-handler';
import { StyleSheet } from 'react-native';
import { HomeScreen } from './src/screens/HomeScreen';
import { PlayersScreen } from './src/screens/PlayersScreen';
import { GameScreen } from './src/screens/GameScreen';
import { useGame } from './src/hooks/useGame';

type Screen = 'home' | 'players' | 'game';

export default function App() {
  const [screen, setScreen] = useState<Screen>('home');
  const game = useGame();

  const handlePlay = () => setScreen('players');

  const handleStartGame = () => {
    game.startGame();
    setScreen('game');
  };

  const handleEndGame = () => {
    game.endGame();
    setScreen('home');
  };

  const handleBack = () => setScreen('home');

  return (
    <GestureHandlerRootView style={styles.flex}>
      <SafeAreaProvider>
        {screen === 'home' && <HomeScreen onPlay={handlePlay} />}

        {screen === 'players' && (
          <PlayersScreen
            players={game.state.players}
            onAddPlayer={game.addPlayer}
            onRemovePlayer={game.removePlayer}
            onStartGame={handleStartGame}
            onBack={handleBack}
          />
        )}

        {screen === 'game' && (
          <GameScreen
            currentPlayer={game.currentPlayer}
            currentCard={game.state.currentCard}
            phase={game.state.phase}
            cardsRemaining={game.cardsRemaining}
            players={game.state.players}
            onDrawCard={game.drawCard}
            onShowCard={game.showCard}
            onNextPlayer={game.nextPlayer}
            onSkipCard={game.skipCard}
            onAddPlayer={game.addPlayer}
            onRemovePlayer={game.removePlayer}
            onRestartGame={game.restartGame}
            onEndGame={handleEndGame}
          />
        )}
      </SafeAreaProvider>
    </GestureHandlerRootView>
  );
}

const styles = StyleSheet.create({
  flex: {
    flex: 1,
  },
});
