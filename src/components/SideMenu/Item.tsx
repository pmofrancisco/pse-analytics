import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { IconDefinition } from '@fortawesome/free-solid-svg-icons';

const Container = styled.div`
  padding: 5px;
`;

const StyledFontAwesomeIcon = styled(FontAwesomeIcon)`
  &:hover {
    color: var(--gray-dark);
  }
`;

export default ({ icon, to }: { icon: IconDefinition, to: string }) => (
  <Container>
    <Link to={to}>
      <StyledFontAwesomeIcon color="var(--gray)" icon={icon} size="2x" />
    </Link>
  </Container>
);
