import React, { ReactNode, ReactNodeArray } from 'react';
import styled from 'styled-components';
import { Cell } from './Cell';
import { Header, HeaderItem } from './Header';
import LoadingIndicator from './LoadingIndicator';
import Row from './Row';

const Container = styled.div`
  border: 1px solid var(--gray);
  border-radius: 10px;
  color: var(--gray-dark);
`;

type GridProps = {
  children: ReactNode | ReactNodeArray;
};

const Grid = ({ children }: GridProps) => (
  <Container>
    {children}
  </Container>
);

Grid.Cell = Cell;
Grid.Header = Header;
Grid.HeaderItem = HeaderItem;
Grid.LoadingIndicator = LoadingIndicator;
Grid.Row = Row;

export default Grid;
