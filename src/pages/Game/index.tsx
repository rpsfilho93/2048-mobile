import React, { useCallback, useMemo, useState } from 'react';
import { Animated, PanResponder, Text, TouchableHighlightBase, TouchableOpacity } from 'react-native';

import GridContainer from '../../components/GridContainer';
import { GameController } from '../../utils/GameController';
import { mergeRight, mergeLeft, moveDown, moveLeft, moveRight, moveUp, mergeUp, mergeDown } from '../../utils/moves';

import { Container, Data } from './styles';

const INITIAL_GRID = [
  [0, 0, 0, 0],
  [0, 2, 2, 0],
  [0, 2, 2, 0],
  [0, 0, 0, 0],
];

const Game: React.FC = () => {
  const [direction, setDirection] = useState('None');
  const [gameController, setGameController] = useState(new GameController(4));


  const panResponder = useMemo(() =>
    PanResponder.create({
      onMoveShouldSetPanResponder: () => true,
      onPanResponderRelease: (e, gestureState) => {
        const { dx, dy } = gestureState;

        if (Math.abs(dx) > Math.abs(dy)) {
          if (dx > 0) {
            setDirection('Right');
            console.log('grid', gameController._grid);
            gameController.moveRight();
          } else {
            setDirection('Left');
            gameController.moveLeft();
          }
        } else {
          if (dy > 0) {
            setDirection('Down');
            gameController.moveDown();
          } else {
            setDirection('Up');
            gameController.moveUp();
          }
        }
      }
    })
    , [gameController]);

  return (
    <Container>
      <TouchableOpacity onPress={() => setGameController(new GameController(4))}>
        <Text>New Game</Text>
      </TouchableOpacity>
      <Data>
        <Text>Score {gameController._score}</Text>
        <Text>{direction}</Text>
      </Data>
      <Animated.View {...panResponder.panHandlers} style={{ borderWidth: 1, borderColor: '#333' }}>
        <GridContainer grid={gameController._grid} />
      </Animated.View>
    </Container>
  );
}

export default Game;