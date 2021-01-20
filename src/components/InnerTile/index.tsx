import React, { useEffect, useMemo, useRef, useState } from 'react';
import { Animated } from 'react-native';

import { Container, Value } from './styles';

interface InnerTileProps {
  value: number;
}

const InnerTile: React.FC<InnerTileProps> = ({ value }) => {
  const fadeIn = useMemo(() => new Animated.Value(0), []);
  const size = useMemo(() => new Animated.Value(72), []);
  const [currentValue, setCurrentValue] = useState(0);

  const fadeInAnimation = Animated.timing(fadeIn, {
    useNativeDriver: false,
    toValue: 1,
    duration: 500,
  });

  const mergeAnimation = Animated.sequence([
    Animated.timing(size, {
      useNativeDriver: false,
      toValue: 80,
      duration: 70,
    }),
    Animated.timing(size, {
      useNativeDriver: false,
      toValue: 72,
      duration: 70,
    }),
  ]);

  useEffect(() => {
    if (value === 0) {
      setCurrentValue(value);
    } else {
      if (currentValue === 0) {
        fadeInAnimation.start();
        setCurrentValue(value);
      }

      if (currentValue >= 2) {
        mergeAnimation.start();
      }
    }
  }, [value]);

  return (
    <Container
      value={value}
      style={{ opacity: fadeIn, width: size, height: size }}
    >
      {value > 0 && <Value value={value} >{value}</Value>}
    </Container>
  );
};

export default InnerTile;