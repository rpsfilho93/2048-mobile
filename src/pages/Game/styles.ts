import { Animated } from 'react-native';
import styled from 'styled-components/native';

export const Container = styled.View`
  flex: 1;
  padding: 80px 16px 0px;
  background-color: #FAF8EF;
  align-items: center;
`;

export const GridContainer = styled(Animated.View)``;

export const Header = styled.View`
  width: 100%;
  flex-direction: row;
  justify-content: space-between;
`;

export const Title = styled.Text`
  font-size: 40px;
  font-weight: bold;
  color: #776e65;
`;

export const Box = styled.View`
  background-color: #BBADA0;
  border-radius: 3px;
  min-width: 70px;

  align-items: center;
  justify-content: center;
`;

export const Label = styled.Text`
  font-size: 12px;
  font-weight: bold;
  color: #eee4da;

  text-transform: uppercase;
`;

export const Value = styled.Text`
  font-size: 16px;
  font-weight: bold;
  color: #fff;
`;

export const ButtonContainer = styled.View`
  width: 100%;
  flex-direction: row-reverse;
`;

export const Button = styled.TouchableOpacity`
  padding: 8px 16px;

  width: 122px;
  height: 36px; 

  background-color: #8f7a66;
  border-radius: 3px;

  justify-content: center;
  align-items: center;

  margin: 16px 0px;
`;

export const ButtonText = styled.Text`
  font-size: 16px;
  font-weight: bold;
  color: #fff;
`;