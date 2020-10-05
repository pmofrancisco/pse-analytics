import React, { ReactNode } from 'react';
import styled from 'styled-components';
import Item from './Item';

const Container = styled.div`
  background-color: var(--gray-dark);
`;

const SideMenu = ({ children }: { children: ReactNode }) => (
  <Container>
    {children}
  </Container>
);

SideMenu.Item = Item;

export default SideMenu;
