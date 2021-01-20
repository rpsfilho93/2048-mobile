import React from 'react';

import GridCell from '../GridCell';

import { Container } from './styles';

interface Tile {
  id: string;
  value: number;
}

interface GridProps {
  grid: number[][];
}

const Grid: React.FC<GridProps> = ({ grid }) => {

  return (
    <Container>
      {grid?.map((row, i) =>
        row.map((value, j) =>
          <GridCell key={`${i}-${j}`} value={value} />
        ))}
    </Container>
  );
};

export default Grid;