import React from 'react';
import styled from 'styled-components';
import TextCell from './TextCell';

const PercentCell = styled(TextCell)`
  text-align: right;
`;

type NumberCellProps = {
  value: number;
};

export default ({ value }: NumberCellProps) => (
  <PercentCell>{`${value.toFixed(2)}%`}</PercentCell>
);
