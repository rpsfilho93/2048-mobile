import React, { useEffect, useRef } from 'react';
import { Animated } from 'react-native';
import InnerTile from '../InnerTile';
import { Container } from './styles';

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
      <InnerTile value={value} />
    </Container>
  );
};

export default GridCell;