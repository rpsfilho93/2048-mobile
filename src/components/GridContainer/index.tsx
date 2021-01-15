import React from 'react';

import CellGrid from '../CellGrid';

import { Container } from './styles';

interface Tile {
  id: string;
  value: number;
}

interface GridProps {
  grid: number[][];
}

const GridContainer: React.FC<GridProps> = ({ grid }) => {

  return (
    <Container>
      {grid?.map((row, i) =>
        row.map((value, j) =>
          <CellGrid key={`${i}-${j}`} value={value} />
        ))}
    </Container>
  );
};

export default GridContainer;