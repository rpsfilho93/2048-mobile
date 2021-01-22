import React, { useCallback, useMemo, useState } from 'react';
import { PanResponder, Text, TouchableOpacity } from 'react-native';

import Grid from '../../components/Grid';
import { GameController } from '../../utils/GameController';

import { Container, Data, GridContainer, Title, Header, Box, Label, Value, Button, ButtonText, ButtonContainer, } from './styles';

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

      <Header>
        <Title>2048</Title>

        <Box>
          <Label>score</Label>
          <Value>{gameController._score}</Value>
        </Box>
      </Header>

      <ButtonContainer>

        <Button onPress={handleNewGame}>
          <ButtonText>New Game</ButtonText>
        </Button>

      </ButtonContainer>

      <GridContainer {...panResponder.panHandlers} >
        <Grid grid={gameController._grid} />
      </ GridContainer>
      {gameController._gameOver && <Text>Game Over</Text>}
    </Container>
  );
}

export default Game;