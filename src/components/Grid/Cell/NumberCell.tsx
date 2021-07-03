import React from 'react';
import styled from 'styled-components';
import TextCell from './TextCell';

const NumberCell = styled(TextCell)`
  text-align: right;
`;

type NumberCellProps = {
  decimalPlaces?: number;
  value: number;
};

export default ({ decimalPlaces = 4, value }: NumberCellProps) => (
  <NumberCell>{value.toFixed(decimalPlaces).toLocaleString()}</NumberCell>
);
