import React, { ReactNode } from 'react';
import styled from 'styled-components';
import Item from './Item';

const Container = styled.div`
  border-right: 1px solid var(--gray);
  height: 100%;
  padding: 5px;
  position: fixed;
`;

const SideMenu = ({ children }: { children: ReactNode }) => (
  <Container>
    {children}
  </Container>
);

SideMenu.Item = Item;

export default SideMenu;
