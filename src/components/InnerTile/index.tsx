import React from 'react';

import { Container, Value } from './styles';

interface InnerTileProps {
  value: number;
}

const InnerTile: React.FC<InnerTileProps> = ({ value }) => {
  return (
    <Container value={value}>
      {value > 0 && <Value value={value}>{value}</Value>}
    </Container>
  );
};

export default InnerTile;