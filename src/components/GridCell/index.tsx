import React, { useEffect, useRef } from 'react';
import { Animated } from 'react-native';
import InnerTile from '../InnerTile';
import { Container, Frame } from './styles';

interface CellGridProps {
  value: number;
}

const GridCell: React.FC<CellGridProps> = ({ value }) => {

  const opacity = useRef(new Animated.Value(0)).current;

  const fadeIn = Animated.timing(opacity, {
    useNativeDriver: false,
    toValue: 1,
    duration: 250,
  });

  return (
    <Container>
      <Frame>
        <InnerTile value={value} />
      </Frame>
    </Container>
  );
};

export default GridCell;