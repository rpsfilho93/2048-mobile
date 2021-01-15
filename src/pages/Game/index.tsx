import React, { useMemo, useState } from 'react';
import { Animated, PanResponder, Text, TouchableHighlightBase, TouchableOpacity } from 'react-native';

import GridContainer from '../../components/GridContainer';
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
  const [grid, setGrid] = useState<number[][]>(INITIAL_GRID);
  const [score, setScore] = useState(0);

  const panResponder = useMemo(() =>
    PanResponder.create({
      onMoveShouldSetPanResponder: () => true,
      onPanResponderRelease: (e, gestureState) => {
        const { dx, dy } = gestureState;

        if (Math.abs(dx) > Math.abs(dy)) {
          if (dx > 0) {
            setDirection('Right');
            moveRight(grid);
            const moveScore = mergeRight(grid);
            setScore(scr => scr + moveScore);
            moveRight(grid);
          } else {
            setDirection('Left');
            moveLeft(grid);
            const moveScore = mergeLeft(grid);
            setScore(scr => scr + moveScore);
            moveLeft(grid);
          }
        } else {
          if (dy > 0) {
            setDirection('Down');
            moveDown(grid);
            const moveScore = mergeDown(grid);
            setScore(scr => scr + moveScore);
            moveDown(grid);
          } else {
            setDirection('Up');
            moveUp(grid);
            const moveScore = mergeUp(grid);
            setScore(scr => scr + moveScore);
            moveUp(grid);
          }
        }
      }
    })
    , []);

  return (
    <Container>
      <TouchableOpacity>
        <Text>New Game</Text>
      </TouchableOpacity>
      <Data>
        <Text>Score {score}</Text>
        <Text>{direction}</Text>
      </Data>
      <Animated.View {...panResponder.panHandlers} style={{ borderWidth: 1, borderColor: '#333' }}>
        <GridContainer grid={grid} />
      </Animated.View>
    </Container>
  );
}

export default Game;