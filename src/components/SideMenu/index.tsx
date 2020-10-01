import React, { ReactNode } from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';

const Container = styled.div`
  background-color: var(--gray-dark);
`;

const SideMenu = ({ children }: { children: ReactNode }) => (
  <Container>
    {children}
  </Container>
);

SideMenu.Item = ({ to, label }: { to: string, label: string }) => (
  <div>
    <Link to={to}>{label}</Link>
  </div>
);

export default SideMenu;
