import React, { useCallback, useMemo, useState } from 'react';
import { Animated, PanResponder, Text, TouchableHighlightBase, TouchableOpacity } from 'react-native';

import Grid from '../../components/Grid';
import { GameController } from '../../utils/GameController';
import { mergeRight, mergeLeft, moveDown, moveLeft, moveRight, moveUp, mergeUp, mergeDown } from '../../utils/moves';

import { Container, Data, GridContainer } from './styles';

const INITIAL_GRID = [
  [0, 0, 0, 0],
  [0, 2, 2, 0],
  [0, 2, 2, 0],
  [0, 0, 0, 0],
];

const Game: React.FC = () => {
  const [gameController, setGameController] = useState(new GameController(4));
  const [turn, setTurn] = useState(1);

  const panResponder = useMemo(() =>
    PanResponder.create({
      onMoveShouldSetPanResponder: () => true,
      onPanResponderRelease: (e, gestureState) => {
        const { dx, dy } = gestureState;

        if (!gameController._gameOver) {

          if (Math.abs(dx) > Math.abs(dy)) {
            if (Math.abs(dx) > 100) {
              if (dx > 0) {
                gameController.nextMove('right');
              } else {
                gameController.nextMove('left');
              }
              setTurn(trn => trn + 1);
            }
          } else {
            if (Math.abs(dy) > 100) {
              if (dy > 0) {
                gameController.nextMove('down');
              } else {
                gameController.nextMove('up');
              }
              setTurn(trn => trn + 1);
            }
          }
        }
      }
    })
    , [gameController]);

  const handleNewGame = useCallback(() => {
    setGameController(new GameController(4));
    setTurn(trn => 1);
  }, []);

  return (
    <Container>
      <TouchableOpacity onPress={handleNewGame}>
        <Text>New Game</Text>
      </TouchableOpacity>
      <Data>
        <Text>Score {gameController._score}</Text>
        <Text>Turn {turn}</Text>
      </Data>
      <GridContainer {...panResponder.panHandlers} >
        <Grid grid={gameController._grid} />
      </ GridContainer>
      {gameController._gameOver && <Text>Game Over</Text>}
    </Container>
  );
}

export default Game;