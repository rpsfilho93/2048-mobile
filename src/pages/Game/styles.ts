import { Animated } from 'react-native';
import styled from 'styled-components/native';

export const Container = styled.View`
  padding: 80px 16px 0px;
  align-items: center;
  background-color: #FAF8EF;
`;

export const Data = styled.View`
  width: 100%;
  flex-direction: row;
  justify-content: space-between;
`;

export const GridContainer = styled(Animated.View)`
  border-width: 4px;
  border-color: #BBADA0;
  border-radius: 8px;
`; 