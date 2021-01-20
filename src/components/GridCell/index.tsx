import React from 'react';
import InnerTile from '../InnerTile';
import { Container } from './styles';

interface CellGridProps {
  value: number;
}

const CellGrid: React.FC<CellGridProps> = ({ value }) => {
  return (
    <Container>
      {<InnerTile value={value} />}
    </Container>
  );
};

export default CellGrid;