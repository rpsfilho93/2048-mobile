import React from 'react';
import { Container, Value } from './styles';

interface CellGridProps {
  value: number;
}

const CellGrid: React.FC<CellGridProps> = ({ value }) => {
  return (
    <Container>
      <Value>{value}</Value>
    </Container>
  );
};

export default CellGrid;