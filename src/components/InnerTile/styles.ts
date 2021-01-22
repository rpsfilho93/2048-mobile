import { Animated } from 'react-native';
import styled, { css } from 'styled-components/native';

interface TileProps {
  value: number;
}

const backgroundColors = {
  0: css`
      opacity: 0;
    `,
  2: css`
      background-color: #eee4da;      
      color: #776E65;
      `,
  4: css`
      background-color: #eee1c9;
      color: #776E65;
      `,
  8: css`
      background-color: #F2B179;
      color: #F9F6F2;
     `,
  16: css`
        background-color: #F59563;
        color: #F9F6F2;
      `,
  32: css`
        background-color: #F67C5F;
        color: #F9F6F2;
      `,
  64: css`
        background-color: #F65E3B;
        color: #F9F6F2;
      `,
  128: css`
        background-color: #EDCF72;
        color: #F9F6F2;
      `,
  256: css`
        background-color: #EDCC61;
        color: #F9F6F2;
      `,
  512: css`
        background-color: #EDC850;
        color: #F9F6F2;
      `,
  1024: css`
          background-color: #EDC53F;
          color: #F9F6F2;
        `,
  2048: css`
          background-color: #EDC22E;
          color: #F9F6F2;
        `,
};

export const Container = styled(Animated.View) <TileProps>`
  width: 72px;
  height: 72px;
  align-items: center;
  justify-content: center;
  
  border-radius: 6px;

  ${props => backgroundColors[props.value]}
`;

export const Value = styled.Text<TileProps>`
  font-size: 24px;
  font-weight: bold;
  ${props => backgroundColors[props.value]}
`;